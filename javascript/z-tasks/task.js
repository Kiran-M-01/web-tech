// SWAP NUMBERS
const swapNumbers = (a, b) => {
    console.log("Before Swap:");
    console.log("a =", a, "b =", b);

    [a, b] = [b, a];

    console.log("After Swap:");
    console.log("a =", a, "b =", b);
};

swapNumbers(10, 20);

// Write a function to print all even numbers from 1 to n
const evenNumbers = (n) => {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
};

evenNumbers(20);

//function to find the factorial of a number
const factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
};

console.log(factorial(5));

// function to print Fibonacci series up to nth term
const fibonacci = (n) => {
    let a = 0;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
};

fibonacci(10);

// Write a function to reverse a number
const reverseNumber = (num) => {
    let reversed = Number(num.toString().split("").reverse().join(""));
    return reversed;
};

console.log(reverseNumber(12345));

// Without using string methods
// const reverseNumber = (num) => {
//     let rev = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     return rev;
// };

// console.log(reverseNumber(12345));

// Write a function to check if a number is a palindrome (using string)
const isPalindrome = (num) => {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");

    return str === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));


// 1. Count the frequency of each digit in a number
function digitFrequency(num) {
    let freq = {};

    while (num > 0) {
        let digit = num % 10;

        if (freq[digit]) {
            freq[digit]++;
        } else {
            freq[digit] = 1;
        }

        num = Math.floor(num / 10);
    }

    console.log(freq);
}

digitFrequency(1223344555);

// Print all Armstrong numbers between 1 and 1000
function printArmstrong() {

    for (let num = 1; num <= 1000; num++) {

        let temp = num;
        let sum = 0;
        let digits = num.toString().length;

        while (temp > 0) {
            let digit = temp % 10;
            sum += digit ** digits;
            temp = Math.floor(temp / 10);
        }

        if (sum === num) {
            console.log(num);
        }
    }
}

printArmstrong();

// Find all the factors of a number

function factors(num) {

    console.log("Factors are:");

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

factors(24);

// Find the first and last digit of a number
function firstAndLastDigit(num) {

    let lastDigit = num % 10;

    while (num >= 10) {
        num = Math.floor(num / 10);
    }

    let firstDigit = num;

    console.log("First Digit =", firstDigit);
    console.log("Last Digit =", lastDigit);
}

firstAndLastDigit(987654);

// Check whether a number is Prime
function isPrime(num) {

    if (num <= 1) {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}

isPrime(17);

