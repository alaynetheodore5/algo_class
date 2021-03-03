// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

// given: array, num
function nthToLast(arr, num){
    if(arr.length < num){
        return null;
    }
    var counter = arr.length - num;
    return arr[counter];
}

// console.log(nthToLast([5,2,3,6,4,9,7],3));
console.log(nthToLast([1,2,3,4,5],-1));