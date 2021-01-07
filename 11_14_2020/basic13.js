// print the max value in an array
function findMax(arr) {
    if(arr.length == 0) {
        console.log("This array is empty! No max value.");
        return;
    }
    var max = arr[0];
    for(var i = 1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Max value is:", max);
}

// arr = [1,2,3,4,5,6]
// findMax([1,2,3,4,5,6])
// findMax([])

//print the avg value in an array
function findAverage(arr) {
    if(arr.length == 0) {
        console.log("This array is empty! No avg value.");
        return;
    }
    var sum = 0;
    for(var i=1; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log("Average value is:", sum/arr.length);
}
// findAverage([])

// square the values
// arr = [2,4,5] 
// arr = [4,16,25]
function squareValues(arr) {
    for(var i=0; i<arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}
//console.log(squareValues([2,4,5]));

function squareValues2(arr) {
    newArr = [];
    for(var i=0; i<arr.length; i++) {
        square = arr[i] * arr[i];
        // square = square * square;
        newArr.push(square);
    }
    return newArr;
}

console.log(squareValues2([2,4,5]));