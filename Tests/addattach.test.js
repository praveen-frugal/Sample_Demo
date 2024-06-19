const { addAttach } = require("jest-html-reporters/helper");
const puppeteer = require("puppeteer");
const fs = require("fs");

describe("just examples", () => {
    
  it("test buffer", async () => {
    // Launch puppeteer and take a screenshot
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    const data = await page.screenshot();
    await browser.close();

    // Add the screenshot as an attachment
    await addAttach({
      attach: data,
      description: 'Screenshot of Google homepage',
    });

    

    // Simple assertion
    expect(1).toBe(1);
  });
});
