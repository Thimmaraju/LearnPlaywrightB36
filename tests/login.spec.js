import {test, expect} from "@playwright/test"

import { loginPage } from "../pages/loginpage.po"

import logindata from "../testdata/login.json"

let login ;

test.beforeEach(async ({page}) =>{

    login = new loginPage(page)

    await login.launchApp()
})

test("Verify login with valid Credentials ", async ()=>{

  await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)

  await login.loginSuccess()
})

test("Verify login with valid username and Invalid Password ", async ()=>{

  await login.loginwithCreds(process.env.APP_USERNAME, logindata.invlaidpassword)

  await login.loginFailure()
})

test("Verify login with invalid username and valid Password ", async ()=>{

  await login.loginwithCreds(logindata.invalidusername, logindata.password)

  await login.loginFailure()
})

test("Verify login with invalid username and invalid Password ", async ()=>{

  await login.loginwithCreds(logindata.invalidusername, logindata.invlaidpassword)

  await login.loginFailure()
})