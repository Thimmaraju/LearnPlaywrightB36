

// creds = {

//     username : "Admin",
//     password : "admin123"
// }

// console.log(creds.username)

// console.log(creds['username'])

const student = {

    stname : "Guru",
    place: "Blr",
    company : "xyz",

}

console.log(student.rollnumber)

student['rollnumber'] = 418

console.log(student.rollnumber)

student['company'] = "ABC"

console.log(student.company)

delete student.place

console.log(student.place)


const jobtitles = {

   title1 : "SDET QA I",
   title2 : "SDET QA II",
   title3 : "SDET QA III",

}

// for in 
for(let item in jobtitles ){

    console.log("Loop starts here ")
    console.log(jobtitles[item])    
    console.log("Loop Ends here ")
}