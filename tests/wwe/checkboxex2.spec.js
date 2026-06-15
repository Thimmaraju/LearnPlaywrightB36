import { test, expect } from '@playwright/test';



test('Verify checkbox 2 ', async ({ page }) => {


      await page.goto('https://rahulshettyacademy.com/AutomationPractice/')


      const checkboxes = ['#checkBoxOption1', '#checkBoxOption2', '#checkBoxOption3']


      for (let item of checkboxes){

        await page.locator(item).check()
      }
})


test('Verify checkbox 3', async ({ page }) => {


   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')


    const  checkboxes = await page.$$('input[type="checkbox"]') // array of elements 

      for (let item of checkboxes){

        await item.check()
      }

    //await page.locator(checkbox).check({mutiple :true})

})



test('Verify checkbox 4', async ({ page }) => {


   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')


     for(let i=0 ; i<4; i++){

    
        await page.locator('input[type="checkbox"]').nth(i).check()
     }
})



test('Verify Radio button', async ({ page }) => {


      await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

      await page.locator('input[value="radio1"]').check()

      
      await page.locator('input[value="radio1"]').uncheck()


})