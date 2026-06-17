const { test, expect } = require('@playwright/test');

test.describe('Button Tests', () => {
    test('should render the button', async ({ page }) => {

        await page.goto('https://selectorshub.com/xpath-practice-page/')

        //verify heading 
        await expect(page.locator("//a[contains(.,'Find out how to automate')]")).toBeVisible({ timeout: 60000 }) // 5 sec 

        await page.getByPlaceholder('Enter email').fill("rajutester@gmail.com")

        // // Generic click
        // await page.getByRole('button').click();

        // // Double click
        // await page.getByText('Item').dblclick();

        // // Right click
        // await page.getByText('Item').click({ button: 'right' });

        // // Shift + click
        // await page.getByText('Item').click({ modifiers: ['Shift'] });

        // // Ctrl + click on Windows and Linux
        // // Meta + click on macOS
        // await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });

        // // Hover over element
        // await page.getByText('Item').hover();

        // // Click the top left corner
        // await page.getByText('Item').click({ position: { x: 0, y: 0 } });

    });


});