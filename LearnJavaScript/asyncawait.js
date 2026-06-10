// What is async/await?

// async/await is a modern way to handle Promises in JavaScript.
// It makes asynchronous code look like synchronous code (clean & readable).

// 👉 Introduced in ES2017 (ES8).


// async Keyword

// Makes a function return a Promise automatically

// Even if you return a normal value → it becomes a resolved Promise

// async function greet() {
//     return "Hello Raju";
// }

// greet().then(console.log);



// 👉 Behind the scenes:

// return Promise.resolve("Hello Raju");


// await Keyword

// Can only be used inside async function

// Pauses execution until Promise resolves

// Makes async code look synchronous


// function fetchData() {
//     return new Promise((resolve) => {
//         resolve("Data received");
//     });
// }

// async function getData() {
//     let result = await fetchData();
//     console.log(result);
// }

//getData();


//  function greet() {
//     return Promise.resolve("Hello Raju");
// }


// async function getData() {
//     let result = await greet();
//     console.log(result);
// }

// getData()

//greet().then(Message => console.log(Message));



//============================================

// async function step1(value) {
//     return value + 10;
// }


// async function step2(value) {
//     return value + 10;
// }


// async function step3(value) {
//     return value + 10;
// }


// async function run() {

//     let result1 = await step1(5);    //15
//     let result2 = await step2(result1);  //25
//     let result3 = await step3(result2); //35
//     console.log("Results " + result3);

// }

// run();



// async function execute() {

//     let result1 = await step1(10)

//     console.log(result1)
// }

// execute()

//================================================

// function step1(value, callback) {
//     callback(value + 10, false);
// }

// function step2(value, callback) {
//     callback(value + 10, false);
// }

// function step3(value, callback) {
//     callback(value + 10, false);  
// }

// step1(10, function (result1, boolvalue) {
//     if (!boolvalue) {
//         step2(result1, function (result2, boolvalue) {
//             if (!boolvalue) {
//                 step3(result2, function (result3, boolvalue) {
//                     if (!boolvalue) {
//                         console.log("Results " + result3);
//                     }
//                 })
//             }
//         })
//     }
// });  // 40

// //======================================================00

//Promises

function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

//Promise.resolve(20)

function step2(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}
//Promise.resolve(30)
function step3(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

//Promise.resolve(40)

// Usage:
// step1(10, false)
//     .then((result1) => step2(result1, false))
//     .then((result2) => step3(result2, false))
//     .then((result3) => console.log(result3))
//     .catch((error) => console.log(error));

// async function run() {

//     let result1 = await step1(10, false);    //20
//     let result2 = await step2(result1, false);  //30
//     let result3 = await step3(result2, false); //40
//     console.log("Results " + result3);

// }

// run();


async function step1(value) {
    return value + 10;
}


async function step2(value) {
    return value + 10;
}


async function step3(value) {
    return value + 10;
}



async function run() {

    let result1 = await step1(10);    //20
    let result2 = await step2(result1);  //30
    let result3 = await step3(result2); //40
    console.log("Results " + result3);

}

// run();

//================================================

// function step1(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);
//         }
//     });
// }

//console.log(step1(10,false))


async function step1(value){

    return value +10
}

console.log(step1(10,false))