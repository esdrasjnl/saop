import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^Abro la pagina de Visualizacion$/, {timeout:5000}, async () => {
    await page.ingresarVisualizacion();
});

When(/^Veo el titulo Visualizacion$/, {timeout:5000}, async () => {
    expect(await page.obtenerTitulo()).to.equal('VISUALIZACION DE CURSOS DETALLADOS');
});

When(/^Se da click en el combo para elegir el curso$/, {timeout:5000}, async () => {
  expect(await page.comboVisualizacion()).to.equals('');
});

Then(/^Se muestra informacion del curso seleccionado$/, {timeout:5000}, async () => {

});

