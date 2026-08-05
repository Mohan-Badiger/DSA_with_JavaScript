//missing item in an array 
const missingNum = (arr) => {
    let sum = 0;
    let n = arr.length + 1;
    let sumOfN = n * (n + 1) / 2;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sumOfN - sum;

}

console.log(missingNum([1, 2, 3, 4, 6]));
