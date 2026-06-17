const { test, expect } = require('@playwright/test');


test.describe('Calendar Feature', () => {

    test('should display the calendar', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await page.getByRole('textbox', { name: 'Username' }).fill("Admin");

        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await page.getByRole('textbox', { name: 'Password' }).press('Enter')

        await page.locator('//a[@href="/web/index.php/leave/viewLeaveModule"]').click()

        //await page.locator('(//div[@class="oxd-date-input"]/input)[1]').fill('2023-10-12')

        // const date = moment().format('YYYY-DD-MM') 

        // console.log(date)

        await page.locator('(//div[@class="oxd-date-input"]/input)[1]').fill('01-01-2025');

        await page.locator('(//div[@class="oxd-date-input"]/input)[2]').fill('01-08-2026')
    });


    test("Nested Iframes ", async ({page}) =>{

        await page.goto('https://www.dezlearn.com/nested-iframes-example/')

        await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('#u_5_6').click()
    })

    test("Input calendar", async ({page}) =>{


        await page.goto('https://www.globalsqa.com/demo-site/datepicker/')

        await page.frameLocator('(//iframe[@class="demo-frame"])[1]').locator('#datepicker').first().fill('12/12/2024')
    })
});