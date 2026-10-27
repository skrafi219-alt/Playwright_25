import {test,expect} from '@playwright/test';
import testdata from '../test-data/testdata.json';

test.beforeAll(async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/client");
    await page.locator("#userEmail").fill(testdata.username_rehulshetty);
    await page.locator("#userPassword").fill(testdata.password_rahulshetty);
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});


});

test("storageSate testcase", async ({browser})=>{

    const context=await browser.newContext({storageState:'state.json'});
    const page = await context.newPage();
    await page.goto("/client");
    


});