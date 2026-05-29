
// // arithemetic operators 
// // comparision 
// // Logical 
// // assignment 
// // tenary /conditional 

// // Arithematic Operators 

// // + addition 
// // - Substraction
// // * Multiplication
// // / Devision 
// // % - Modulus - Give the remainder of 2 operands 

// x = 30

// y = 5 

// console.log(x+y)

// console.log(x-y)


// console.log(x*y)

// console.log(x/y)

// console.log(x%y)


// z = 18 
// z++ // z = z+1 

// console.log(z)


// num= 18 

// num--  // num = num-1

// console.log(num)

// console.log(4+6)

// preincrement
// postincrement 


// x = 5 

// ++x  // pre increment 

// x++ // post Increment

// **
// 2^23

// 2**23

// Coersion 

num1 = 34

num2 = 67
console.log(num1+num2)


str1 = "Raju"

str2 = "G"

str3 = "Blr"

console.log(str1+str2+str3)  // Concatination 


console.log(34 + "Raju")

console.log("23" + 10) //"2310"


console.log(35-"20")


console.log(2+3+4+6+"6"+6+7+8)  

//150 test cases 


//we will pass number for the payment 


vehicleprice = 23000
deliveryfee = 500

totalprice  = vehicleprice + deliveryfee

console.log(totalprice)

//console.log(23000+undefined)   // NaN 

console.log(23-"45")

console.log(34-"raju")

console.log("Raju" -"G")

//Comparision Operators

// ==

// ===

// >

// >=

// <

// <=

// !=

//Vital is eaquals to Guru 

// x = 4   ->  = is the operator we use for assignment not comparision

// ==  Loose Equality  - Will compare only value but will not datatype 

// ===  Strict Equality  -- will compare not only value also datatypes 


console.log(2==2)  //true 

console.log(2===2) // true 


console.log(2=="2")  //true 

console.log(2==="2") // false 


console.log("Raju" == "raju")  // false 

console.log(3 == 3.5)

// JS Is casesentive language 

console.log(34<23)  //true 

console.log(5>=5)

console.log(4 != 5-1)  // true

console.log("4"-5+"6")  //"45"-6  -1+"6"   

// Logical 

// AND  && 

// truth table 

// x y  result 

// 0  1    0
// 1  0    0 
// 0  0    0
// 1  1    1


// x = true 

// y = true 

// console.log(x&&y)


// OR  ||
 
// Truth Table 

// x   y    result 

// 0   1     1

// 1   0     1

// 1   1    1

// 0   0    0



x = false 

y = false 

console.log(x||y)

// NOT 

// x   result 

// 1     0

// 0     1


console.log(!false)

//checck the status of the checkbox 

//isChecked()  true 


console.log("2"==2 &&  5==5)

// Assignment 

// =
// +=
// -=
// *=
// /=

x = 6

console.log(x/=7)  // x = x+7

// condition , value1 , value2  , new varibale (ex: z)

// if condition is pass  z = value1
// if condition is fail  z = value2 


let Payment = false 
// , "Sold", "Inprogress" , vehiclestatus 

vehiclestatus =   Payment ? "Sold": "Inprogress"

console.log(vehiclestatus)


