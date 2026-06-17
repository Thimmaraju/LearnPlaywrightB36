import { test, expect } from '@playwright/test';


test(`Verify user can Add Employee`, async ({page}) => {


     await page.goto('https://www.cypress.io/')

     await page.waitForTimeout(2000)
     await page.locator('(//a[@href="https://on.cypress.io/installing-cypress"])[1]').click({ force: true })

})



test(`Drop down value Select `, async ({page}) => {


     await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

     await page.waitForTimeout(2000)

     // Text
     //await page.locator('select[name^="DOB_Month"]').selectOption("AUG")

     // Value 
     //await page.locator('select[name^="DOB_Month"]').selectOption("03")

     // Index 

     await page.locator('select[name^="DOB_Month"]').selectOption({index: 5})

})
