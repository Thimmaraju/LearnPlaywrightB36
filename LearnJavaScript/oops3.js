

// // polymorphism 



// class A{

//     m1() {

//         console.log("This is M1 Method from Parent")

//     }

//     add(n1=6, n2=7){

//         console.log(n1)
//         console.log(n2)
//         console.log(n1+n2)
//     }
   
// }


// class B extends A{

//     m1() {

//         console.log("This is M1 Method from Child")

//     }
//     add(n1, n2,n3){

//         console.log(n1)
//         console.log(n2)
//         console.log(n3)
//         console.log(n1+n2+n3)
//     }
    
// }

// const obj = new A()

// obj.m1()  // Method overriding 

// obj.add() // Method Overloading 


class student{

    x = 45
    y = 56

    m1(){

        console.log("M1")
    }

      m2(){

        console.log("M2")
    }

}

student.prototype.z = 78


student.prototype.m3 = function(){

    console.log("M3")

}


const stu1 = new student()


const stu2 = new student()


console.log(stu1.z)
stu1.m3()

console.log(stu2.z)
stu2.m3()