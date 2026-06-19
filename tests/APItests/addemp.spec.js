import { test, expect } from "@playwright/test"

import { faker } from '@faker-js/faker';

test("Verify add employee with Mandatory details ", async ({ request }) => {

    //trigger the request
    const addempurl = '/web/index.php/api/v2/pim/employees'

    const fristname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const middleName = faker.person.middleName()
    const empid = faker.string.alphanumeric(5)

    const AddEmpresponse = await request.post(addempurl, {
        headers: {

            cookie: "orangehrm=" + process.env.COOKIEVALUE
        },
        data: {
            "firstName": fristname,
            "middleName": middleName,
            "lastName": lastname,
            "empPicture": null,
            "employeeId": empid
        }
    })

    const responseBody = await AddEmpresponse.json()

    console.log(responseBody)

    //assertions 

    expect(AddEmpresponse.status()).toBe(200)

    expect(responseBody.data.empNumber).toEqual(expect.any(Number));
    expect(responseBody.data.lastName).toBe(lastname);
    expect(responseBody.data.firstName).toBe(fristname);
    expect(responseBody.data.middleName).toBe(middleName);
    expect(responseBody.data.employeeId).toBe(empid);
    expect(responseBody.data.terminationId).toBeNull();

    expect(responseBody.meta).toEqual([]);
    expect(responseBody.rels).toEqual([]);


})


test("Verify add employee with Mandatory details -401", async ({ request }) => {

    //trigger the request
    const addempurl = '/web/index.php/api/v2/pim/employees'

    const fristname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const middleName = faker.person.middleName()
    const empid = faker.string.alphanumeric(12)

    const AddEmpresponse = await request.post(addempurl, {
        headers: {

            cookie: "orangehrm=" + process.env.COOKIEVALUE
        },
        data: {
            "firstName": fristname,
            "middleName": middleName,
            "lastName": lastname,
            "empPicture": null,
            "employeeId": empid
        }
    })

    const responseBody = await AddEmpresponse.json()

    console.log(JSON.stringify(responseBody))

    //assertions 

    expect(AddEmpresponse.status()).toBe(422)


})
