import { test, expect } from '@playwright/test';


test.afterAll(()=>{

    console.log("After all tests")
})
test.beforeAll(()=>{

    console.log("Before all tests")
})

test.beforeEach(()=>{

    console.log("Before Each test")
})


test.afterEach(()=>{

    console.log("After Each test")
})


test("test case 1", () => {


    console.log("This is test case 1 ")

})


test("test case 2", () => {

    console.log("This is test case 2 ")

})

test("test case 3", () => {

    console.log("This is test case 3 ")

})


test("test case 4", () => {

    console.log("This is test case 4 ")

})


test("test case 5", () => {

    console.log("This is test case 5")

})


