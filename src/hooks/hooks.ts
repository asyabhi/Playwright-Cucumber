import { After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  // @ts-ignore
  pageFixture.page = page;
});

After(async function () {
  await page.close();
  await browser.close();
});
