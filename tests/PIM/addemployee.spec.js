import { test, expect } from '@playwright/test';
//import addempdata from "../../testdata/addemployee.json"
import data from "../../testdata/login.json"

import { faker } from '@faker-js/faker';

import ExcelJS from 'exceljs';

test('Verify add employee with mandatory details', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  // await page.getByRole('textbox', { name: 'First Name' }).click();
  // await page.getByRole('textbox', { name: 'First Name' }).fill(addempdata.firstname);
  // await page.getByRole('textbox', { name: 'Last Name' }).click();
  // await page.getByRole('textbox', { name: 'Last Name' }).fill(addempdata.lastname);

  // await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());

  // await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());

  //let randomtext = (Math.random() + 1).toString(36).substring(7);
  // await page.getByRole('textbox', { name: 'First Name' }).fill("testfirstname"+randomtext);

  // await page.getByRole('textbox', { name: 'Last Name' }).fill("testlastname"+randomtext);

  //exceldata 

  // Create workbook
    const workbook = new ExcelJS.Workbook();
  
    // Read excel file
    await workbook.xlsx.readFile('testdata/Employeedata.xlsx');

    // Get sheet
    const worksheet = workbook.getWorksheet('Sheet1');

      if (!worksheet) {
        console.log('Sheet not found');
      }

     
    const row = worksheet.getRow(2);

    // Read cells directly
    const firstname = row.getCell(1).value;
    const lastname = row.getCell(2).value;


    await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);

  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);



  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Vittal P' })).toBeVisible();
});


test("Verify Validation Message for firstname's and lastname's fields", async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('etkjgerovberkljmgnjernjiogberlkkgmnkjreiog4n');
  await expect(page.getByText('Should not exceed 30')).toBeVisible();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kuhioerwjnhwfhiuerwgf9ewhfyuwhejkfwejhbf');
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
});


test("launch flipkart", async ({page}) =>{

  await page.goto('/')

})