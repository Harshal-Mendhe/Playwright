const {test, expect} = require('@playwright/test');

test('From scratch',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://portalsup2.eagle.org/portal/');

})

test.only ('First Automation Test',async ({page})=>
{
    await page.goto('https://portalsup2.eagle.org/portal/');
    await expect(page).toHaveTitle('ABS: American Bureau of Shipping');
    console.log(await page.title());
    //id - tagname#id
    //class - tagname.class
    //any attribute - [attribute='value']
    //.abs-loader-logo
    await page.locator('#signInName').fill('ariesmarine');
    await page.locator('#password').fill('Abc12345!');
    await page.locator('#next').click();
    //await page.pause();
    await page.getByText("Engineering", { exact: true }).hover();
    await page.getByText('Projects/Vessels').nth(0).click();
    await page.locator('#identifierInput').fill('ariesmarine@ABSAuthUAT.onmicrosoft.com');
    

})