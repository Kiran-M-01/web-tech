//  HIGHER ORDER FUNCTION

// let add = (x,y) => x + y;
// let sub = (x,y) => x - y;
// let mul = (x,y) => x * y;

// // console.log(add)
// function operation(operator,x,y){
//     return operator(x,y)
// }
// console.log(operation(add,10,20));
// console.log(operation(sub,10,20));
// console.log(operation(mul,10,20));

// // ACTUAL USECASE OF ARROW FUNCTION
// console.log(operation((x,y)=> x + y,10,20));
// console.log(operation((x,y)=> x - y,10,20));
// console.log(operation((x,y)=> x * y,10,20));

// NESTED FUNCTION
let parent = () => {
    console.log("this is parent")
    let a = 10;
    let child = () => {
        console.log("this is child")

        let grandchild = () =>{
            console.log('this is grandchild')
        }
        grandchild()
    }
    child()
}
parent()
