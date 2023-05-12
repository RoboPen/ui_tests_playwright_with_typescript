import { Select } from '../enums/select.enum';
import { Notification } from '../enums/notification.enum';
import {test, expect} from './fixtures'

test.describe('Testing select elements @select', () => {
    test('Task 1: Check if the notification message contains "Apple"', async ({selectPage}) => {
        await selectPage.selectByLabel("Apple", Select.FRUIT);
        const text = await selectPage.getNotificationText(Notification.FRUIT);
        expect(text).toContain("Apple");
    });

    test('Task 2: Check if the notification message contains "Ant-Man"', async ({selectPage}) => {
        await selectPage.selectByValue("am", Select.HERO);
        const text = await selectPage.getNotificationText(Notification.HERO_AND_LANGUAGE);
        expect(text).toContain("Ant-Man");
    });

    test('Task 3: Check if "Ant-Man" and "Batman" are selected', async ({selectPage}) => {
        const heroes = await selectPage.selectTwoHeroes("Ant-Man", "Batman");
        await expect(heroes).toHaveValues([/am/, /bt/]);
    });

    test('Task 4: Check if "C#" is selected', async ({selectPage}) => {
        const numOfLanguages = await selectPage.getSelectOptionsCount(Select.LANGUAGE);
        await selectPage.selectByIndex(numOfLanguages - 1, Select.LANGUAGE);
        const text = await selectPage.getNotificationText(Notification.HERO_AND_LANGUAGE);
        expect(text).toBe("You have selected C#");
    });

    test('Task 5: Check if India is selected', async ({selectPage}) => {
        await selectPage.selectByValue("India", Select.COUNTRY);
        let locator = selectPage.getSelect(Select.COUNTRY);
        await expect(locator).toHaveValue(/India/);
    });
})