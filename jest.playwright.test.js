const {chromium} = require('playwright');
const expect = require('expect');
const {JobsPage} = require('./test_helpers/pages/jobs_page');
const Data = require('./test_helpers/test_data/text');

beforeAll(async () => {
	browser = await chromium.launch();
});
afterAll(async () => {
	await browser.close();
});
beforeEach(async () => {
	page = await browser.newPage();
	await page.goto('https://dou.ua/');
});
afterEach(async () => {
	await page.close();
});

describe('Tests', () => {
	test('Open main page', async () => {
		expect(await page.title()).toBe(Data.title_of_main_page);
	});

	test('Click on salary link', async () => {
		await page.click('text=Зарплати');
		expect(await page.title()).toBe(Data.tile_of_salary_page);
	});

	test('Check page Jobs', async () => {
		const jobspage = new JobsPage(page);
		await page.click('text=Робота');
		expect(await page.title()).toBe(Data.title_of_vacancies_page);
		await jobspage.searchInput.isVisible();
	});

	test('Check calendar page search', async () => {
		await page.click('text=Календар');
		expect(await page.title()).toBe(Data.title_if_calendar_page);
		await page.locator('select[name="city"]').selectOption('https://dou.ua/calendar/city/online/');
		expect(await page.url()).toBe('https://dou.ua/calendar/city/online/');
		await page.locator('select[name="tag"]').selectOption('https://dou.ua/calendar/tags/QA/online/');
		expect(await page.url()).toBe('https://dou.ua/calendar/tags/QA/online/');
	});
});
