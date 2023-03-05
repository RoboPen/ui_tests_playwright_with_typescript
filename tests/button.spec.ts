import { test, expect } from '@playwright/test';
import * as env from '../environments.json';
import HomePage from '../pages/home.page';
import ButtonPage from '../pages/button.page';
import { Button } from '../enums/button.enum';

test.describe('Testing buttons elements @button', () => {

    let homePage: HomePage;
    let buttonPage: ButtonPage;
    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);

        await page.goto(env.envURLs.prod, {
            waitUntil: 'load',
        });

        await homePage.getButtonsLink().click();
        buttonPage = new ButtonPage(page);
    });

    test('Task 1: Check if home page is loaded after clicking "Goto Home" button', async ({page}) => {
        await buttonPage.findBtn(Button.GO_TO_HOME).click();
        await expect(page).toHaveURL('https://letcode.in/');
    });

    test('Task 2: Find coordinates of "Find Location" button', async ({}) => {
        const x = (await buttonPage.findBtn(Button.FIND_LOCATION).boundingBox()).x;
        const y = (await buttonPage.findBtn(Button.FIND_LOCATION).boundingBox()).y;
        expect.soft(x).toBe(88);
        expect(y).toBe(338);
    });

    test('Task 3: Find color of "What is my color?" button', async ({}) => {
        const button = buttonPage.findBtn(Button.FIND_COLOR);
        const color = await button.evaluate((element) =>
        window.getComputedStyle(element).getPropertyValue('background-color'));
        expect(color).toBe("rgb(138, 77, 118)");
    });

    test('Task 4: Find dimensions of "How tall & fat I am?" button', async ({browserName}) => {
        test.skip(browserName === 'firefox' || browserName === 'webkit');
        const height = (await buttonPage.findBtn(Button.FIND_DIMENSIONS).boundingBox()).height;
        const width = (await buttonPage.findBtn(Button.FIND_DIMENSIONS).boundingBox()).width;
        expect.soft(height).toBe(40);
        expect(width).toBe(175);
    });
    
    test('Task 5: Check if "Disabled" button is disabled', async ({}) => {
        const button = buttonPage.findBtn(Button.DISABLED);
        expect(await button.isDisabled()).toBe(true);
    });

    test('Task 6: Check button text after click and hold it', async ({page}) => {
        await buttonPage.findBtn(Button.BEFORE_PRESS_AND_HOLD).click({
            delay: 2000
        });
    
        let button = buttonPage.findBtn(Button.AFTER_PRESS_AND_HOLD);
        expect(await button.innerText()).toContain("long pressed");
    });

})
