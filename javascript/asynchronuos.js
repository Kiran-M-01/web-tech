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

// interview quqestion
// let count = 0;
// for(i=0;i<=5;i++){
//     let a = setTimeout(()=>{
//         count++
//         console.log(count)
//     },i*2000)
// }

// 2} PROMISE - 
// - sequential completion or failure of an asynchronour task

// let a = new Promise((res, rej) =>{
//     rej("it is rejecteed")
// })

// console.log(a)


// let a = new Promise((res,rej)=>{
//     b = false
//     if(b){
//     res('this is resolved')
//     }else{
//         rej('this is rejected')
//     }
// })
// a.then((value)=>{
//     console.log(value)
// })
// a.catch((v)=>{
//     console.log(v)
// })

// 3)FETCH api
// let data = fetch('https://dummyjson.com/products')
// console.log(data)    //  fetch returns promise
// data.then((v)=>{
//     // console.log(v)  //  returns response not in json format
//     return v.json()     // convert response into json format
// }).then((va)=>{
//     va.products.forEach((value)=>{
//         console.log(value.title)
//         console.log(value.description)
//     })
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((value)=>{
//     return value.json()
// }).then((v)=>{
//     v.forEach((val)=>{
//         console.log('title:',val.title)
//         console.log('isCompleted:',val.completed)
//     })
// })

// 4) ASYNC AND AWAIT
// it handles the promis and returns response automatically
// async function fetching(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let res = await data.json()
//     console.log(res);
//     res.products.forEach((x) =>{
//         console.log(x.title)
//     })
    
// }


