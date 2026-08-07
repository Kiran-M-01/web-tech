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

let str = ['hiiiii','bye','good morning','hello', 'good afternoon']
let str1 = str.filter((val) => {
    return val.length > 5
})
console.log(str1)

let numbers = [10, 35, 20, 8, 15];
let numbers2 = numbers.reduce((acc,curr) => {
    return curr > acc ? curr : acc
})
console.log(numbers2)