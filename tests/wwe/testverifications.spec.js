
const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //complete text
    await expect(page.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"]').first()).toHaveText("OrangeHRM OS 5.7")

    
    //Partial value 
    await expect(page.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"]').first()).toContainText("OrangeHRM")

    const versionnumber = await page.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"]').first().textContent()

    console.log(versionnumber)

    await expect(versionnumber).toBe('OrangeHRM OS 5.7')

    
    const version = await page.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"]').first().innerText()

    console.log(version)

    
})


test("Working with text - All ", async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    // const allProductnames = await page.locator('//h4[@class="product-name"]').allTextContents()

    // console.log(allProductnames)

     const allProductnames = await page.locator('//h4[@class="product-name"]').allInnerTexts()

    console.log(allProductnames)
})

