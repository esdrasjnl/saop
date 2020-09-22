import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisualizacionComponent} from "./components/visualizacion/visualizacion.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent} from './components/perfil/perfil.component'
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'visualizacion-cursos',
    component: VisualizacionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'principal',
    component: PrincipalComponent
  }
  ,
  {
    path: 'perfil',
    component: PerfilComponent
  }
  ,
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
