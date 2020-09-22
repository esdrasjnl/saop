import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^Abro la pagina de Login$/, { timeout: 50000 }, async () => {
  await page.ingresarLogin();
});

When(/^Veo el titulo$/, { timeout: 50000 }, async () => {
  expect(await page.obtenerTitulo()).to.equal('LOGIN');
});

Then(/^ingresar el carnet e ingresar la contrasena$/, { timeout: 50000 }, async () => {
  
});



Then(/^click en el boton de ingreso$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.id("Ingresar"));
  await ingreso.click();

});

Then(/^me dirige a pagina principal$/, { timeout: 50000 }, async () => {
  await page.ingresoPrincipal();
});