import { test, expect } from '@playwright/test';



test('Verify add employee with mandatory details', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);

  await page.keyboard.press("Enter")

  // await page.keyboard.press(Control+Alt+keyA)

  //await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).pressSequentially("Raju", {delay: 2000});
  await page.getByRole('textbox', { name: 'Last Name' }).type("G")

  await page.locator('//div[@class="oxd-switch-wrapper"]').click()

  //await page.locator('//div[@class="oxd-switch-wrapper"]').dispatchEvent('click');
    


})