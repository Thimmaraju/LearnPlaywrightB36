const { test, expect } = require('@playwright/test');

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')

    await page.waitForTimeout(3000)
    //await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png', fullPage: true})
});

test('page element screenshot 2 ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    await page.waitForTimeout(3000)

    //await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    await page.locator('//img[@src="./images/broccoli.jpg"]').screenshot({ path:'tests/screenshots/'+Date.now()+'Brokoli.jpg'})
});



test('Element screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.locator('div[class="_3bzdSa"]').screenshot({ path: 'tests/screenshots/' + Date.now() + '.png' })
});


test('Element screenshot Example 2 ', async ({ page }) => {

    console.log("Im taking screenshot")
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(3000)
    await page.locator('//input[@name="username"]/..').screenshot({ path: 'tests/screenshots/' + Date.now() + 'username.png' })

    await page.locator('//input[@name="password"]/..').screenshot({ path: 'tests/screenshots/' + Date.now() + 'username.png' })
});