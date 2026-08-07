// // 1.SWAP NUMBERS
// const swapNumbers = (a, b) => {
//     console.log("Before Swap:");
//     console.log("a =", a, "b =", b);

//     [a, b] = [b, a];

//     console.log("After Swap:");
//     console.log("a =", a, "b =", b);
// };

// swapNumbers(10, 20);

// // 2.Write a function to print all even numbers from 1 to n
// const evenNumbers = (n) => {
//     for (let i = 2; i <= n; i += 2) {
//         console.log(i);
//     }
// };

// evenNumbers(20);

// //3.function to find the factorial of a number
// const factorial = (n) => {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// };

// console.log(factorial(5));

// // 4.function to print Fibonacci series up to nth term
// const fibonacci = (n) => {
//     let a = 0;
//     let b = 1;

//     for (let i = 1; i <= n; i++) {
//         console.log(a);

//         let next = a + b;
//         a = b;
//         b = next;
//     }
// };

// fibonacci(10);

// //5. Write a function to reverse a number
// const reverseNumber = (num) => {
//     let reversed = Number(num.toString().split("").reverse().join(""));
//     return reversed;
// };

// console.log(reverseNumber(12345));

//6. Without using string methods
// const reverseNumber = (num) => {
//     let rev = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     return rev;
// };

// // console.log(reverseNumber(12345));

// // 7.Write a function to check if a number is a palindrome (using string)
// const isPalindrome = (num) => {
//     let str = num.toString();
//     let reversed = str.split("").reverse().join("");

//     return str === reversed;
// };

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));


// // 1. Count the frequency of each digit in a number
// function digitFrequency(num) {
//     let freq = {};

//     while (num > 0) {
//         let digit = num % 10;

//         if (freq[digit]) {
//             freq[digit]++;
//         } else {
//             freq[digit] = 1;
//         }

//         num = Math.floor(num / 10);
//     }

//     console.log(freq);
// }

// digitFrequency(1223344555);

// // 2.Print all Armstrong numbers between 1 and 1000
// function printArmstrong() {

//     for (let num = 1; num <= 1000; num++) {

//         let temp = num;
//         let sum = 0;
//         let digits = num.toString().length;

//         while (temp > 0) {
//             let digit = temp % 10;
//             sum += digit ** digits;
//             temp = Math.floor(temp / 10);
//         }

//         if (sum === num) {
//             console.log(num);
//         }
//     }
// }

// printArmstrong();

// // 3.Find all the factors of a number

// function factors(num) {

//     console.log("Factors are:");

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             console.log(i);
//         }
//     }
// }

// factors(24);

// // 4.Find the first and last digit of a number
// function firstAndLastDigit(num) {

//     let lastDigit = num % 10;

//     while (num >= 10) {
//         num = Math.floor(num / 10);
//     }

//     let firstDigit = num;

//     console.log("First Digit =", firstDigit);
//     console.log("Last Digit =", lastDigit);
// }

// firstAndLastDigit(987654);

// // 5.Check whether a number is Prime
// function isPrime(num) {

//     if (num <= 1) {
//         console.log("Not Prime");
//         return;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             console.log("Not Prime");
//             return;
//         }
//     }

//     console.log("Prime");
// }

// isPrime(17);

// STATEMENTS
// 1.find the largest of three numbers using nested ternary operator
function largest(num1,num2,num3){
    let result = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3 )
    return result
}
console.log(largest(10,50,30))

// 2. check if a year is a leap year
function leepyear(year){
    return (year%400 == 0 || year %4 == 0 && year % 100 != 0)?"leap year" : "not leep year"

}
console.log(leepyear(2000))

// 3.find the smallest of three numbers using nested ternary operator
function smallest(num1,num2,num3){
    let result = num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3 )
    return result
}
console.log(smallest(10,50,30))

// 4.check is a number is divisible by both 4 and 5
function divisibleby(num){
    return (num%4==0 && num%5==0)?'divisible by 4 and 5':'not divisible by 4 and 5'
}
console.log(divisibleby(40))
// 5.implement a simple calculator with nested ternary operator
function calculator(num1,num2,operator){
    return operator == '+'?
    num1 + num2 
    :operator == '-'?
    num1 - num2 
    :operator == '*'? 
    num1 * num2 : 
    'invalid operator';
}
console.log(calculator(20,30,'*'))

// 6.check if number lies between 10 and 15
function checkRange(num) {
    return (num >= 10 && num <= 15)
        ? "Number lies between 10 and 15"
        : "Number does not lie between 10 and 15";
}

console.log(checkRange(12));

// 7.check weather a number is single digit or multi digit
function checkDigit(num) {
    return (Math.abs(num) <= 9)
        ? "Single digit"
        : "Multi digit";
}

console.log(checkDigit(7));  
console.log(checkDigit(25));  
console.log(checkDigit(-5));  


// STRING METHODS
// 1. Count the frequency of each word in a sentence

let sentence1 = prompt("Enter a sentence:");

let words1 = sentence1.split(" ");
let frequency = {};

for (let word of words1) {
    frequency[word] = (frequency[word] || 0) + 1;
}

console.log(frequency);


// 2. Convert hello_world to hello world
//    and hello world to hello_world

let text = prompt("Enter a string:");

if (text.includes("_")) {
    console.log(text.replaceAll("_", " "));
} else {
    console.log(text.replaceAll(" ", "_"));
}


// 3. Reverse the order of words in a sentence

let sentence2 = prompt("Enter a sentence:");

let reversed = sentence2.split(" ").reverse().join(" ");

console.log(reversed);


// 4. Check whether a string is a valid email

let email = prompt("Enter an email:");

let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (pattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}


// 5. Check whether a string contains only digits

let str = prompt("Enter a string:");

if (/^\d+$/.test(str)) {
    console.log("Contains only digits");
} else {
    console.log("Contains non-digit characters");
}


// 6. Find the shortest word in a sentence

let sentence3 = prompt("Enter a sentence:");

let words2 = sentence3.split(" ");

let shortest = words2[0];

for (let word of words2) {
    if (word.length < shortest.length) {
        shortest = word;
    }
}

console.log("Shortest word:", shortest);


// 7. Check whether two strings are anagrams

let str1 = prompt("Enter first string:")
    .replaceAll(" ", "")
    .toLowerCase();

let str2 = prompt("Enter second string:")
    .replaceAll(" ", "")
    .toLowerCase();

let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");

if (sorted1 === sorted2) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}

// 8. Remove duplicate characters from a string

let input = prompt("Enter a string:");

let result = "";

for (let ch of input) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);