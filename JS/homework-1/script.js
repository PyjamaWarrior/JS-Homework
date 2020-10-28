let a1 = 'hello',
    a2 = 'owu',
    a3 = 'com',
    a4 = 'ua',
    a5 = 1,
    a6 = 10,
    a7 = -999,
    a8 = 123,
    a9 = 3.14,
    a10 = 2.7,
    a11 = 16,
    a12 = true,
    a13 = false;

console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
alert(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13);
document.write(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, "<br>");
console.log('====================================');
//======================================================================================================================
a1 = 'bye-bye';
a2 = 'not-owu';
a3 = 'not-com';
a4 = 'not-ua';
a5 = 2;
a6 = 11;
a7 = -99;
a8 = 321;
a9 = 14.3;
a10 = 7.2;
a11 = 61;
a12 = false;
a13 = true;

console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
alert(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13);
document.write(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, "<br>");
console.log('====================================');
// //======================================================================================================================
const num1 = 1,
    num2 = 2,
    num3 = 3,
    str1 = 'one',
    str2 = 'two',
    str3 = 'three';


console.log(str1, str2, str3, num1, num2, num3);
alert(num1 + ' ' + num2 + ' ' + num3 + ' ' + str1 + ' ' + str2 + ' ' + str3);
document.write(str1, str2, str3, num1, num2, num3, "<br>");
console.log('====================================');
//======================================================================================================================
let firstName = prompt("Введите имя:", "Вася"),
    lastName = prompt("Введите фамилию:", "Пупкин"),
    patronymic = prompt("Введите свое отчество:", "Васильевич");

console.log(lastName, firstName, patronymic);
alert(lastName+ ' ' + firstName + ' ' + patronymic);
document.write(lastName, ' ', firstName, ' ', patronymic, "<br>");
console.log('====================================');
// //======================================================================================================================
console.log(lastName + firstName + patronymic);
// //======================================================================================================================
let num4 = +prompt("Enter first number:", "1"),
    num5 = +prompt("Enter second number:", "2"),
    num6 = +prompt("Enter third number:", "3");

console.log(num4, num5, num6);
console.log('====================================');
// //======================================================================================================================
let pr1 = parseInt(prompt("Enter first number:", "1")),
    pr2 = parseInt(prompt("Enter second number:", "2")),
    pr3 = parseInt(prompt("Enter third number:", "3")),
    pr4 = parseInt(prompt("Enter fourth number:", "4")),
    result = pr1 + pr2 + pr3 + pr4;

console.log(result);
console.log('====================================');
//======================================================================================================================
let pr5 = parseFloat(prompt("Enter first number:", "1.1")),
    pr6 = parseFloat(prompt("Enter second number:", "2.1")),
    pr7 = parseFloat(prompt("Enter third number:", "3.2")),
    result2 = pr5 + pr6 + pr7;

console.log(result2);
console.log('====================================');
//======================================================================================================================
let round1 = Math.round(prompt("Enter first number:", "1.3")),
    round2 = Math.round(prompt("Enter second number:", "2.5")),
    round3 = Math.round(prompt("Enter third number:", "3.3")),
    result3 = round1 + round2 + round3;

console.log(result3);
console.log('====================================');
//======================================================================================================================
let prompt1 = parseInt(prompt("Enter first number:", "5")),
    prompt2 = parseInt(prompt("Enter second number:", "2")),
    result4 = Math.pow(prompt1, prompt2);

console.log(result4);
 console.log('====================================');
//======================================================================================================================
let a = 100,
    b = '100',
    c = true,
    d = undefined;

console.log(typeof a, typeof b, typeof c, typeof d);
 console.log('====================================');
//======================================================================================================================
let b1 = 5 < 6,
    b2 = 5 > 6,
    b3 = 5 === 6,
    b4 = 5 >= 6,
    c1 = 10 === 10,
    c2 = 10 >= 10,
    c3 = 10 > 10,
    c4 = 10 < 10,
    c5 = 10 !== 10,
    d1 = 123 === '123',
    d2 = 123 == '123';

console.log(b1, b2, b3, b4);
console.log(c1, c2, c3, c4, c5);
console.log(d1, d2);
