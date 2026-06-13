import {expect} from "@playwright/test"
import { AsyncLocalStorage } from "node:async_hooks"

export class addEmployeePage{

    constructor(page){

        this.page =page
        this.addemployeeSubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('//input[@name="firstName"]')
        this.lastnameInput = page.locator('//input[@name="lastName"]')
        this.saveButton = page.locator('//button[@type="submit"]')
        this.employeeDetails = page.locator("//h6[text()='Personal Details']")
           
    }

    async navigatetoAddEmployee(){

        await this.addemployeeSubmenu.click()
    }
    async addemployeewithDetails(firstName, lastname){

        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastname)
        await this.saveButton.click()
    }

    async employeeCreationSuccess(){

        await expect(this.employeeDetails).toBeVisible()
    }



}