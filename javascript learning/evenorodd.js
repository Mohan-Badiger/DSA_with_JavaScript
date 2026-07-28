function reArrange(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i] === (n % 2 === 0) && arr[j] === (n % 2 != 0)) {
                console.log(arr[i]);
            } else {
                console.log("wrong");
            }
        }
    }
}

reArrange([3, 6, 12, 1, 5, 8], 6)


// function isEven(n) {
//     return n % 2 == 0
// }
// console.log(isEven(3));
