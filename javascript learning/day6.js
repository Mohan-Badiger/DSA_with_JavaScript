// largest number in an array

function largest(arr) {
        // code here
        let large = arr[0];
        
        for(let i=0; i <= arr.length; i++){
            if(large < arr[i]){
                large = arr[i];
            }
        }
        return large
    }

console.log(largest([1,2,5,3,20,22,11]));
