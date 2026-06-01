
import { expect, test } from "@playwright/test";

test("Launch the website based the Browser you are running ", async ({ page, browserName }) => {

    switch (browserName) {

        case "chromium": {

            await page.goto("https://www.flipkart.com/")
        }
            break;
        case "firefox":
            await page.goto("https://www.amazon.in/")
            break;
        case "webkit":
            await page.goto("https://www.myntra.com/")
            await page.close()
            break;


    }

})


test.only("Launch the website based the Browser you are running - using if else if  ", async ({ page, browserName }) => {

    if (browserName == 'chromium') {

        await page.goto("https://www.flipkart.com/")
    }

    else if (browserName == "firefox") {

        await page.goto("https://www.amazon.in/")
    }

    else if (browserName == "webkit") {

        await page.goto("https://www.myntra.com/")
        await page.close()

    }

})