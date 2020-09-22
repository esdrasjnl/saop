import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^Abro la pagina de Visualizacion$/, {timeout:60 * 5000}, async () => {
    await page.ingresarVisualizacion();
});

When(/^Veo el titulo$/, async () => {
    expect(await page.obtenerTitulo()).to.equal('VISUALIZACION');
});