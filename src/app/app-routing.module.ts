import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // Definir RUTAS aca.

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
