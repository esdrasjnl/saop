import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^El usuario desea ver el numero de creditos$/, { timeout: 50000 }, async () => {
  await page.navigateTo();
});

When(/^Ingreso a la pagina principal$/, { timeout: 50000 }, async () => {
  expect(await page.ingresoPrincipal());
});

When(/^Veo el numero de creditos$/, { timeout: 50000 }, async () => {
  //const ingreso = element(by.name("cajacr"));
  //await ingreso.sendKeys("56");
});

Then(/^Muestra una alerta de error$/, { timeout: 50000 }, async () => {
  
});