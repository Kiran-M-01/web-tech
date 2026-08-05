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

