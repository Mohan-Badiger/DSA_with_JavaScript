function targetSum(arr, target) {

    let output = []

    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                output.push(arr[i], arr[j])
            }
        }
    }
    return output;
}

console.log(targetSum([2, 7, 11, 15], 9));
