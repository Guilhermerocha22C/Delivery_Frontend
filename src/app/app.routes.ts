import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { AdicionaisComponent } from './components/adicionais/adicionais.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CozinhaComponent } from './components/cozinha/cozinha.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { InfoComponent } from './components/info/info.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';

const routes: Routes = [
  { path: '', component: CardapioComponent },
  { path: 'adicionais/:id', component: AdicionaisComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'cozinha', component: CozinhaComponent },
  { path: 'gerente', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sucesso', component: SucessoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }