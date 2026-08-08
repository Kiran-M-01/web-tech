
// console.log("start")
// let id1 = setTimeout(() =>{
//     console.log('hi this is set time out')
// },4000)
// console.log("end")

// clearTimeout(id1)

// let count = 1
// let id2 = setInterval(() =>{
//     console.log(count++)
// })

// clearInterval(id2)

// function getData(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             console.log("promise returned");
//         },5000)
//     })
// }

// async function displayData(){
//     console.log("start");
//     let result = await getData()

//     console.log(result);

//     console.log("end");
// }

// displayData()

//  -----------------------------------------------------
// GROOMING

// let count = 0
// let a = setInterval(()=>{
//     // console.log(count)
//     if(count === 5){
//     clearInterval()
//     }
// })

let a = new Promise((resolve,reject) =>{
    let promise = false
    if(promise){
    resolve("promise success")
    }else{
    reject('promise rejected')
    }
})
console.log(a)

