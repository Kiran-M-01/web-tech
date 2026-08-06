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

//11) trim() , trimStart() , trimEnd() - it will remove the extra spaces from the string
// let data = prompt('search').toLowerCase().trim()
// if (data === 'mobiles'){
//     console.log('this is mobiles section ');
// }
// else if (data === 'laptops'){
//     console.log('this is laptop section ');
// }
// else if (data === 'clothes'){
//     console.log('this is clothes section ');
// }
// else{
//     console.log('page not found ');
// }

// 12) startswith()
let str5 = 'js is asynchronous in nature'
console.log(str5.startsWith('js '));

// 12) endswith()
console.log(str5.endsWith('re'));

// replace()  - replaces first matching word or charecter
let str6 = 'Promice returns Object Promice'
let str7 = str6.replace("Promice","Array")
console.log(str7);

// replaceAll()  -- replaces ll matching word or charecter
let str8 = str6.replaceAll("Promice","Array")
console.log(str8);

// repeat()
let str9 = '*'
console.log(str9.repeat(5))

//  QUESTIONS
// 1. capitalize the first letter  of the string
let str10 = 'this is a string'
str11 = str10.replace(str10[0],str10[0].toUpperCase());
console.log(str11)

// 2. mask an emal address the input is javascript@gmail.com    output-  java******@gmail.com
let email = 'javascript@gmail.com'
console.log(email.replace('script','******'))

let parts = email.split('@')
let masked = ''
for (i = 0; i < parts[0].length; i++){
    if(i< 4){
        masked += parts[0][i]
    }
    else{
        masked += '*'
    }
}
masked += '@' + parts[1]
console.log(masked)

let a = email.split("@")
let username = a[0].slice(0,4)
let domain = a[1]
let res = username + '*'.repeat(a[0].length-username.length) + '@' + domain
console.log(res)


// 3.mask the adhar number - only last 4 should be visible
let adhar  = '1111 2222 4444'
let part = adhar.split(' ')
masked2 = ''
for(i = 0;i < (part.length)-1; i++){
masked2 += '*'.repeat(part[i].length)
}
masked2 += part[2]
console.log(masked2) 