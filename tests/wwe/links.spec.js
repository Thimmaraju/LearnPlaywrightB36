

const { browser, test, expect } = require('@playwright/test');

test.describe('Automation - Working With Links', () => {

  test('Playwright Test Case - Link', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    await page.getByText('Forgot your password?').click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')

    await expect(page.getByText('Reset Password').first()).toBeVisible()

    //or 
    await expect(page.locator("//button[text()=' Reset Password ']")).toBeVisible()

  })

  test("Trello link ", async ( {page}) =>{

    await page.goto('https://trello.com/')
    await page.click("(//a[text()='Log in'])[1]")
    await page.fill('#username-uid1', "rajutester2673@gmail.com")
  })
})

// nth(0)
// .first()
// lstat()

//await page.locator('//a[@class="oxd-main-menu-item"]').fisrt().click()

//await page.locator('//a[@class="oxd-main-menu-item"]').last().click()

//await page.locator('//a[@class="oxd-main-menu-item"]').nth(2).click()

//strict mode voilation  