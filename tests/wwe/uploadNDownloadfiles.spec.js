const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');
test.describe('Automation - Working With Elements', () => {

    test('Playwright Test Case - upload file', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/upload')

        await page.locator('#file-upload').setInputFiles('testdata/Cat.jpg')

        //testData\files\rtmsample.png

        await page.locator('#file-submit').click()

        await page.waitForTimeout(5000)

        //Import 


    })


    test.skip('Playwright Test Case - upload file example 2 ', async ({ page }) => {

        await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

        await page.locator('//input[@name="upfile"]').setInputFiles('./testData/files/B26 Automation - Playwright.txt')

        await page.locator('//input[@type="submit"]').click()
        await expect(page.getByText("The file's contents are:")).toBeVisible()

        await page.waitForTimeout(5000)

    })

    test('Upload Multiple files and assert', async ({ page }) => {

        await page.goto('http://blueimp.github.io/jQuery-File-Upload/')

        await page.locator('input[type="file"]').setInputFiles(['testdata/uploadfiles/download.gif', 'testdata/uploadfiles/images.png', 'testdata/uploadfiles/samplejpg.jpg'])


    //    const  filenames = ['SDLC.png', 'Spiral-Model-Methodology.png', 'Xpath+vs+CSS.pdf']

    //     for( const file of filenames ){

    //     await expect(page.locator(`//p[text()='${file}']`)).toBeVisible()
    //     }

        await page.waitForTimeout(5000)

    })

    //==============================================================================

    test('Download a Single file and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[@href="download/TestLeaf Logo.png"]').click()
        ]);

        const suggestedFileName = download.suggestedFilename()
        const filePath = 'downloads/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy() // whether file is downloaded or not 

        //export files 
    })

    test('Download Multiple files and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        //const DownloadLinks = ['//a[@href="download/input.csv"]', "//a[text()='tkinter 2.png']"]

        const links = await page.$$('//div[@class="example"]/a')

        for (let link of links) {


            const [download] = await Promise.all([
                page.waitForEvent('download'),
                link.click()
            ]);

            const suggestedFileName = download.suggestedFilename()
            const filePath = 'downloads/' + suggestedFileName
            await download.saveAs(filePath)

        }
    })

    test('Direct Download and assert', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://i.ytimg.com/vi/UI7v_qrk-GA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDl7d7ROstzrQz-Puh-AA7aMCEz8w';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/../..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'gas.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })

    test('Direct Download and assert example 2', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkz-CtfvMGgRgdHNQsxEMfsV37rycmXyYn4jbyBlVnEZZ-edxrgDlTl1Rbfo6teEkc2zsRuzlDUSc71RWUp5JtoegBcvnZPuUMwRmkDw&s=10';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/../..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'virat.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })



    test("Verify scrooling ", async ({ page }) => {

        await page.goto("https://www.flipkart.com/")

        await page.locator("//span[text()='Help Center']").click()
    })


})