import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
    let r = (Math.random() + 1).toString(36).substring(7);
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(r)
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
})

test.beforeEach(async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Time at Work')).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill("Raju");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("G");
})

test('Verify add employee with mandatory details - JPG file ', async ({ page }) => {
    await page.locator('//input[@type="file"]').setInputFiles(['testdata/uploadfiles/samplejpg.jpg'])
});

test('Verify add employee with mandatory details - PNG file ', async ({ page }) => {
    await page.locator('//input[@type="file"]').setInputFiles('testdata/uploadfiles/images.png')
});


test('Verify add employee with mandatory details - GIF file ', async ({ page }) => {
    await page.locator('//input[@type="file"]').setInputFiles('testdata/uploadfiles/download.gif')
});