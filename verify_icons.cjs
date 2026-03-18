const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4173/');

  console.log("Waiting for boot sequence to finish...");
  await page.waitForTimeout(6000); // Wait for the boot sequence (approx 4.5s)

  console.log("Taking screenshot with SF Symbols (default)");
  await page.screenshot({ path: 'sf_symbols.png', fullPage: true });

  console.log("Clicking the toggle button");
  // The toggle button has the text "Switch to Lucide Icons"
  await page.getByText('Switch to Lucide Icons').click();
  await page.waitForTimeout(1000); // wait for re-render

  console.log("Taking screenshot with Lucide Icons");
  await page.screenshot({ path: 'lucide_icons.png', fullPage: true });

  await browser.close();
  console.log("Done!");
})();
