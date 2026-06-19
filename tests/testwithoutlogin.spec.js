import { test, expect } from "@playwright/test"


test("Verify Add Employee ", async ({ page }) => {

    await page.goto('/web/index.php/pim/addEmployee')

    await page.getByRole('textbox', { name: 'First Name' }).fill("Guru");

    await page.getByRole('textbox', { name: 'Last Name' }).fill("Rao");

    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

})


test('Add job title', async ({page}) =>{

   await page.goto('/web/index.php/admin/saveJobTitle')

   let r = (Math.random() + 1).toString(36).substring(7);
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill("testJobtitle"+r)

  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation testing')

  await page.getByRole('button', { name: 'Save' }).click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

  
})



test('Add Buzz Post ', async ({page}) =>{

   await page.goto('/web/index.php/buzz/viewBuzz')

   await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill("Hi Everyone")

   await page.locator('button[type="submit"]').click()
  
})

