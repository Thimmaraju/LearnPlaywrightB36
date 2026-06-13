import {expect} from "@playwright/test"

export class loginPage{

    constructor(page){

        this.page =page
        this.usernameInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.loginBtn = page.locator('button[type="submit"]')
        this.loginErrorMessage = page.locator("//p[text()='Invalid credentials']")
    }

   /**
   * Navigate to the Orange HRM login page
   */
    async launchApp() {

        await this.page.goto('/web/index.php/auth/login')
        
    }

    async loginwithCreds(username, password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async loginFailure(){

        await expect(this.loginErrorMessage).toBeVisible()
    }

    async loginSuccess(){

        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

}


//camelcasing 

