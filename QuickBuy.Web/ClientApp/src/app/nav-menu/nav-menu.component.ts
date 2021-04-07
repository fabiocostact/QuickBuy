import { UsuarioServico } from './../servicos/usuario/usuario.servico';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(public router: Router, private usuarioServico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  usuarioLogado(): boolean {
    return this.usuarioServico.usuarioAutenticado();
  }

  sair() {
    this.usuarioServico.limparSessao();
    this.router.navigate(['/']);
  }
}
