import { UsuarioServico } from './../../servicos/usuario/usuario.servico';
import { Usuario } from './login.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    public usuario;
    public returnUrl: string;
    public msg: string;
    public ativarSpinner: boolean = false;

    constructor(private router: Router, private activateRouter: ActivatedRoute, private Service: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    }


    entrar() {
        this.ativarSpinner = true;
        this.Service.verificarUsuario(this.usuario).subscribe(
            usuario_json => {
                //sessionStorage.setItem("usuario-autenticado", "1");
                this.Service.usuario = usuario_json;


                if (this.returnUrl == null) {
                    this.router.navigate(["/"]);
                } else {
                    this.router.navigate([this.returnUrl]);
                }
            },
            err => {
                this.msg = err.error;
            }
        );
        this.ativarSpinner = false;
    }
}