import { test, expect } from '@playwright/test';
import * as env from '../environments.json';
import * as data from '../data.json';
import HomePage from '../pages/home.page';
import AlertPage from '../pages/alert.page';

test.describe('Testing alerts @alert', () => {

    let homePage: HomePage;
    let alertPage: AlertPage;
    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);

        await page.goto(env.envURLs.prod, {
            waitUntil: 'load',
        });

        await homePage.getAlertLink().click();
        alertPage = new AlertPage(page);
    });

    test('Task 1: Check the "Simple Alert" message', async ({}) => {
        const expectedText = "Hey! Welcome to LetCode";
        const actualText =  await alertPage.getSimpleAlertMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 2: Check the "Confirm Alert" message', async ({}) => {
        const expectedText = "Are you happy with LetCode?";
        const actualText =  await alertPage.getConfirmAlertMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 3: Check if name shows up after accepting the prompt', async ({}) => {
        const name = data.name;
        const expectedText = `Your name is: ${name}`;

        await alertPage.typeTextAndAcceptAlert(name);
        const actualText = await alertPage.getNotificationMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 4: Check the "Sweet ALert" message', async ({}) => {
        const expectedText = "Modern Alert - Some people address me as sweet alert as well ";
        await alertPage.clickModernAlert();
        const actualText = await alertPage.getModernAlertText();

        expect(actualText).toBe(expectedText);
    });
})