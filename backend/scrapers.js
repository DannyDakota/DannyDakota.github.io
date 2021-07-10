const puppeteer = require('puppeteer');


async function scrapeProducts(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
}


export default scrapeProducts;


