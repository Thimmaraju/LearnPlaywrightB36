// class classname{

//     // varibales 

//     // methods

// }


export class student {

    x = 45 
    stuname = "Raju"


    constructor(stname, place){

        console.log(stname)
         console.log(place)
    }

    printstudetails(stname, stplce, course){

        console.log(stname)
        console.log(stplce, course)
    }
}

const stu1 = new student("Vittal", "Tumkur")




// stu1.printstudetails("Vittal","blr", "Playwright")

 const stu2 = new student("Nalina", "Blr")

// stu2.printstudetails("Nalina","blr", "Playwright")

// const stu3 = new student()

// stu3.printstudetails("Anusri","blr", "Playwright")



//constrctor 

// constructor is a method 
// it will be automatically invoked when object creted 


// JS u can create a single constructor only.
