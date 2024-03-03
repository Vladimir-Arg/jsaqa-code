const { test, expect } = require("@playwright/test");
const randomUser = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};
const randomUserName = randomUser() + "@examle.com";
const randomPass = Math.random().toString(36).slice(-8);

test("test  unsuccess authorization", async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto("https://netology.ru/?modal=sign_in");

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', randomUserName);

  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');

  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', randomPass);

  // Click [data-testid="login-submit-btn"]
  await Promise.all([page.click('[data-testid="login-submit-btn"]')]);

  // Click [data-testid="login-error-hint"]
  await page.click('[data-testid="login-error-hint"]');
  await page.locator("data-testid=login-error-hint").isVisible;
  await expect(page.locator("[data-testid=login-error-hint]")).toContainText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "./Screenshots/unSuccessAuthorization.png", fullPage: true })
});
