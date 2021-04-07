import { UsuarioServico } from './../servicos/usuario/usuario.servico';
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"

@Injectable({
    providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.usuarioServico.usuarioAutenticado()) {
            return true
        } else {
            this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

}