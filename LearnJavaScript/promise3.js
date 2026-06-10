// What is a Promise?

// A Promise is an object that represents the eventual completion
//  (or failure) of an asynchronous operation.


// Why Do We Need Promises?

// Earlier we used callbacks, but they caused:

// ❌ Callback hell

// ❌ Hard to read code

// ❌ Difficult error handling

// Promises solve these problems by providing:

// ✅ Cleaner chaining

// ✅ Better error handling

// ✅ More readable async code


// Promise States

// A Promise has 3 states:

// Pending - Initial state

// Fulfilled - Operation successful

// Rejected - Operation failed

//Basic Promise 

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Operation Successful");
//     } else {
//         reject("Operation Failed");
//     }
// });

// // Consuming a Promise

// // We use:

// // .then() → for success

// // .catch() → for error

// // .finally() → always runs


// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Done");
//     });


// // Promises for Asynchronous Programming 

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data);
//     });


// //Promise chaining (Solution to Callback Hell)


function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

function step2(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

function step3(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

// Usage:
step1(10, false)
    .then((result1) => step2(result1, false))
    .then((result2) => step3(result2, false))
    .then((result3) => console.log(result3))
    .catch((error) => console.log(error));


//Promise Methods 


// Promise.all() - 
// Promise.all() waits for all promises to resolve.
// If any one promise fails, it immediately rejects.

// Promise.allSettled() - 
// Promise.allSettled() waits for all promises to complete, regardless of success or failure.

// It always returns results for every promise.

// Promise.race() - 

// Returns the first promise that settles
// (Settled = either fulfilled OR rejected)

// Promise.any() - 
// Returns the first fulfilled (successful) promise.
// It ignores rejected promises unless all fail.





const p1 = Promise.resolve('Like If you understood callbacks');
//const p2 = Promise.reject('Rejected');
const p3 = 100;
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Subscribe for more updates');
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Subscribe for less updates');
});



//to loop the promise 
//Promise.all([p1, p4, p5]).then((values) => console.log(values))
                              //.catch(value => console.log(value)); // resolved values 
//Promise.allSettled([p1, p2,, p4, p5]).then((values) => console.log(values)); // resolved and rejected both

Promise.race([p4, p5]).then((value) => console.log(value)); // whichever first resolved value 
Promise.any([p4, p5]).then((value) => console.log(value));



//  [newTab] = Promise.all([

//       page.goto("xyz")
//       page.click(element)
//       page.waitforEvent("Page")
//  ])