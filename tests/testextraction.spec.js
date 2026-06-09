
import { test, expect } from '@playwright/test';

test('Verify Login with Valid credentials', async ({ page }) => {
    console.log('Step 1: Launch URL');
    await page.goto('/web/index.php/auth/login');

    console.log('Step 2: Extract username text');
    const usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()  // "Username : Admin"
    console.log('Username text:', usernametext);

    const usernamearr = usernametext.split(" ") //["Username", ":", "Admin"]
    console.log('Parsed username array:', usernamearr);

    console.log('Step 3: Extract password text');
    const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()
    console.log('Password text:', passwordtext);

    const passwordarr = passwordtext.split(" ") //["Password", ":", "admin123"]
    console.log('Parsed password array:', passwordarr);

    console.log('Step 4: Enter the username');
    await page.getByRole('textbox', { name: 'Username' }).fill(usernamearr[2]);

    console.log('Step 5: Enter the password');
    await page.getByRole('textbox', { name: 'Password' }).fill(passwordarr[2]);

    console.log('Step 6: Wait for 15 seconds');
    await page.waitForTimeout(15000)

    console.log('Step 7: Click on login button');
    await page.getByRole('button', { name: 'Login' }).click();

    console.log('Step 8: Verify Time at Work is visible');
    await expect(page.getByText('Time at Work')).toBeVisible({ timeout: 60000 });

    console.log('Step 9: Extract menu items');
    const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()
    console.log('Menu items:', menuitems);

    console.log('Step 10: Verify PIM menu item exists');
    await expect(menuitems.includes("PIM")).toBe(true)
});
