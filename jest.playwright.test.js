const { chromium } = require('playwright');
const expect = require('expect');

beforeAll(async () => {
    browser = await chromium.launch();
})
afterAll(async () => {
    await browser.close();
})
beforeEach(async () => {
    page = await browser.newPage();
})
afterEach(async () => {
    await page.close();
})

describe('Tests', () => {
it('Open main page', async () => {
    await page.goto('https://dou.ua/');
    expect(await page.title()).toBe('Спільнота програмістів | DOU')
})
it('Click on salary link', async () => {
    await page.goto('https://dou.ua/');
    await page.click('text=Зарплати');
    let tileOfSalaryPage = 'Cтатистика зарплат програмістів, тестувальників і PM в Україні | DOU';
    expect(await page.title()).toBe(tileOfSalaryPage);
})
})