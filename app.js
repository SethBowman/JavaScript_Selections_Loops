
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

console.log("Hello World!\n==========\n");

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
// }
// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i}: FIZZBUZZ `)
//     } else if(i % 3 === 0) {
//         console.log(`${i}: FIZZ`)
//     } else if(i % 5 === 0) {
//         console.log(`${i}: BUZZ`)
//     }
    
// }

let i = 1;

// while(i <= 100) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i++;
// }

// do {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i++;

// }while(i <= 100);

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for(let i = 1; i <= n; i++) {
    if(i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if(!found) {
    console.log("Did not find value.")
}