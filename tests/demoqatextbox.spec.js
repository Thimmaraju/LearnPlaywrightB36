import { test, expect } from '@playwright/test';

test('Verify filling text', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Anusha');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abcd@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('chennai');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:RAju')).toBeVisible();
  await expect(page.getByText('Email:abcd@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :chennai')).toBeVisible();
  await expect(page.getByText('Permananet Address :Bangalore')).toBeVisible();
});


// test('Verify filling text', async ({ page }) => {

// })