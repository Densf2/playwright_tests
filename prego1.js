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

  // Click text="сумки"
  await page.click('text="сумки"');

  // Click text="ціна 2659 грн"
  await page.click('text="ціна 2659 грн"');

  // Click text="022385, колір чорний"
  await page.click('text="022385, колір чорний"');

  // Click text="022385, колір чорний"
  await page.click('text="022385, колір чорний"');

  // Click text="#022385"
  await page.click('text="#022385"');

  // Click img[alt="Сумка з натуральної шкіри - Фото №5"]
  await page.click('img[alt="Сумка з натуральної шкіри - Фото №5"]');
  // assert.equal(page.url(), 'https://prego.ua/uk/sumki/sumki-iz-natyralnoy-koji/po_szhk_20_po_9_y9280_01');

  // Click text="Інтернет магазин взуття Prego"
  await page.click('text="Інтернет магазин взуття Prego"');
  // assert.equal(page.url(), 'https://prego.ua/');

  // Close page
  await page.close();

  await browser.close();
})();