/*
// Код, который разбирали в видеолекции
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300,
        defaultViewReport: null,
        args: ['--start-maximized '],
        devtools: true
    });
    const page = await browser.newPage();
    await page.goto('https://rbc.ru',{ timeout: 20000 });

    const notificationClose = "body > div.push-allow.js-push-allow > div.push-allow__block.js-push-allow-block.js-push-allow-block-subscribe.active > div.push-allow__controls > div:nth-child(2) > a"
    await page.waitForSelector(notificationClose);
    await page.click(notificationClose);
    const lenta = "#maincontent > div > section.main.js-main-reload > div.main__menu.g-tablet-visible.g-mobile-visible > div > div > div > div:nth-child(2) > div > a"

    await page.waitForSelector(lenta);
    await page.click(lenta);

   await page.screenshot({path: 'example.png'}); // сделать скриншот
   const textField = '.input[type="email"]'; // поле для заполнения
   await page.type(textField, 'Text', { delay: 100 }); // ввести в поле для заполнение слово "Text", после каждого символа делать задержку 100 мс.

    //await page.waitForTimeout(50000);
    await page.waitForSelector(".main__feed__title");
    const news = await page.evaluate(() => {
        const newsElems = document.querySelectorAll("span.main__feed__title");
        // полный код элемента 
        //#maincontent > div > section.main.js-main-reload > div.main__list.js-main-news-list > div > div:nth-child(1) > a > span > span.main__feed__title

        const result = [];
        for (i = 0; i < newsElems.lenght; i++){
            result.push(newsElems[i].innerText);
        }
        return result;
    })
    console.log(news); // в консоль возвращается "[]", почему - не могу разобраться
    await browser.close(); // Закрыть браузер, инче тест зависнет - надо будет руками закрыть браузер\остановаить тест
    card-mini__title
})();
*/
// Код по мотивам лекции (другой сайт, принцип тот же)
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300,
        defaultViewReport: null,
        args: ['--start-maximized '],
        devtools: true
    });
    const page = await browser.newPage();
    await page.goto('https://lenta.ru/',{ timeout: 20000 });


    const news = await page.evaluate(() => {
        const newsElems = document.querySelectorAll("#body > div.layout.js-layout > div.layout__container > main > div.main-page > section:nth-child(1) > div.main-container > div.topnews > div:nth-child(2) > a:nth-child(2) > div > h3");
        // полный код элемента 
       // #body > div.layout.js-layout > div.layout__container > main > div.main-page > section:nth-child(1) > div.main-container > div.topnews > div:nth-child(2) > a:nth-child(1) > div > h3
      //  #body > div.layout.js-layout > div.layout__container > main > div.main-page > section:nth-child(1) > div.main-container > div.topnews > div:nth-child(2) > a:nth-child(1) > div
      //  #body > div.layout.js-layout > div.layout__container > main > div.main-page > section:nth-child(1) > div.main-container > div.topnews > div:nth-child(2) > a:nth-child(2) > div > h3
        const result = [];
        for (i = 0; i < newsElems.lenght; i++){
            result.push(newsElems[i].innerText);
        }
        return result;
    })
    console.log(news); // в консоль возвращается "[]", почему - не могу разобраться
 //   await browser.close(); // Закрыть браузер, инче тест зависнет - надо будет руками закрыть браузер\остановаить тест
})();