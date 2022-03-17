import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotasComponent } from './notas/notas.component';
import { Error404Component } from './error404/error404.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'notas', component: NotasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
