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
// let marks = +(prompt('enter your marks'))
// let result = marks >= 85? 'Distinction': marks < 85 && marks >= 50? 'first class': marks < 50 && marks >= 35 ? 'pass': 'fail'
// console.log(result)

// SWITCH STATEMENT
// print the day of a week by using a number, input = 3 , output = wednesday

// let day  = Number(prompt("enter a number"))
// switch(day){
//     case 1:console.log('monday');
//     break;
//     case 2:console.log('tuesday');
//     break;
//     case 3:console.log('wednesday');
//     break;
//     case 4:console.log('thursday');
//     break;
//     case 5:console.log('friday');
//     break;
//     case 6:console.log('saturday');
//     break;
//     case 7:console.log('sunday');
//     break;
//     default:console.log('invalid input');
// }

// buils a simple calculator by using switch statemnet
let a = +(prompt("enter first number"))
let b = +(prompt("enter second number"))
op = (prompt("enter operator"))
switch(op){
    case "+":console.log(a + b);
    break;
    case "-":console.log(a - b);
    break;
    case "*":console.log(a * b);
    break;
    case "/":console.log(a / b);
    break;
    case "%":console.log(a % b);
    break;
    case "**":console.log(a ** b);
    break;
    default:console.log('invalid input');
}