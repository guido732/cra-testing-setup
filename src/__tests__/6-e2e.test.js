/**
 * E2E - Google search. Headless vs headed browser
 *
 * @group demo6
 * @group demo
 */

const puppeteer = require("puppeteer");

describe("login", () => {
	it("should redirect to homepage after login", async () => {
		const browser = await puppeteer.launch({
			headless: true,
		});
		const page = await browser.newPage();
		await page.goto("https://www.google.com/");
		await expect(page.title()).resolves.toMatch(/google/i);
		const inputSearch = "input[type='text']";
		await page.click(inputSearch);
		await page.type(inputSearch, "Ésto es un test automatizado");
		await page.keyboard.press("Enter");
		await page.waitForNavigation({ waitUntil: "load" });
		const finalUrl = await page.title();
		expect(finalUrl).toContain("Ésto es un test automatizado - Buscar con Google");
	}, 20000);

	it("should redirect to homepage after login", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 20,
			args: ["--window-size=1000,600"],
		});
		const page = await browser.newPage();
		await page.goto("https://www.google.com/");
		await expect(page.title()).resolves.toMatch(/google/i);
		const inputSearch = "input[type='text']";
		await page.click(inputSearch);
		await page.type(inputSearch, "Ésto es un test automatizado");
		await page.keyboard.press("Enter");
		await page.waitForNavigation({ waitUntil: "load" });
		const finalUrl = await page.title();
		expect(finalUrl).toContain("Ésto es un test automatizado - Buscar con Google");
	}, 20000);
});
