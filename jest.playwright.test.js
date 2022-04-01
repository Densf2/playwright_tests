const { chromium } = require('playwright');
const expect = require('expect');
const { JobsPage } = require('./test_helpers/pages/jobs_page');

beforeAll(async () => {
    browser = await chromium.launch();
})
afterAll(async () => {
    await browser.close();
})
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://dou.ua/');
})
afterEach(async () => {
    await page.close();
})

describe('Tests', () => {
    test('Open main page', async () => {
        expect(await page.title()).toBe('Спільнота програмістів | DOU');
    })
    test('Click on salary link', async () => {
        await page.click('text=Зарплати');
        let tileOfSalaryPage = 'Cтатистика зарплат програмістів, тестувальників і PM в Україні | DOU';
        expect(await page.title()).toBe(tileOfSalaryPage);
    })

    test('Check page Jobs', async () => {
        const jobspage = new JobsPage(page);
        await page.click('text=Робота');
        expect(await page.title()).toBe('Вакансії | DOU');
        await jobspage.searchInput.isVisible()
    })
})