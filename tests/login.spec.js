import { test, expect } from '@playwright/test';

let username = "Admin"

test.describe("verify login functionality ", () => {

  test.only('Verify Login with Valid credentials', async ({ page }) => {

    let username = "Admin"
    let password = "admin123"
    //Launch url 
    await page.goto('/web/index.php/auth/login')


    //enter the username 
    await page.getByRole('textbox', { name: 'Username' }).fill(username);

    //enter password 
    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    await page.waitForTimeout(15000)


    //username = "Raju"

    // click on login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify time at work is visible 
    await expect(page.getByText('Time at Work')).toBeVisible({ timeout: 60000 });
  });


  test("Verify login with valid username and invalid password ", async ({ page }) => {

    //lauch url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill(username)

    await page.getByRole('textbox', { name: 'Password' }).fill("hewufbew")

    await page.getByRole('button', { name: 'Login' }).click()

    //assertion

    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


  })


  test("Verify login with invalid username and valid password ", async ({ page }) => {

    //lauch url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill("Adghbhjigmin")

    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")

    await page.getByRole('button', { name: 'Login' }).click()

    //assertion

    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


  })



  test("Verify login with invalid username and invalid password ", async ({ page }) => {

    //lauch url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill("Adghbhjigmin")

    await page.getByRole('textbox', { name: 'Password' }).fill("fjghhgfyu")

    await page.getByRole('button', { name: 'Login' }).click()

    //assertion

    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


  })


  const stu1 = "Vittal"

  test(`Verify login with invalid username - ${stu1} and invalid password `, async ({ page }) => {

    //lauch url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill("Adghbhjigmin")

    await page.getByRole('textbox', { name: 'Password' }).fill("fjghhgfyu")

    await page.getByRole('button', { name: 'Login' }).click()

    //assertion

    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()


  })

})

