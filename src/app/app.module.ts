import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { ProdutosComponent } from './institucional/produtos/produtos.component';
import { rootRouterConfig } from './app.routes';
import { FeaturesComponent } from './demo/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ProdutosComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig)],
    FormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
