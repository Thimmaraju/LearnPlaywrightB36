

//JS is Synchronuous language 

// Execution will be in a sequeantial manner

// Asynchronuous 

// Execution will not be in a sequeantial manner

// Callback 

// Promises 



// console.log("Guru")

// //setTimeout( function , time )

// setTimeout( function (){
    
//       console.log("Nalina")
// }, 3000)

// console.log("Anusha")


// callback hell 

//f1( f2( f3 (f4 )))


function getUser(callback) {
    console.log("User fetched");
    callback();
}

function getOrders(callback) {
    console.log("Orders fetched");
    callback();
}

function getPayment(callback) {
    console.log("Payment fetched");
    callback();
}

// Callback Hell
getUser( () => {
    getOrders(() => {
        getPayment(() => {
            console.log("All data fetched");
        });
    });
});


