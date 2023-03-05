import { test, expect } from '@playwright/test';
import * as data from '../data.json';
import * as env from '../environments.json';
import HomePage from '../pages/home.page';
import InputPage from '../pages/input.page';
import { Input } from '../enums/input.enum';

test.describe('Testing inputs elements @input', () => {

    let homePage: HomePage;
    let inputPage: InputPage;
    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);

        await page.goto(env.envURLs.prod, {
            waitUntil: 'load',
        });

        await homePage.getInputLink().click();
        inputPage = new InputPage(page);
    });

    test('Task 1: Enter your full name', async ({}) => {
        await inputPage.enterFullName(data.name);
        expect(await inputPage.getTextFromInput(Input.FULLNAME)).toBe(data.name);
    });

    test('Task 2: Append a text', async ({}) => {
        await inputPage.appendText(data.appendedText);
        expect(await inputPage.getTextFromInput(Input.APPENDED_TEXT)).toBe("I am good"+data.appendedText);
    });

    test('Task 3: What is inside the text box', async ({}) => {
        expect(await inputPage.getTextFromInput(Input.TEXTBOX)).toBe("ortonikc");
    });

    test('Task 4: Clear the text', async ({}) => {
        await inputPage.clearText(Input.CLEAR_TEXT);
        expect(await inputPage.getTextFromInput(Input.CLEAR_TEXT)).toBe("");
    });

    test('Task 5: Confirm edit field is disabled', async ({}) => {
        expect(await inputPage.isDisabled(Input.NO_EDIT_FIELD)).toBe(true);
    });

    test('Task 6: Confirm text is readonly', async ({}) => {
        expect(await inputPage.isEditable(Input.READONLY)).toBe(false);
    });

    test('Task 7: Confirm traverse with TAB key', async ({browserName}) => {
        test.skip(browserName === "firefox")
        expect(await inputPage.isTabKeyWorking()).toBe(true);
    });
})
