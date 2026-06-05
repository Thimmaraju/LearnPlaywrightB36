


function add(n1,n2,n3){

    console.log(n1+n2+n3)
}


function substract(n1,n2){

    console.log(n1-n2)
}


function multiply(n1,n2){

    console.log(n1*n2)
}


function calc(callback){

    const x = 20 
    const y = 30
    callback(x,y)
}

 calc(add)

// calc(substract)

// calc(multiply)

// callback - A callback function is a function that is passed as an argument to another function and is executed later when a specific task is completed.
// ex: add
//Its higer order function - a function which accepts callback.

 // Ex: calc ()

//  function calc(n1,n2, callback){

//     callback(n1,n2)
//  }


//  calc(34,23, add)

//  calc(25,89,substract)

//callback is also called as closure function 


function printMurthy(){

    console.log("Murthy")
}

function printname(callback){

    callback()
}

printname(printMurthy)


printname(()=>console.log("Guru"))



// Anonymous function 

// function (){

//     console.log("Raju")
// }


//()=>console.log("Guru")



