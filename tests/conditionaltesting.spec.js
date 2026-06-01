import {expect, test} from "@playwright/test";

test("check the checkbox based on status", async ({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    const statusoftheCheckbox = await page.locator('input[type="checkbox"]').isChecked()

    console.log(statusoftheCheckbox)

    if(!statusoftheCheckbox){

        await page.locator('input[type="checkbox"]').check()

    }

})