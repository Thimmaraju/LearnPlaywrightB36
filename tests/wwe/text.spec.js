const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

//     await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span/span')).toHaveText("Mobiles")

//    const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').textContent()

//    console.log(textvalue)

   const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()

   console.log(values)
   
   //values = ["Kilos", "Mobiles", ""]

    for(let i of values){
        console.log(i)
    }

    // const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').innerText()

    // console.log(textvalue)

    // const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()

    // for (let i of values) {
    //     console.log(i)
    // }
})


test("Working with text2 ", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //const textvalue = await page.locator('.example>h3').textContent()

    const textvalue = await page.locator('.example>h3').innerText()

   console.log(textvalue)

})


test("Working with text - Orange HRM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const username = await page.locator('p[class="oxd-text oxd-text--p"]').first().textContent()

    console.log(username) // Username : Admin

    const usernamevalue  = username.split(" ") //["Username", ":", "Admin"]

    await page.locator('input[name="username"]').fill(usernamevalue[2])
    //or 

    //await page.fill('input[name="username"]', usernamevalue[2])

})