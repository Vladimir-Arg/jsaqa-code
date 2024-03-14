let page;

beforeEach(async () => {
  page = await browser.newPage();
  // await page.goto("https://github.com/team"); // не подходит для собственных тестов, убираем из этого блока
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team"); // переносим открытие страницы из примера в этот блок
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  });
})

describe("My github page tests",() => {
  beforeEach(async () => {
    // page = await browser.newPage(); // Открытие новой страницы есть в глобальном хуке
    await page.goto("https://github.com/"); // 
  });
  test("First", async () => {
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  });
  test("Second", async () => {
    const btnSelector = ".btn-signup-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Sign up for GitHub")
  });
});
