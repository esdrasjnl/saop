import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^Deseo crear una cuenta en la aplicacion$/, {timeout:5000}, async () => {
    await page.ingresarregistro();
});

When(/^Veo el titulo de Registro$/, async () => {
    expect(await page.obtenerTitulo()).to.equal('REGISTRO USUARIO');
});

When(/^Los campos deben de estar vacios$/, async () => {
  expect(await page.campoCarnet()).to.equal('');
  expect(await page.campoNombre()).to.equal('');
  expect(await page.campoApellido()).to.equal('');
  expect(await page.campoCui()).to.equal('');
  expect(await page.campoPassword()).to.equal('');
});

