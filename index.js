/**
 * Make a function that will take an array as a parameter and a single integer n. 
Each element in the array will be divided by n. Get each element factorial 
number in the array. Find out the largest number.
 */


// first the main function that takes an array and divide it with n
// then calling the getFactorial function for getting factorial of number
// then returning the largest number with Math.max
function getNum(params, n) {
    const x = params.map(i => i/n)
    const getLargeNum = getFactorial(x); 
    return Math.max(...getLargeNum);
}

function getFactorial(nums) {
    return nums.map(num => {
        if(num < 0) return 1;
            if(num === 0) return 1;
            else return (num * factorial(num -1)) 

    })    
}

getNum([1,4,7,16], 4)