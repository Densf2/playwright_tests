const playwright = require("playwright");

(async () => {
  for (const browserType of ['chromium', 'webkit', 'firefox']) {
    const browser = await playwright[browserType].launch();
    const page = await browser.newPage();
    page.route('**/cars?**', async route => {
      route.fulfill({
        contentType: 'application/json',
        headers: { 'access-control-allow-origin': '*' },
        status: 200,
        body: JSON.stringify(["BMW", "Tesla"]),
      })
    })
    const resp = await page.evaluate(async () => await (await fetch("https://10.10.10.1.com/cars?type=foobar")).json())
    console.log(resp)
    await browser.close();
  }
})();