//second largest in an array

function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargest([6, 1, 2, 4, 8, 7]));
