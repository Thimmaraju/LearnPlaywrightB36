import { test, expect } from '@playwright/test';



test('Handling Drop downs ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    //  text  - 
    //await page.locator('select[name^="DOB_Month"]').selectOption("OCT")
    //Value - 
    //await page.locator('select[name^="DOB_Month"]').selectOption("08")
    //Index - 
    await page.locator('select[name^="DOB_Month"]').selectOption({index : 4})
  

})