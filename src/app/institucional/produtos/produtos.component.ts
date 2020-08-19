import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos/produtos.service';
import { Produto } from '../../produtos/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styles: [
  ]
})
export class ProdutosComponent implements OnInit {

  public produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );

  }

}
