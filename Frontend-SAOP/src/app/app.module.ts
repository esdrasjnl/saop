import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import {CursoService} from './services/curso.service';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizacionComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
