// // ARRAY
// // let arr = [10,20,30,40,50]
// // console.log(arr)
// // console.log(arr[2])

// // let arr2 = Array('hii','hello')
// // console.log(arr2)

// // let arr3 =new Array('hii','hello','bye')
// // console.log(arr3)

// // CRUD
// // create
// let arr = ['this','is','js','01']

// // read
// console.log(arr[1])

// // update
// arr[0] = 'hii'
// arr[10] = 10
// console.log(arr)


// // ---------------------
// let arr1 = [10,'hi',20,true]
// console.log(arr1.length)

// // METHODS OF ARRAYS
// // 1.push()
// // 2.pop()
// // 3.shift()
// // 4.unshift()

// // push()
// arr1.push(100,'hey')
// console.log(arr1)

// // pop()
// let data = arr1.pop()
// console.log(data)
// console.log(arr1)

// // unshift
// arr1.unshift(1,2,'added')
// console.log(arr1)

// // shift
// arr1.shift()
// console.log(arr1)

// slice()
// arr2 = [10,'hii',20,'hello',30,40,'bye',50]
// console.log(arr2.slice(1,3))

// // splice() - it will return deleted count elements
// arr3 = arr2.splice(1,2,'good')
// console.log(arr3)   // deleted elements
// console.log(arr2)    

// indexOf
// let arr = [10,'hii',20,'hello',30,40,'bye',50,30]
// console.log(arr.indexOf('hii'));
// console.log(arr.lastIndexOf('30'));

// includes
// let arr = [10,'hii',20,'hello',30,40,'bye',50,30]
// console.log(arr.includes('bye'))

// // concate
// let arr2 = ['js',70,'programminng']
// console.log(arr.concat(arr2))


// DESTRUCTURING

// 1. array destructuring
// let arr = [[10,[20]],[30,[40,[50]]]]

// let [[a,[b]],[c,[d,[e]]]] = arr;

// console.log(c)

//skipping a valaues
// let arr1 = ["mango","Strawberry","banana"]
// // let [a,b] = arr1;
// // console.log(a)
// // console.log(b)
// // setting default values
// let [a,b="Kiwi",c,d ="Apple"] = arr1
// console.log(b)    //  b is still "Strawberry"
// console.log(d)

// Object Destructuring
let Car ={
    Brand:"BMW",
    Color:"Black",
    Price:"1cr",
    Model:"m5"
}
let {Brand,Color} = Car
console.log(Brand)
console.log(Color)
console.log(Car.Price)
