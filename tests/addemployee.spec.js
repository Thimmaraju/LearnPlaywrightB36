import {test, expect} from "@playwright/test"

import { loginPage } from "../pages/loginpage.po"

import { dashboardPage } from "../pages/dashboardpage.po"

import { addEmployeePage } from "../pages/PIM/addemployeepage.po"

import loggindata from "../testdata/login.json"

import addempdata from "../testdata/addemployee.json"

let login ;
let dashborad;
let addemp;

test.beforeEach(async ({page}) =>{

    login = new loginPage(page)
    dashborad = new dashboardPage(page)
    addemp = new addEmployeePage(page)

    await login.launchApp()
    await login.loginwithCreds(loggindata.username, loggindata.password)
    await login.loginSuccess()
    await dashborad.navigateToPimModule()
    await addemp.navigatetoAddEmployee()
})

test("Verify add employee with Mandatory details ", async ()=>{

  await addemp.addemployeewithDetails(addempdata.firstname, addempdata.lastname)

  //await addemp.employeeCreationSuccess()
  
  //await expect(this.employeeDetails).toBeVisible()

})
