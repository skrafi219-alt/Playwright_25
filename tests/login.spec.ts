import {expect} from '@playwright/test';
import {test} from '../fixtures/fixtures';
import testdata from '../test-data/testdata.json';

test("login TestCase", async ({page,loginPage})=>{

    
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(testdata.username,testdata.password);
    const title=await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Swag Labs");
    
});