import { expect, test, page } from "@playwright/test";

test.describe("Login Error Handling @sanity", () => {
  test.beforeEach("", async ({ page }) => {
    await page.goto("https://portalsup2.eagle.org/portal/");
  });

  test("Invalid Login", async ({ page }) => {
    await page.getByText("SIGN IN TO CONTINUE").isVisible();
    await page.locator("#signInName").fill("keppel_fels");
    await page.locator("#password").fill("Abc12345!");
    await page.locator("#next").click();
    // await page.getByText('Invalid username or password').isVisible();
    // expect(await page.getByText('Invalid username or password')).toBeVisible({timeout:10000});

    // const frames = page.frames();
    // frames.forEach((n) => console.log(n.url()));
    await page.getByText("Engineering", { exact: true }).hover();
    await page.getByText('Projects/Vessels').nth(0).click();
    await page.locator('#identifierInput').fill('ariesmarine@ABSAuthUAT.onmicrosoft.com');
  });
});
