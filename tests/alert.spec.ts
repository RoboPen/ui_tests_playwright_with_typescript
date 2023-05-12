import {test, expect} from './fixtures'
import * as data from '../data.json';

test.describe('Testing alerts @alert', () => {
    test('Task 1: Check the "Simple Alert" message', async ({alertPage}) => {
        const expectedText = "Hey! Welcome to LetCode";
        const actualText =  await alertPage.getSimpleAlertMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 2: Check the "Confirm Alert" message', async ({alertPage}) => {
        const expectedText = "Are you happy with LetCode?";
        const actualText =  await alertPage.getConfirmAlertMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 3: Check if name shows up after accepting the prompt', async ({alertPage}) => {
        const name = data.name;
        const expectedText = `Your name is: ${name}`;

        await alertPage.typeTextAndAcceptAlert(name);
        const actualText = await alertPage.getNotificationMessage();

        expect(actualText).toBe(expectedText);
    });

    test('Task 4: Check the "Sweet ALert" message', async ({alertPage}) => {
        const expectedText = "Modern Alert - Some people address me as sweet alert as well ";
        await alertPage.clickModernAlert();
        const actualText = await alertPage.getModernAlertText();

        expect(actualText).toBe(expectedText);
    });
})