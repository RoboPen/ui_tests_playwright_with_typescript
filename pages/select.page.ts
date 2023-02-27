import { Locator, Page } from "@playwright/test";
import * as selectors from '../selectors.json';
import { Select } from '../enums/select.enum';
import { Notification } from '../enums/notification.enum';


export default class selectPage {
    constructor(page: Page) {
        this.page = page;

    }

    private page: Page;

    private selectMap: Map<Select, string> = new Map<Select, string>([
        [Select.COUNTRY, selectors.selectPage.countrySelect],
        [Select.FRUIT, selectors.selectPage.fruitsSelect],
        [Select.HERO, selectors.selectPage.superherosSelect],
        [Select.LANGUAGE, selectors.selectPage.languageSelect]
    ]);

    private notificationMap: Map<Notification, string> = new Map<Notification, string>([
        [Notification.FRUIT, selectors.selectPage.fruitNotification],
        [Notification.HERO_AND_LANGUAGE, selectors.selectPage.languageAndHeroNotification]
    ])


    public getNotificationText(notification: Notification): Promise<string>{
        return this.page.locator(this.notificationMap.get(notification)).innerText();
    }

    public getSelect(select: Select): Locator {
        return this.page.locator(this.selectMap.get(select));
    }

    async selectByValue(value: string, select: Select) {
        const dropdown = this.getSelect(select);
        await dropdown.selectOption(value);
    }

    async selectByIndex(index: number, select: Select) {
        const dropdown = this.getSelect(select);
        await dropdown.selectOption({index: index});
    }

    async selectByLabel(label: string, select: Select) {
        const dropdown = this.getSelect(select);
        await dropdown.selectOption({label: label});
    }

    async selectTwoHeroes(label: string, label2: string) : Promise<Locator>{
        const heroes = this.getSelect(Select.HERO);
        await heroes.selectOption([
            {label: label},
            {label: label2}
        ]);
        return heroes;
    }

    async getSelectOptionsCount(select : Select) : Promise<number>{
        const selectedOptions = await this.page.locator(this.selectMap.get(select) + " option").all();
        return selectedOptions.length;
    }

}