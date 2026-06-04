

function printnames(){

    console.log("Murthy")
    console.log("Sagar")
    console.log("Yashaswini")
}


printnames()

printnames()


// function add(){

//     console.log(5)
//     console.log(6)
//     console.log(5+6)
// }

// add()


function add(num1, num2){

    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}


// add(6, 8)

// add(56, 78)

add()

//default parameters

function Murthy(Raju, vittal=5 ){

    console.log(Raju)
    console.log(vittal)
    console.log(Raju*vittal)
}

Murthy(23,67)

Murthy(4)


// function without parAMS 

// FUNCTION WITH Params  - Default Params 

//functions with return keyword


function printname(){

    return "Raju"
}


function jointwonames(name1, name2){

    return name1+name2
}


//await page.locator(xpath).fill(printname())


x = printname()

console.log(x)

console.log(jointwonames("Raju", "G"))

//await page.locator(xpath).fill(jointwonames("Raju", "G"))