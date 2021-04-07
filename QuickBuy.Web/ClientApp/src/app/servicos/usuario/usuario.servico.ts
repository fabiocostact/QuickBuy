import { Usuario } from './../../usuario/login/login.model';
import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsuarioServico {

    private baseURL: string;
    private _usuario: Usuario;

    get usuario(): Usuario {
        let usuario_json = sessionStorage.getItem("usuario-autenticado");
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }

    set usuario(usuario: Usuario) {
        sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
        this._usuario = usuario;
    }

    public usuarioAutenticado(): boolean {
        return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
    }

    public limparSessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl;
    }

    public verificarUsuario(usuario: Usuario): Observable<Usuario> {

        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: usuario.email,
            senha: usuario.senha
        }

        return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarusuario", body, { headers })
    }
}