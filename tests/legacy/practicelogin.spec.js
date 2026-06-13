const { test, expect } = require('@playwright/test');

test.describe('Practice Test Login - Valid Credentials', () => {
  test('should successfully login with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'networkidle' });
    
    // Verify the login page is loaded
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    
    // Fill in the username
    await page.fill('input[name="username"]', 'student');
    
    // Fill in the password
    await page.fill('input[name="password"]', 'Password123');
    
    // Click the Submit button
    await page.click('button#submit');
    
    // Wait for navigation to complete
    await page.waitForURL('**/logged-in-successfully/');
    
    // Verify successful login
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await expect(page).toHaveURL(/logged-in-successfully/);
    
    // Verify success message
    const successMessage = page.locator('h1');
    await expect(successMessage).toContainText('Logged In Successfully');
    
    // Verify congratulations message
    const congratsMessage = page.locator('p strong');
    await expect(congratsMessage).toContainText('Congratulations student');
    
    // Verify Log out button is present
    const logoutButton = page.locator('button:has-text("Log out")');
    await expect(logoutButton).toBeVisible();
  });
});

test.describe('Practice Test Login - Negative Tests', () => {
  test('should show error with invalid username', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    // Fill in invalid username
    await page.fill('input[name="username"]', 'invalidUser');
    
    // Fill in the correct password
    await page.fill('input[name="password"]', 'Password123');
    
    // Click the Submit button
    await page.click('button#submit');
    
    // Verify error message for invalid username
    const errorMessage = page.locator('[role="alert"], .error, [class*="error"]');
    await expect(errorMessage).toContainText('Your username is invalid!');
  });

  test('should show error with invalid password', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    // Fill in the correct username
    await page.fill('input[name="username"]', 'student');
    
    // Fill in invalid password
    await page.fill('input[name="password"]', 'invalidPassword');
    
    // Click the Submit button
    await page.click('button#submit');
    
    // Verify error message for invalid password
    const errorMessage = page.locator('[role="alert"], .error, [class*="error"]');
    await expect(errorMessage).toContainText('Your password is invalid!');
  });
});
