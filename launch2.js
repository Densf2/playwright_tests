const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://prego.ua/
  await page.goto('https://prego.ua/');

  // Click text="ЧОЛОВІЧЕ ВЗУТТЯ"
  await page.click('text="ЧОЛОВІЧЕ ВЗУТТЯ"');
  // assert.equal(page.url(), 'https://prego.ua/uk/muzhskaya-obuv');

  // Click (//div[starts-with(normalize-space(.), '#022187 NEW Черевики повсякденні зимові 022187, колір чорний 40 41 42 43 44 ціна')])[3]
  await page.click('(//div[starts-with(normalize-space(.), \'#022187 NEW Черевики повсякденні зимові 022187, колір чорний 40 41 42 43 44 ціна\')])[3]');
  // assert.equal(page.url(), 'https://prego.ua/uk/muzhskaya-obuv/myzskie-botinki/botinki-povsednevnie/vs_mbz_20_yj9266_1_01_n');

  // Close page
  await page.close();
  // close the browser
  await browser.close();
})();