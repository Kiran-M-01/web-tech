let arr = ['hi','helo','bye']
let newArr = [10,20,30,40]
let arr2 = arr.map((s) => {
    return s + 10
})
console.log(arr2)

let arr3 = newArr.map((s) => {
    return s - 10
})
console.log(arr3)