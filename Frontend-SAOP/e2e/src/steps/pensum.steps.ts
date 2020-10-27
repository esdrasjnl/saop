import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

<<<<<<< HEAD
Given(/^Deseo ver el Pensum de la carrera$/, {timeout:5000}, async () => {
=======
Given(/^Abro la pagina de PENSUM$/, { timeout: 50000 }, async () => {
>>>>>>> cursos_ganados
    await page.ingresarPensum();
});

When(/^Veo el titulo VISUALIZACION PENSUM$/,{ timeout: 50000 }, async () => {
    expect(await page.obtenerTitulo()).to.equal('VISUALIZACION PENSUM');
});


Then(/^Busco el curso de Tecnicas de estudio e investigacion$/,{ timeout: 50000 }, async () => {
  //expect(await page.obtenerNombreCurso()).to.equal('Tecnicas de estudio e investigacion');
});

When(/^Ingreso a pagina de pensum$/,{ timeout: 50000 }, async () => {
  await page.ingresarPensum();
});

When(/^Veo el pensum y busco el curso de Tecnicas de estudio e investigacion$/,{ timeout: 50000 }, async () => {
  //expect(await page.obtenerNombreCurso()).to.equal('Tecnicas de estudio e investigacion');
});



