// 1) charAt() method
let str = 'this is javascript'
console.log(str.charAt(5))  // does not accept -ve index

// 2)At()
console.log(str.at(-2))    // accept -ve index

// 3) IndexOf(): give the index value of the perticular charecter
console.log(str.indexOf('v'))
console.log(str.indexOf('s',4))   // 4 - check from 4 th index

// 4) lastIndexOf()
console.log(str.lastIndexOf('a'))

// concat
let str2 = 'hii this is Python'
console.log(str.concat(' ',str2," this is java"))

// split()
console.log(str2.split('h'))

//join()
let str3 = str2.split('').reverse().join('')
console.log(str3)

//slice
let str4 = 'This is String Methods'
console.log(str4.slice(2,6))

//8)toUpperCase()
console.log(str4.toUpperCase())

//9)toLowerCase()
console.log(str4.toLowerCase())

// 10)include - it will return boolean valaues
if(str4.includes('ing')){
    console.log('ths given statement is included')
}
else{
    console.log('ths given statement is not included')
}