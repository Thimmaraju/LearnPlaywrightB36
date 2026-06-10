

// console.log("Start");

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved");
//     }, 2000);
// });

// p.then((result) => {
//     console.log(result);
// });

// console.log("End");


// //==========================

// function getUser() {
//     return new Promise((resolve) => {
//         console.log("User fetched");
//         resolve();
//     });
// }

// function getOrders() {
//     return new Promise((resolve) => {
//         console.log("Orders fetched");
//         resolve();
//     });
// }

// function getPayment() {
//     return new Promise((resolve) => {
//         console.log("Payment fetched");
//         resolve();
//     });
// }

// getUser()
//     .then(() => getOrders())
//     .then(() => getPayment())
//     .then(() => {
//         console.log("All data fetched");
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//     //async await 

//     function getUser() {
//     return new Promise((resolve) => {
//         console.log("User fetched");
//         resolve();
//     });
// }


 async function printMessage(){

    return "Raju"
}


 async function printguru(){

    return "Guru"
}

 async function printvenkat(){

    return "Venkat"
}




// async  function result(){
   

//     x = await printMessage()

//     console.log(x)

    
//     y = await printguru()

//     console.log(y)

        
//     z = await printvenkat()

//     console.log(z)



// }

// result()


printMessage()
    .then((result) => {
        console.log(result); // Raju
        return printguru();
    })
    .then((result) => {
        console.log(result); // Guru
        return printvenkat();
    })
    .then((result) => {
        console.log(result); // Venkat
    })
    .catch((error) => {
        console.log(error);
    });

//

async function getValues() {
    const msg = await printMessage();
    const guru = await printguru();
    const venkat = await printvenkat();

    console.log(msg, guru, venkat);
}

getValues();