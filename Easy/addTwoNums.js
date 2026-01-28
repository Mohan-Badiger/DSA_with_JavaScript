// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// const l1 = [1,2,3];
// const l2 = [4,5,6];

// const reverseArray1 = l1.reverse()
// const reverseArray2 = l2.reverse()

// const num1 = parseInt(reverseArray1.join(''),10);
// const num2 = parseInt(reverseArray2.join(''),10);

// const addNum = num1+num2

// const output = Array.from(String(addNum), Number);

// console.log(output);


var addTwoNumbers = function(l1, l2) {

    const reverseArray1 = l1.reverse()
    const reverseArray2 = l2.reverse()

    const num1 = parseInt(reverseArray1.join(''),10);
    const num2 = parseInt(reverseArray2.join(''),10);

    const addNum = num1+num2

    
    const semioutput = Array.from(String(addNum), Number);
    
    const output = semioutput.reverse()

    return output
    
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));






