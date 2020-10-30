import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

/*Given(/^Abro la pagina de asignacion de cursos$/, { timeout: 50000 }, async () => {
    await page.ingresarAsignacion();
  });*/