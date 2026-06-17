const { test, expect } = require('@playwright/test');

test.describe('Text2 Suite', () => {
    test('sample test', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const textvalue1 = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').innerText()

        console.log(textvalue1)

        await expect(textvalue1).toBe('Username : Admin')

        const textvalue2 = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').innerText()

        console.log(textvalue2)

         await expect(textvalue2).toBe('Password : admin123')

         //otherwise

         await expect(page.locator('(//p[@class="oxd-text oxd-text--p"])[1]')).toHaveText('Username : Admin')
        await expect(page.locator('(//p[@class="oxd-text oxd-text--p"])[2]')).toHaveText('Password : admin123')


    });
});

