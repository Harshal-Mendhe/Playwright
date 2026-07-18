const { test, expect } = require('@playwright/test');

test.describe('Login Error Handling',() =>{
    test.beforeEach('',async ({page})=>{
        await page.goto('https://portalsup2.eagle.org/portal/');
});

test('Invalid Login',async ({page})=>{
    await page.getByText('SIGN IN TO CONTINUE').isVisible();
    await page.locator('#signInName').fill('Keppel_Fels');
    await page.locator('#password').fill('Abc12345!');
    await page.locator('#next').click();
    await page.getByText('Finance').hover();
    
    //await page.getByText('Invalid username or password').isVisible();
    //expect(await page.getByText('Invalid username or password')).toBeVisible({timeout:10000});

    const frames = page.frames();
    frames.forEach(n => console.log(n.url()));

    const headframe = page.frameLocator('#ifrmHeader');


    headframe.locator('#userProfileName').hover();

    await page.pause();

    headframe.getByText('My Account').click();

    expect (await headframe.getByLabel('My Profile')).toBeVisible({timeout:10000});

    await page.getByText('Engineering', { exact: true }).hover();
    await page.getByText('Drawings').first().click();

});

 
});

export {};