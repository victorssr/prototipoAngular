import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent {

  public contadorCliques: number = 0;
  public nome: string = "";

  somaClique() {
    this.contadorCliques++;
  }

  zeraCliques() {
    this.contadorCliques = 0;
  }

}