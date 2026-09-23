//swap two numbers (3 ways---   )
//using temprovary variable-------------------------

// let a = 10;
// let b = 20;
// console.log("a = ", a, "b = ", b);

// let c;

// c = a;
// a = b;
// b = c;
// console.log("a = ", a, "b = ", b);

//without using 3rd variable------------------------

// let a = 10;
// let b = 20;
// console.log("a = ", a, "b = ", b);

// a = a+b; // a = 30
// b = a-b; // b = 10
// a = a-b; // a = 20
// console.log("a = ", a, "b = ", b);

//method / way 3 ------------------------------------

// let a = 10;
// let b = 20;
// console.log("a = ", a, "b = ", b);

// [a,b] = [b,a]
// console.log("a = ", a, "b = ", b);

// a = 12.5
// console.log(Math.floor(a))
// console.log(Math.ceil(a)) 


//sum of digits 
//example let digit = 4567;  sum of digit is "4+5+6+7" , 22

let digit = 12345;

let sum = 0;

while(digit > 0){
    let num = digit%10;
    sum = sum + num;
    digit = parseInt(digit/10)
}
console.log(sum);
