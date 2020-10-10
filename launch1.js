const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();