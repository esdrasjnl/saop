import { browser, by, element } from 'protractor';

export class AppPage {


  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  ingresarLogin() {
    return browser.get(browser.baseUrl + 'login') as Promise<any>;
  }

  ingresoPrincipal()
  {
    return browser.get(browser.baseUrl + 'principal') as Promise<any>;
  }

  ingresarVisualizacion() {
    return browser.get(browser.baseUrl + 'visualizacion-cursos') as Promise<any>;
  }

  ingresarPerfil() {
    return browser.get(browser.baseUrl + 'perfil') as Promise<any>;
  }

  ingresarregistro() {
    return browser.get(browser.baseUrl + 'registro') as Promise<any>;
  }


  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  obtenerTitulo(){
    return element(by.css('h4')).getText() as Promise<any>;
  }

  obtenerCarnetUsuario(){
    return element(by.name('cajacarnet')).getText() as Promise<any>;
  }

  /* REVISAR CAMPOS VACIOS DE REGISTRO */

  campoCarnet()
  {
    let carnet = element(by.name('cajac')).getText() as Promise<any>;
    return carnet;
  }
  
  campoNombre()
  {
    let nombre = element(by.name('cajan')).getText() as Promise<any>;
    return nombre;
  }

  campoApellido()
  {
    let apellido = element(by.name('cajap')).getText() as Promise<any>;
    return apellido;
  }

  campoCui()
  {
    let cui = element(by.name('cajacui')).getText() as Promise<any>;
    return cui;
  }

  campoPassword()
  {
    const password = element(by.name('cajapas')).getText() as Promise<any>;
    return password;
  }

  comboVisualizacion()
  {
    return element(by.css('select')).getText() as Promise<any>;
  }


}