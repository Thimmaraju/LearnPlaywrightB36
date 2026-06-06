
arr  = []  // empty array 

arr2 = [2,4,5,6,7,8]  // elements 

arr3 = ["raju", 32, true , undefined, null]


console.log(arr3[0])


arr4 = [2,4,5,6,7,8,34,65,23,87]

arr4[0]

arr4[9]

console.log(arr4.length)

console.log(arr4[arr4.length-1])


str1 = "Raju"
str2 = "G"

console.log(arr3.concat(arr4))

arr5 = [2,7,9,3,5,6]

//.sort()

arr7 = ['raju', 'arun', "zion", "Parth"]

arr6 = arr5.sort()

console.log(arr6)

ar1 = [2,7,9,3,5,6,'raju', 'arun', "zion", "Parth"].sort()

console.log(ar1)

//20+

// push  - done 
// pop - done
// shift  - done
// unshift  - done
// some 
// any 
// filter 
// reduce 
// map 
// includes  - done
// indexOf 
//spilt - done 
//join


str = "this is Javascript class"

ar2 = str.split("s")

console.log(ar2)


menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]

// console.log(menuitems.sort())

// menuitems.includes("PIM")  // true 

// menuitems.includes("Guru")  //false 


//console.log(menuitems.sort().reverse())


// arr = ['sleep', "work", "read"]

// arr.push("drink")


// arr.push("exersize", "walk")

// console.log(arr)

// arr.pop()
// arr.pop()
// console.log(arr)


arr = ['sleep', "work", "read"]

arr.unshift("drink")


arr.unshift("exersize", "walk")

console.log(arr)

arr.shift()

arr.shift()

console.log(arr)



menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]

str2 = menuitems.join(" ")  // converts array to string 

console.log(str2)

str = "Raju"

revstr = str.split("").reverse().join("")

console.log(revstr)

if(str == revstr){

    console.log("Given string is a palindrome ")
}
else{

     console.log("Given string is not a palindrome ")

}


// arr = ["Raju", "Nishi", "Guru", "Nayeem", "venkat"]

// arr[1] = 'Nalina'

// console.log(arr)

// arr.splice(2, 0, "Vittal", "Yashaswini")

// console.log(arr)


names = ["Raju", "Nishi", "Guru", "Nayeem", "venkat"]

//looping arrays 

//for of 

// for(let element of names){

//     console.log("Loop starts here ")

//     console.log(element)

//         console.log("Loop Ends here ")

// }

names.forEach(element => {

       console.log("Loop starts here ")

        console.log(element)

        console.log("Loop Ends here ")
    
});


Jobtitles = ["QA I", "QA II", "QA III"]


Jobtitles.forEach(element => {

       console.log("Loop starts here ")

        console.log(element)

        console.log("Loop Ends here ")
    
});