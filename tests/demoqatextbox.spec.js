import { test, expect } from '@playwright/test';
import testData from '../testdata/demoqatextbox.json';


//for (let i = 0; i < 3; i++) {

  test(`Verify filling text `, async ({ page }) => {

    test.slow()
    const { textBoxData, expectedResults } = testData;

    await page.goto('https://demoqa.com/text-box');
    await page.getByRole('textbox', { name: 'Full Namefhbehbf' }).fill(textBoxData.fullName);
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(textBoxData.email);
    await page.getByRole('textbox', { name: 'Current Address' }).fill(textBoxData.currentAddress);
    await page.locator('#permanentAddress').fill(textBoxData.permanentAddress);
    await page.getByRole('button', { name: 'Submit' }).click();
    
    await expect(page.getByText(expectedResults.name)).toBeVisible();
    await expect(page.getByText(expectedResults.email)).toBeVisible();
    await expect(page.getByText(expectedResults.currentAddress)).toBeVisible();
    await expect(page.getByText(expectedResults.permanentAddress)).toBeVisible();
  });


//}


