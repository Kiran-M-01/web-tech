// 1) convert all the names tp lowercase
let names = ["kiran","Darshan","SANG","HARsha"]
let names1 = names.map((val) => {
    return val.toUpperCase()
} )
console.log(names1)

// 2) get the length of every word
let names2 = names.map((val) => {
    return val.length
} )
console.log(names2)

// 3) find all the odd numbers
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let nums1 = nums.filter((val) => {
    return val%2 != 0
})
console.log(nums1)

// 4)find the strings having more than 5 charecters
let str = ['hiiiii','bye','good morning','hello', 'good afternoon']
let str1 = str.filter((val) => {
    return val.length > 5
})
console.log(str1)

// 5)find the maximum number
let numbers = [10, 35, 20, 8, 15];
let numbers2 = numbers.reduce((acc,curr) => {
    return curr > acc ? curr : acc
})
console.log(numbers2)

// 5)find the minimum number
let numbers3 = numbers.reduce((acc,curr) => {
    return curr < acc ? curr : acc
})
console.log(numbers3)

let numbers4 = numbers.reduce((largest,second) =>{
    // let largest = 0
    // let second = 0
    // if(curr > acc){
    //     largest = curr
    //     second = acc
    // }else{

    // } 


})