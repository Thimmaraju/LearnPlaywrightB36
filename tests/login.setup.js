import { test as setup, expect } from "@playwright/test";


setup("authentication", async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill("Admin")
  await page.locator("input[type='password']").fill("admin123")
  await page.locator("input[type='password']").press("Enter")
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
  const storagePath = ".auth/user.json";
  await page.context().storageState({ path: storagePath });

  //  const userData = JSON.parse(fs.readFileSync(storagePath, 'utf-8'));
  // const cookieValue = userData.cookies[0]?.value;
  // console.log(cookieValue)
  // // Set cookie value into environment variable
  // process.env.CooKiValue = cookieValue;

});