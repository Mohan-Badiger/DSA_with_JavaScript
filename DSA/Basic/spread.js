let number = [1, 2, 3, 4, 5, 6, 7, 8]

let i = 0;
let j = number.length - 1
let temp;

while (i < j) {
    temp = number[i],
        number[i] = number[j]
    number[j] = temp;

}