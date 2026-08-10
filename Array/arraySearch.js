//Array Search
// Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

const arrySearch = (arr, x) => {
    let arrHas = arr.includes(x)
    // let index = arr.indexOf(x)
    if (arrHas) {
        return arr.indexOf(x)
    } else {
        return -1
    }

}

console.log(arrySearch([10, 20, 30, 40, 50], 20));
