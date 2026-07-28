let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
  let stars = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
  console.log(stars);
}
