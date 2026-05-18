import { test, expect } from '@playwright/test';

test('Verify Login with Valid credentials', async ({ page }) => {

  //Launch url 
  await page.goto('/web/index.php/auth/login');


  //enter the username 
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);

  //enter password 
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);


  // click on login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify time at work is visible 
  await expect(page.getByText('Time at Work')).toBeVisible({timeout: 60000});
});


test("Verify login with valid username and invalid password ", async ({page}) =>{

  //lauch url 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.getByRole('textbox', { name: 'Username' }).fill("Admin")

  await page.getByRole('textbox', { name: 'Password' }).fill("hewufbew")

  await page.getByRole('button', { name: 'Login' }).click()

  //assertion

  await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


})


test("Verify login with invalid username and valid password ", async ({page}) =>{

  //lauch url 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.getByRole('textbox', { name: 'Username' }).fill("Adghbhjigmin")

  await page.getByRole('textbox', { name: 'Password' }).fill("admin123")

  await page.getByRole('button', { name: 'Login' }).click()

  //assertion

  await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


})



test("Verify login with invalid username and invalid password ", async ({page}) =>{

  //lauch url 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.getByRole('textbox', { name: 'Username' }).fill("Adghbhjigmin")

  await page.getByRole('textbox', { name: 'Password' }).fill("fjghhgfyu")

  await page.getByRole('button', { name: 'Login' }).click()

  //assertion

  await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


})