import { Page } from "@playwright/test";
import * as selectors from '../selectors.json';

export default class AlertPage {
    constructor(page: Page) {
        this.page = page;

    }

    private page: Page;

    async getSimpleAlertMessage() {
        let message = "";
        this.page.on("dialog", async (dialog) => {
            message = dialog.message();
            await dialog.accept();
        })
        await this.page.locator(selectors.alertPage.simpleAlertButton).click();
        return message;
    }
    async getConfirmAlertMessage() {
        let message = "";
        this.page.on("dialog", async (dialog) => {
            message = dialog.message();
            await dialog.accept();
        })
        await this.page.locator(selectors.alertPage.confirmAlertButton).click();
        return message;
    }

    async typeTextAndAcceptAlert(message: string) {
        this.page.on("dialog", async (dialog) => {
            await dialog.accept(message);
        })
        await this.page.locator(selectors.alertPage.promptAlertButton).click();
    }

    async clickModernAlert() {
        this.page.on("dialog", async (dialog) => {
            await dialog.accept();
        })
        await this.page.locator(selectors.alertPage.modernAlertButton).click();
    }

    async getNotificationMessage() {
        return await this.page.locator(selectors.alertPage.promptNotification).textContent();
    }

    async getModernAlertText() {
        return await this.page.locator(selectors.alertPage.modernAlertText).textContent();
    }

}