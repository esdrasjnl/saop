import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^Abro la pagina de PENSUM$/, async () => {
    await page.ingresarPensum();
});

When(/^Veo el titulo VISUALIZACION PENSUM$/, async () => {
    expect(await page.obtenerTitulo()).to.equal('VISUALIZACION PENSUM');
});


Then(/^Busco el curso de Tecnicas de estudio e investigacion$/, async () => {
  expect(await page.obtenerNombreCurso()).not.to.equal('Tecnicas de estudio e investigacion');
});

When(/^Ingreso a pagina de pensum$/, async () => {
  await page.ingresarPensum();
});

When(/^Veo el pensum y busco el curso de Tecnicas de estudio e investigacion$/, async () => {
  expect(await page.obtenerNombreCurso()).to.equal('Tecnicas de estudio e investigacion');
});



