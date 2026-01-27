function twoSum(arr, target){
    let arrTwoSum = [];

    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                arrTwoSum.push(i,j)
            }
        }
    }

    console.log(arrTwoSum);
    
}


twoSum([16,8,23,16,4, 5], 9)