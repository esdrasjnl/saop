import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When(/^Abro la pagina de Perfil$/, {timeout:5000}, async () => {
    await page.ingresarPerfil();
});

When(/^Veo el titulo de Perfil$/,{timeout:5000}, async () => {
    expect(await page.obtenerTitulo()).to.equal('MI PERFIL');
});

Then(/^Veo que mi carnet coincida$/,{timeout:5000}, async () => {
  expect(await page.obtenerCarnetUsuario()).to.equal('');
  
});
