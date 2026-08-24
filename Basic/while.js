function decrease(x) {
    let result = [];
    while (x >= 0) {
        result.push(x);
        x--;
    }
    return result.join(" ");
}

console.log(decrease(5));
