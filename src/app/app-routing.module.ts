import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  { path: 'add', component: CadastroSeguroComponent },
  { path: 'list', component: ListarSegurosComponent },
];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
