function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {  // i=0; 0<4; i++   //i=
    let index = Math.abs(arr[i]) - 1; // 1

    if (arr[index] < 0) {               // 3< 0  false
      duplicates.push(index + 1);
    } else {
      arr[index] = -arr[index];         //3 = -3
    }
  }

  return duplicates;
}

console.log(findDuplicates([2, 3, 4, 1, 2]));

//[2, -3, 1, 2, 3]

