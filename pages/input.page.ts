import { Page } from "@playwright/test";
import * as selectors from '../selectors.json';
import { Input } from '../enums/input.enum';

export default class InputPage {
    constructor(page: Page){
        this.page = page;
        
    }

    private page: Page;

    private inputMap:  Map<Input, string> = new Map<Input, string>([
        [Input.APPENDED_TEXT, selectors.inputPage.appendInput],
        [Input.CLEAR_TEXT, selectors.inputPage.clearTextInput],
        [Input.NO_EDIT_FIELD, selectors.inputPage.noEditFieldInput],
        [Input.FULLNAME, selectors.inputPage.fullNameInput],
        [Input.READONLY, selectors.inputPage.readOnlyInput],
        [Input.TEXTBOX, selectors.inputPage.textboxInput],
    ]);
    
    async enterFullName(fullName: string) {
        await this.page.locator(selectors.inputPage.fullNameInput).type(fullName);
    }

    async getTextFromInput(input: Input) : Promise<string>{
        return await this.page.locator(this.inputMap.get(input)).inputValue();
    }

    async appendText(text: string){
        const inputField = this.page.locator(selectors.inputPage.appendInput);
        const existingValue = await inputField.inputValue();
        await inputField.clear();
        await inputField.type(existingValue + text);
    }

    async clearText(input: Input){
        await this.page.locator(this.inputMap.get(input)).clear();
    }

    async isDisabled(input: Input) : Promise<boolean>{
        return await this.page.locator(this.inputMap.get(input)).isDisabled();
    }

    async isEditable(input: Input) : Promise<boolean>{
        return await this.page.locator(this.inputMap.get(input)).isEditable();
    }

    async isTabKeyWorking() : Promise<boolean>{
        const list = await this.page.locator(selectors.inputPage.allInputs).all();
        let list2:string[] = [];
        for(let i = 0; i < list.length; i++){
            await this.page.keyboard.press('Tab');
            let ele = await this.page.evaluate(() => document.activeElement.getAttribute("id"));
            list2.push(ele);
        }
        return !this.areDuplicates(list2)
}

    areDuplicates(array:string[]) : boolean{
        return new Set(array).size !== array.length;
    }
}