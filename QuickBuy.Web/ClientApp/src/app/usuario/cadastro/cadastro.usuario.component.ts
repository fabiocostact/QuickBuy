import { UsuarioServico } from './../../servicos/usuario/usuario.servico';
import { Usuario } from './../login/login.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cadastro-usuario',
    templateUrl: './cadastro.usuario.component.html',
    styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {
    public usuario: Usuario;
    public ativarSpinner: boolean;
    public msg: string;
    public usuarioCadastrado: boolean;

    constructor(private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar() {
        this.usuarioServico.cadastrarUsuario(this.usuario).subscribe(
            usuarioJson => {
                this.usuarioCadastrado = true;
                this.msg = "";
            },
            e => {
                this.msg = e.error;
            }
        );
    }

}