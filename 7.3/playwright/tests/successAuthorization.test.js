const { test, expect, chromium } = require("@playwright/test");
const {username, pass} = require("./user.js");

test("test success authorization", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
     // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', (username));
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', (pass));
  // Click [data-testid="login-submit-btn"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/' }*/),
    page.click('[data-testid="login-submit-btn"]')
  ]);
  //await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page).toHaveTitle('Нетология — обучение современным профессиям онлайн');
  await page.screenshot({ path: "./Screenshots/SuccessAuthorization.png", fullPage: true })

})
