// DECISION MAKING STATEMENTS
// 1) if
//  2) if else
// 3) else if ladder
// 4)switch
// 5)ternary operator

// IF
// let num = 11;

// if (num%2 == 0){
//     console.log('even number')
// }
// else{
//     console.log('odd number')
// }

// ELSE IF LADDER
// let age  = Number(prompt('enter your age'))
// if(age <= 5){
//     console.log('child')
// }
// else if(age < 18){
//     console.log('you cant vote')
// }
// else if(age < 25 ){
//     console.log('can vote')

// }
// else{
//     console.log('aged')
// }


// TERNARY OPERATOR
// let a = 3
// let b = 20
// let result = a%2 === 0? 'even':'odd'
// console.log(result)

// nested ternary operator
let marks = +(prompt('enter your marks'))
let result = marks >= 85? 'Distinction': marks < 85 && marks >= 50? 'first class': marks < 50 && marks >= 35 ? 'pass': 'fail'
console.log(result)