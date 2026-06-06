
import { test, expect } from '@playwright/test';


test('Verify Login with Valid credentials', async ({ page }) => {
    //Launch url 
    await page.goto('/web/index.php/auth/login');

    const usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()  // "Username : Admin"

    const usernamearr = usernametext.split(" ") //["Username", ":", "Admin"]

    const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

    const passwordarr = passwordtext.split(" ") //["Password", ":", "admin123"]
    //enter the username 
    await page.getByRole('textbox', { name: 'Username' }).fill(usernamearr[2]);

    //enter password 
    await page.getByRole('textbox', { name: 'Password' }).fill(passwordarr[2]);

    await page.waitForTimeout(15000)

    // click on login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify time at work is visible 
    await expect(page.getByText('Time at Work')).toBeVisible({ timeout: 60000 });


    const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()

    console.log(menuitems)

    await expect(menuitems.includes("PIM")).toBe(true)
});
