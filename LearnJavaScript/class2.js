
class employee {

    static x = 23  // Static Varibale
    y = "Raju"  // non static variable 

    static m1() {

        console.log("This is M1 Method")
        // static method
    }
    m2() {

        console.log("This is M2 Method")
        this.m4()

        // Non Static method 
    }
    static  m3() {

        console.log("This is M3 Method")
        this.m1()
    }
    m4() {

        console.log("This is M4 Method")
    }
}

// console.log(employee.x)

// //employee.y  not possible without object of the class 

// employee.m3()

// employee.m4()

const emp1 = new employee()

emp1.m2()


// employee.m3()

