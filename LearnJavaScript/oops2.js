
// //OOPS 
// // Abstraction - Not suppoted in JS 
// // Interface - Not supported in JS 

// // Encapsulation 
// // Inheritance 
// // Polymorphism 
// // prototyping 


// // 1. Encapsulation

// // Binding the data between the methods in a class 


// // class  employee{

// //     getEmployeeEmployeedetails(){


// //     }


// //     printemployeedetails(){

// //     }

// // }


// class employee{

//     empname
//     empplace
//     emporg


//     getemployeedetails(v1, v2, v3){

//         this.empname = v1

//         this.empplace = v2 

//         this.emporg = v3 
//     }

//     printemployeeDetails(){

//         console.log(this.empname, this.empplace,this.emporg)
//     }
// }

// const emp1 = new employee()

// //emp1.getemployeedetails("Raju", "Blr", "Xyz")

// emp1.printemployeeDetails()

//Inheritance

class A{

    m1() {

        console.log("This is M1 Method")
        // static method
    }
    m2() {

        console.log("This is M2 Method")
        this.m4()

        // Non Static method 
    }
    
    m3() {

        console.log("This is M3 Method")

    }
}


class B extends A{

    m4() {

        console.log("This is M4 Method")
        // static method
    }
    m5() {

        console.log("This is M5 Method")

        // Non Static method 
    }
    
}


const obj = new B()

obj.m3() // From Parent 

obj.m5()  // from child 

//================================================================

// Polymorphism 
// Prototyping 

// Synchronuous 
// ASynchronuous

// Promises 

// Async await 
