import {expect, test} from "@playwright/test";
import data from "../../../testdata/buzzpost.json"

test("postmessage", async ({page}) => {

    const credentials = ["Admin", "admin123"]
    await page.goto("/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill(credentials[0])
    await page.locator('//input[@name="password"]').fill(credentials[1])
    await page.locator('//button[@type="submit"]').click()
    await page.locator('(//a[@class="oxd-main-menu-item"])[last()]').click()
    await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill(data.text)
    await page.locator('//button[@type="submit"]').click()
})

//cypress supports only CSS 

test("Indexing example", async ({page}) => {

    await page.goto("/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
   // await page.locator('.oxd-main-menu-item').first().click() // it will click on first matching element 

   // await page.locator('.oxd-main-menu-item').last().click() // it will click on last matching element 

    await page.locator('.oxd-main-menu-item').nth(3).click()

    await  expect(page.getByText('Admin')).toBeVisible()

})

test("get by Label example", async ({page}) => {

    
    await page.goto("/web/index.php/auth/login");
     await page.getByLabel('Username').fill("Admin")

})


test("get by Label example - 2 ", async ({page}) => {

    
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
     await page.getByRole("")

})



