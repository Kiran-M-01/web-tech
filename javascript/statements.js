// DECISION MAKING STATEMENTS
// 1) if
//  2) if else
// 3) else if ladder
// 4)switch
// 5)ternary operator

// let num = 11;

// if (num%2 == 0){
//     console.log('even number')
// }
// else{
//     console.log('odd number')
// }

let age  = Number(prompt('enter your age'))
if(age <= 5){
    console.log('child')
}
else if(age < 18){
    console.log('you cant vote')
}
else if(age < 25 ){
    console.log('can vote')

}
else{
    console.log('aged')
}