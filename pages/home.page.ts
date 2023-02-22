import { Locator, Page } from "@playwright/test";
import * as selectors from '../selectors.json';

export default class HomePage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getInputLink(): Locator {
        return this.page.locator(selectors.homePage.inputLink);
    }

    public getButtonsLink(): Locator {
        return this.page.locator(selectors.homePage.buttonLink);
    }

    public getSelectLink(): Locator {
        return this.page.locator(selectors.homePage.selectLink);
    }

    public getAlertLink(): Locator {
        return this.page.locator(selectors.homePage.alertLink);
    }

    public getFrameLink(): Locator {
        return this.page.locator(selectors.homePage.frameLink);
    }

    public getRadioLink(): Locator {
        return this.page.locator(selectors.homePage.radioLink);
    }

    public getWindowLink(): Locator {
        return this.page.locator(selectors.homePage.windowLink);
    }

    public getElementsLink(): Locator {
        return this.page.locator(selectors.homePage.elementsLink);
    }

    public getDragLink(): Locator {
        return this.page.locator(selectors.homePage.dragLink);
    }

    public getDropLink(): Locator {
        return this.page.locator(selectors.homePage.dropLink);
    }

    public getSortLink(): Locator {
        return this.page.locator(selectors.homePage.sortLink);
    }

    public getMultiselectLink(): Locator {
        return this.page.locator(selectors.homePage.multiselectLink);
    }

    public getSliderLink(): Locator {
        return this.page.locator(selectors.homePage.sliderLink);
    }

    public getSimpleTableLink(): Locator {
        return this.page.locator(selectors.homePage.simpleTableLink);
    }

    public getAdvancedTableLink(): Locator {
        return this.page.locator(selectors.homePage.advancedTableLink);
    }

    public getWaitsLink(): Locator {
        return this.page.locator(selectors.homePage.waitsLink);
    }

    public getFormsTableLink(): Locator {
        return this.page.locator(selectors.homePage.formsLink);
    }

    public getFileLink(): Locator {
        return this.page.locator(selectors.homePage.fileLink);
    }

    public getShadowLink(): Locator {
        return this.page.locator(selectors.homePage.shadowLink);
    }
}