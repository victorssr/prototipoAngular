import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { ProdutosComponent } from './institucional/produtos/produtos.component';
import { FeaturesComponent } from './demo/features/features.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'detalhe-produto/:id', component: ProdutosComponent },
    { path: 'features', component: FeaturesComponent }
];