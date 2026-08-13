// ASYNCHRONOUS JAVASCRIPT
//1} TOMEOUT FUNCTIONS


// 1)SETTIMEOUT
// let timer = setTimeout(() =>{
//     console.log("this is seTimeOut")
// },3000)

// console.log("hi")
// console.log("hello")

// //2) SETINTERVAL
// let count = 0
// let timer = setInterval(() =>{
//     count++
//     console.log(count)
//     if(count==5){
//         clearInterval(timer)
//     }
// },4000)

// 3)clearTimeout()
// 4) clearInterval

// 2} PROMISE - 
// - sequential completion or failure of an asynchronour task

let a = new Promise((res, rej) =>{
    rej("it is rejecteed")
})

console.log(a)


