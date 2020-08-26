import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisualizacionComponent} from "./components/visualizacion/visualizacion.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'visualizacion-cursos',
    component: VisualizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
