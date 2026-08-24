let array = [1, 2, 3, 4, 5, 6, 7];

let n = array.length;
let reverse = []

for (let i = n - 1; i >= 0; i--) {
    reverse.push(array[i])
}

console.log(reverse);

