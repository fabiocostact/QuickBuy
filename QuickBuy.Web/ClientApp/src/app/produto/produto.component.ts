import { ProdutoServico } from './../servicos/produto/produto.servico';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]

})

export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public arquivoSelecionado: File;

    constructor(private ProdutoServico: ProdutoServico) {

    }

    ngOnInit(): void {
        //throw new Error('Method not implemented.');

    }

    public cadastrar() {
        this.ProdutoServico.cadastrar(this.produto).subscribe(
            data => {

            },
            erro => {
                console.log(erro.error);
            }
        );
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);

        this.ProdutoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
            data => {
                this.produto.nomeArquivo = data;
            },
            erro => {
                console.log(erro.error);
            }
        );
    }
}
