import { test, expect } from '@playwright/test';


test('Verify total price is correct ',{tag: ["@smoke", "@payment"]}, async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    let veg1= "Mushroom - 1 Kg"
    let veg2 = "Musk Melon - 1 Kg"

    await page.locator(`//h4[text()='${veg1}']/../div[3]/button`).click()

    await page.locator(`//h4[text()='${veg2}']/../div[3]/button`).click()


    const firstvegprice = await page.locator(`//h4[text()='${veg1}']/../p`).textContent()

    const secondvegprice = await page.locator(`//h4[text()='${veg2}']/../p`).textContent()

    const totalvalue = await page.locator('//table/tbody/tr[2]/td[3]/strong').textContent()

    await expect(Number(firstvegprice)+Number(secondvegprice)).toBe(Number(totalvalue))

})