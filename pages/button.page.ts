import { Locator, Page } from "@playwright/test";
import * as selectors from '../selectors.json';
import { Button } from '../enums/button.enum';

export default class buttonsPage {
    constructor(page: Page){
        this.page = page;
        
    }

    private page: Page;

    private buttonMap:  Map<Button, string> = new Map<Button, string>([
        [Button.GO_TO_HOME, selectors.buttonsPage.goToHomeBtn],
        [Button.FIND_LOCATION, selectors.buttonsPage.findLocationBtn],
        [Button.FIND_COLOR, selectors.buttonsPage.findColorBtn],
        [Button.FIND_DIMENSIONS, selectors.buttonsPage.findDimensionsBtn],
        [Button.DISABLED, selectors.buttonsPage.disabledBtn],
        [Button.BEFORE_PRESS_AND_HOLD, selectors.buttonsPage.beforePressingBtn],
        [Button.AFTER_PRESS_AND_HOLD, selectors.buttonsPage.afterPressingBtn]
    ]);

    findBtn(button : Button) : Locator{
        return this.page.locator(this.buttonMap.get(button));
    }

    async getTextFromBtn(button : Button) : Promise<string>{
        return await this.findBtn(button).innerText();
    }
}