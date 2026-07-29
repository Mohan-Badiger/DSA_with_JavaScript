function getMinMax(arr) {
    // code here
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return [min, max];
}

console.log(getMinMax([5, 6, 4, 2, 8, 3, 9]));
