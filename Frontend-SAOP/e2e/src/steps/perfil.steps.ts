import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

When(/^Abro la pagina de Perfil$/, {timeout:5000}, async () => {
    await page.ingresarPerfil();
});

When(/^Veo el titulo de Perfil$/,{timeout:5000}, async () => {
    expect(await page.obtenerTitulo()).to.equal('MI PERFIL');
});

When(/^Veo que mi carnet coincida$/,{timeout:5000}, async () => {
  delay(500);
  expect(await page.obtenerCarnetUsuario()).to.equal('201503986');
});

Then(/^Cierro Sesion$/,{timeout:5000}, async () => {
  const ingreso = element(by.id("cerrar"));
  await ingreso.click();
});