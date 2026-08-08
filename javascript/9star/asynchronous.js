
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
//     console.log(count)
//     count++;
//     if(count === 5){
//     clearInterval(a)
//     }
// },2000)

let a = new Promise((resolve,reject) =>{
    let promise = 1
    if(promise){
    resolve("promise success")
    }else{
    reject('promise rejected')
    }
})
console.log(a)



