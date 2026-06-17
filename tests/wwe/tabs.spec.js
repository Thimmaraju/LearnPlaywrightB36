const { test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test('handle tabs - example 1', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newWindow] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('//a[normalize-space()="Click Here"]')
    ]);

    // console.log(newTab.url());
    // expect(await newTab.title()).toBe('New Window');

    const textvalue = await newWindow.locator('.example>h3').textContent();

    console.log("Text on new page:", textvalue);

    await expect(await newWindow.title()).toBe('New Window');

    await page.waitForTimeout(5000)
  });


  test('handle tabs -example 2***', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    // await page.goBack() // history back page 

    // await page.goForward() // history forward 

    await page.click('//a[normalize-space()="Click Here"]')

    const newPagePromise = page.waitForEvent('popup');
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();

    await expect(newPage.locator('.example>h3')).toHaveText("New Window")

    const textvalue = await newPage.locator('.example>h3').textContent();

    console.log("Text on new page:", textvalue);


    await page.waitForTimeout(5000)
  });


  test("flipkart - verify product display", async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    await page.locator('(//input[@name="q"])[1]').fill("Iphone")

    //await page.locator('input[name="q"]').press('Enter')

    await page.keyboard.press("Enter")


    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator("//div[text()='Apple iPhone 16 (Black, 128 GB)']").click()
     
    ]);

   
    await expect(newTab.locator("//div[text()='Product highlights']")).toBeVisible()

  

  })

    test("Orange HRM  - verify Link display", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const [newTab] = await Promise.all([
       page.waitForEvent('popup'),
       page.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click()
     
    ]);

   
    await expect(newTab).toHaveURL('https://www.linkedin.com/company/orangehrm')
  
    await newTab.locator('//div[@class="sign-in-modal"]').click()

    // await page.close()

 

  })

})