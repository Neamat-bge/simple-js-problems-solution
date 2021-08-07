// Absulate number

// const myNumber = -5;
// const output = Math.abs(myNumber);

const myNumber = 21.95;

// number close to its upper one(21.000002 to 22)
// const output = Math.ceil(myNumber);

// number close to its lower one(21.000002 to 21)
// const output = Math.floor(myNumber);

// practically , greater than .5 its choose next number
// const output = Math.round(myNumber);


// Random number
// const output = Math.random()

// Random number multipy by 6
// const output = Math.random() * 6;

// const rounded = Math.round(output);
// console.log(rounded);

for (let i = 0; i <= 30; i++) {
    const output = Math.random() * 6;
    const rounded = Math.round(output);
    console.log(rounded);
}