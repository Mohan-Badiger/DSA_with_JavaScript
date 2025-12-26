function largest(arr) {
    // code here
    let large = arr[0];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large;
}


console.log(largest([4,5,1,3,7,3]));
