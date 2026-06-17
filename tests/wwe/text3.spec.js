const { test, expect } = require('@playwright/test');

test.describe('Text2 Suite', () => {
    test('sample test', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

       // const usernamepara = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

        const usernamepara = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').innerText()
        console.log(usernamepara)

        const username = usernamepara.split(" ") //["Username", ":", "Admin"]

       // const passwordpara = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

        const passwordpara = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').innerText()
        console.log(passwordpara)

        const password = passwordpara.split(" ")

       await page.locator('//input[@placeholder="Username"]').fill(username[2])

        await page.locator("//input[@type='password']").fill(password[2])



    })

    test("get all texts", async ({page}) =>{

        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

        //const allproductNames = await page.locator('//h4[@class="product-name"]').allTextContents()

        const allproductNames = await page.locator('//h4[@class="product-name"]').allInnerTexts()

        console.log(allproductNames)

        // for(let vegitable of allproductNames ){

        //     console.log(vegitable)
        // }

        
    })

})