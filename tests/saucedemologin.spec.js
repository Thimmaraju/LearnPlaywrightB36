import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage';
import testData from '../testdata/saucedemologin.json';

test('Verify login as standard user', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  const credentials = testData.standardUser;

  await loginPage.navigateTo();
  await loginPage.login(credentials.username, credentials.password);
  const isVisible = await loginPage.verifyProductsPageVisible();
  expect(isVisible).toBeTruthy();
});

test('Verify filling text', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  await loginPage.navigateTo();
  await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
  const isErrorVisible = await loginPage.verifyErrorMessageVisible();
  expect(isErrorVisible).toBeTruthy();
  const errorMessageText = await loginPage.getErrorMessageText();
  expect(errorMessageText).toContain('Epic sadface: Username and password do not match any user in this service');

});

test('Verify login error with invalid credentials', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  await loginPage.navigateTo();
});