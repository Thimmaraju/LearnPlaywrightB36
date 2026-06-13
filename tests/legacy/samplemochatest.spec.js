// const assert = require('assert');
// import { describe } from 'mocha';

// describe('Sample Mocha Test', function() {

//   it('Verify Login with Valid credentials', async ({ page }) => {

//   let username = "Admin"
//   let password = "admin123"
//   //Launch url 
//  await page.goto('/web/index.php/auth/login')


//   //enter the username 
//   await page.getByRole('textbox', { name: 'Username' }).fill(username);

//   //enter password 
//   await page.getByRole('textbox', { name: 'Password' }).fill(password);

//   await page.waitForTimeout(15000)


//   //username = "Raju"

//   // click on login button
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Verify time at work is visible 
//   await expect(page.getByText('Time at Work')).toBeVisible({timeout: 60000});
// });


// });



