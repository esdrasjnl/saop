import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^El usuario desea utilizar la aplicación$/, { timeout: 50000 }, async () => {
  await page.navigateTo();
});

When(/^Ingreso a la pagina de login$/, { timeout: 50000 }, async () => {
  expect(await page.ingresarLogin());
});

When(/^Completo el campo carnet con 201503986$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.name("cajac"));
  await ingreso.sendKeys(201503986);
});

When(/^Completo el campo password con 123$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.name("cajap"));
  await ingreso.sendKeys('123');
  
});

When(/^No completo el campo carnet$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.name("cajac"));
  await ingreso.sendKeys();
});

When(/^No completo el campo password$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.name("cajap"));
  await ingreso.sendKeys('');
  
});


When(/^Doy click en el boton de ingreso$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.id("Ingresar"));
  await ingreso.click();
});



Then(/^Me dirige a pagina principal$/, { timeout: 50000 }, async () => {
  await page.ingresoPrincipal();
});

Then(/^Muestra una alerta$/, { timeout: 50000 }, async () => {
  
});
