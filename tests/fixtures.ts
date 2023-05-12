import {test as base} from '@playwright/test';
import * as env from '../environments.json';
import HomePage from '../pages/home.page';
import AlertPage from '../pages/alert.page';
import ButtonPage from '../pages/button.page';
import InputPage from '../pages/input.page';
import SelectPage from '../pages/select.page';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  alertPage: AlertPage;
  buttonPage: ButtonPage;
  inputPage: InputPage;
  selectPage: SelectPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    await page.goto(env.envURLs.prod, {
        waitUntil: 'load',
    });

    // Use the fixture value in the test.
    await use(homePage);
  },

  alertPage: async ({ page, homePage }, use) => {
    const alertPage = new AlertPage(page);
    await homePage.getAlertLink().click();
    await use(alertPage);
  },

  buttonPage: async ({ page, homePage }, use) => {
    const buttonPage = new ButtonPage(page);
    await homePage.getButtonsLink().click();
    await use(buttonPage);
  },

  inputPage: async ({ page, homePage }, use) => {
    const inputPage = new InputPage(page);
    await homePage.getInputLink().click();
    await use(inputPage);
  },

  selectPage: async ({ page, homePage }, use) => {
    const selectPage = new SelectPage(page);
    await homePage.getSelectLink().click();
    await use(selectPage);
  },
});
export { expect } from '@playwright/test';