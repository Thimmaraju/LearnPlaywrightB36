import {expect, test} from "@playwright/test";
import data from "../../testdata/buzzpost.json"

test("postmessage", async ({page}) => {

    await page.goto("/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.locator('(//a[@class="oxd-main-menu-item"])[last()]').click()
    await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill(data.text)
    await page.locator('//button[@type="submit"]').click()
})

//cypress supports only CSS 