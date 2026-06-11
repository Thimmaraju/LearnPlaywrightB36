import { test, expect } from '@playwright/test';

test.describe("Group 1", () => {


    test("test case 1", () => {

        test.fail()

        console.log("This is test case 1 ")

        expect(5).toBe(7)

    })


    test("test case 2", () => {

        console.log("This is test case 2 ")

    })


    test("test case 3", () => {

        test.fixme()

        console.log("This is test case 3 ")

    })


    test("test case 4", () => {

        console.log("This is test case 4 ")

    })


})



test.describe("Group 2", () => {


    test("test case 5", () => {

        console.log("This is test case 5 ")

    })


    test("test case 6", () => {

        console.log("This is test case 6 ")

    })


})



