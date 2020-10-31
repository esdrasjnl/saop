


    import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^El usuario desea ver el porcentaje de creditos$/, { timeout: 50000 }, async () => {
  await page.navigateTo();
});

When(/^Ingreso a la pagina inicio$/, { timeout: 50000 }, async () => {
  expect(await page.ingresoPrincipal());
});

When(/^Veo el porcentaje de creditos$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.name("cajacp"));
  //await ingreso.sendKeys("56");
});

Then(/^Muestra un error$/, { timeout: 50000 }, async () => {
  
});