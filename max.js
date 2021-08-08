const business = 450;
const minister = 350;
const army = 600;

// Bangla system
// if (business > minister) {
//     console.log('Business man ar pola borolox');
// }
// else {
//     console.log('Minister ar pola borolox')
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const largest = findLargest(2233, 555);
// console.log(largest);

// compare 3
/*if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
}*/

var max = Math.max(business, minister, army);
console.log('Largest value:', max);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

function findLargest(number1, number2, number3) {
    if (number1 > number2 && number1 > number3)
        return number1;
    else if (number2 > number1 && number2 > number3)
        return number2;
    else {
        return number3;
    }
}
const largestNumber = findLargest(400, 399, 898);
console.log('Largest Number:', largestNumber);
// Task 2: Write a function to find the smallest of three numbers.

function findSmallest(number1, number2, number3) {
    if (number1 < number2 && number1 < number3)
        return number1;
    else if (number2 < number1 && number2 < number3)
        return number2;
    else {
        return number3;
    }
}
const smallestNumber = findSmallest(400, 399, 898);
console.log('Largest Number:', smallestNumber);
