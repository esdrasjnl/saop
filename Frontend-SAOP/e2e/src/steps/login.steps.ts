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

When(/^Veo el titulo de login$/, { timeout: 50000 }, async () => {
  expect(await page.obtenerTitulo()).to.equal('LOGIN');
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


When(/^Se da click en el boton de ingreso$/, { timeout: 50000 }, async () => {
  const ingreso = element(by.id("Ingresar"));
  await ingreso.click();
});



When(/^me dirige a pagina principal$/, { timeout: 50000 }, async () => {
  await page.ingresoPrincipal();
});

Then(/^Muestra una alerta$/, { timeout: 50000 }, async () => {
  
});
