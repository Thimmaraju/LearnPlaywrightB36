const { test, expect } = require('@playwright/test');
test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes', { tag: ["@smoke", "@raju"] }, async ({ page }) => {
        await page.goto('https://jqueryui.com/checkboxradio/')

       await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-1"]').click()

    })


    test('Working with Iframes nested ', { tag: ["@smoke", "@raju"] }, async ({ page }) => {

        await page.goto('https://www.dezlearn.com/nested-iframes-example/')
        await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('//button[@type="button"]').click()

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })

})