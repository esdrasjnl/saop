import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  ingresarLogin() {
    return browser.get(browser.baseUrl + 'login') as Promise<any>;
  }

  obtenerTitulo(){
    return element(by.css('h4')).getText() as Promise<any>;
  }

  ingresarCarnet(valor){
    var carnet = element(by.id("cajac"));
    carnet.sendKeys(valor)
    return carnet;
  }

  ingresarContrasena(valor){
    var contrasena = element(by.id("cajap"));
    contrasena.sendKeys(valor);
    return contrasena;
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
}