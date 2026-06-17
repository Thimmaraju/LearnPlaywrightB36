const {  test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test("browse context test", async ({browser}) => {

    
    const context1 = await browser.newContext();

    const page1 = await context1.newPage();


    const context2 = await browser.newContext();
 
    const page2 = await context2.newPage();


    await page1.goto('https://opensource-demo.orangehrmlive.com/');
    await page1.locator('input[name="username"]').fill("Admin")
    await page1.locator("input[type='password']").fill("admin123")
    await page1.locator("input[type='password']").press("Enter")

    await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page1.locator('span').filter({ hasText: 'PIM' }).click();
    await page1.locator("//a[text()='Add Employee']").click()
    await page1.getByPlaceholder('First Name').fill(`netra`);
    await page1.getByPlaceholder('Last Name').fill(`l`);
      await page1.locator('//input[@class="oxd-input oxd-input--active"]').last().fill(`9fdfe`);
    await page1.locator('//input[@type="checkbox"]').dispatchEvent('click');
    await page1.locator("//label[text()='Username']/../following-sibling::div/input").fill("netral")
    await page1.locator("//label[text()='Password']/../following-sibling::div/input").fill("Pass@1234")
    await page1.locator("//label[text()='Confirm Password']/../following-sibling::div/input").fill("Pass@1234")

    await page1.locator('button[type="submit"]').click();


    await page2.goto('https://opensource-demo.orangehrmlive.com/');
    await page2.locator('input[name="username"]').fill("netral")
    await page2.locator("input[type='password']").fill("Pass@1234")
    await page2.locator("input[type='password']").press("Enter")

    await expect(page2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


    await page1.locator('//input[@name="middleName"]').fill("xyz")
    await page1.locator('//button[@type="submit"]').click()

    await page2.locator("//span[text()='My Info']").click()

    await expect(page2.locator('//input[@name="middleName"]')).toHaveText("xyz")

   
   

    //  await page1.waitForTimeout(10000)
     
    // // //await browser.close();
  });

})