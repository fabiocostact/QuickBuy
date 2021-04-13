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
    private headers = new HttpHeaders().set('content-type', 'application/json');

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

        return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarusuario", JSON.stringify(usuario), { headers: this.headers })
    }

    public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

        return this.http.post<Usuario>(this.baseURL + "api/usuario", JSON.stringify(usuario), { headers: this.headers })
    }
}