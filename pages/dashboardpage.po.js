import {expect} from "@playwright/test"


export class dashboardPage {

    constructor(page){

        this.page =page
        this.PIMmenu = page.locator('a[href="/web/index.php/pim/viewPimModule"]')
        
    }

    async navigateToPimModule(){

        this.PIMmenu.click()
    }

}