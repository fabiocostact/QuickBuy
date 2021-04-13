import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "src/app/produto/produto.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
    providedIn: "root"
})
export class ProdutoServico implements OnInit {

    private _baseUrl: string;
    public produto: Produto[];

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    ngOnInit(): void {
        this.produto = [];
    }

    public obterTodosProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this._baseUrl + "api/produto");
    }

    public obterProduto(produtoID: number): Observable<Produto> {
        return this.http.get<Produto>(this._baseUrl + "api/produto/" + produtoID);
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public cadastrar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto", JSON.stringify(produto), { headers: this.headers })
    }

    public salvar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers })
    }

    public deletar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers })
    }

    public enviarArquivo(file: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", file, file.name);
        return this.http.post<string>(this._baseUrl + "api/produto/enviararquivo", formData)
    }


}