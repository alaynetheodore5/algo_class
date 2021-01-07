//ALGORITHM BASICS.
function add(num1, num2){
    console.log("summing");
    var sum = num1 + num2;
    return sum;
}
console.log(add(1,2))

function printNum(num) {
    console.log(num);
}
printNum(10)


function height(num){
    var childHeight = num;
    if(childHeight > 52){
        console.log("get on that ride");
    }
    else {
        console.log("sorry kiddo, next year");
    }
}
height(60)



function pop(arr,i){
    for(var i = 1; i < arr.length; i++){
        arr[i]
    }
}
pop([1,2,3,4],3)
function toFive() {
    var count = [];
        for (var num = 1; num <=5; num ++){
        count.push(num);
        }
    return count;
}
console.log(toFive());

function toFive() {
    var count = [];
        for (var num = 1; num <=5; num ++){
        count.push(num);
        }
}
toFive();

function oddArray1to255() {
    var oddArray = [];
        for (var num = 1; num <= 255; num += 2) {
        oddArray.push(num);
        }
    return oddArray;
}
console.log(oddArray1to255());


// Print 1-255
// Print all the integers from 1 to 255.
function print1to255()
    {
    var num = 1;
    //starting num at 1
        while (num <= 255) {
            //initalization & condition checking
            //while  num is less than 255
        console.log(num);
        //log num
        num++;
        //increment by 1;
    }
}
print1to255()

function int(){
    var i = 2000;
        while (i <5281){
            console.log(i)
            i++;
        }
}
int()
// Print Sum 0-255
// Print integers from 0 to 255, and the sum so far.
function printSum1to255()
{
    var sum = 0;
    //set sum to be 0
    for (var num = 0; num <= 255; num++) {
        //start for loop off at 0; run until 255; increment by 1;
    sum = sum + num;
    //add num to sum everytime we hit this
    console.log("New number:", num, "Sum:", sum);
        }
    }
printSum1to255()


// Find and Print Max
// Print the largest element in a given array.
function printArrayMax(arr)
    {
        if (arr.length == 0) {
            console.log("Empty array, no max value.");
            return;
            //of array is empty return empty array
        }
        var max = arr[0];
        //set max to be the value of index 0
            for (var i = 1; i < arr.length; i++) {
                //start for loop off at index 1; run through entire length of array; increment by 1;
                if (arr[i] > max) {
                    //if the value of the index we are on is greater than what max is currently
                    max = arr[i];
                    //set max to be that value
                }
            }
console.log("Max value is:", max);
}
printArrayMax([1,2,3,4,5,6]);

// Print Odds 1-255
// Print all odd integers from 1 to 255.
function printOdds1to255() {
    var num = 1;
    //start with value of 1
        while (num <= 255) {
            //run until num = 255
        console.log(num);
        //console the num
        num = num + 2;
        //increment by two to keep it odd
    }
}
printOdds1to255()


// Iterate and Print Array
// Print all values in a given array.
function printArrayValues(arr) {
    for (var index = 0;index < arr.length;index++) {
        //start for loop off at index 0; run through entire array length; incriment by 1;
        console.log("array[", index, "] is equal to", arr[index]);
        // index = what index position we are currently on arr[index] = the value of that index
    }
}
printArrayValues([1,2,3,4,5,6])

// Get and Print Average
// Analyze an array’s values and print the average.
function printArrayAverage(arr) {
    if (arr.length == 0) {
        console.log("Empty arr, no average val");
        return;
        //if array is empty return empty array
        }
        var sum = arr[0];
        //set sum to be index 0 
            for (var idx = 1; idx < arr.length; idx++) {
                //start for loop off at index 0; run the entire array length; increment by 1;
            sum += arr[idx];
            //everytime we hit this we are adding that index to the sum
            //add add values together
        }
    console.log("Average value is:", sum / arr.length);
    //average is the sum divided by the array length
}
printArrayAverage([1,2,3,4,5,6,7])


// Array with Odds
// Create an array with odd integers from 1-255.
function oddArray1to255() {
    var oddArray = [];
    //make an empty array
        for (var num = 1; num <= 255; num += 2) {
            //for loop starting at 1; run till 255; increment by 2;
        oddArray.push(num);
        //push number into the empty array we created
        }
    return oddArray;
}
console.log(oddArray1to255());


// Greater Than Y
// Count and print the number of array values less than a given Y.
function numGreaterThanY(arr, y) {
    var numGreater = 0;
    // set numGreater to be 0
        for (var idx = 0; idx < arr.length; idx++) {
            //start for loop off at index 0; run through entire length of array; incriment by 1;
            if (arr[idx] > y) {
                //if the index value we are on is greater than y
            numGreater++;
            // add count to numGreater
            }
        }
    console.log("%d values are greater than %d", numGreater, y);
}
numGreaterThanY([1,3,5,6,7],3)

function largerthan(){
    var numGreater = 0;
    var y= 3;
    var myArr= [1,4,2,6,3,10];
    for(i= 0; i< myArr.length; i++){
        if (myArr[i]> y);
        numGreater++;
    }
    console.log(numGreater);
}
largerthan()



// Print the largest element in a given array.
function printMin(arr)
    {
        if (arr.length == 0) {
            console.log("Empty array, no min value.");
            return;
            //of array is empty return empty array
        }
        var min = arr[0];
        //set max to be the value of index 0
            for (var i = 1; i < arr.length; i++) {
                //start for loop off at index 1; run through entire length of array; increment by 1;
                if (arr[i] < min) {
                    //if the value of the index we are on is greater than what max is currently
                    min = arr[i];
                    //set max to be that value
                }
            }
console.log("Min value is:", min);
}
printMin([1,2,3,4,5,6]);



// Max, Min, Average
// Given an array, print max, min and average values.
function maxMinAverage(arr) {
    if (arr.length == 0) {
        console.log("Null arr, no min/max/avg");
        //if the array is empty, print null.
        return;
        }
        var min = arr[0];
        var max = arr[0];
        var sum = 0;
        // set min, max, & avg  to all be the index of 0. (so we have a starting point to compare)
            for (var idx = 1; idx < arr.length; idx++) {
                // start for loop at index 1; run through the length of array; incriment by 1;
                if (arr[idx] < min)
                //if the index we are on is less than what we have min set to, 
                {
                min = arr[idx];
                //change min to that index.
                }
            if (arr[idx] > max) {
                //if the index we are one is more than what we have max set to
            max = arr[idx];
            // change max to that index.
        }
        sum += arr[idx];
        // add all index together
    }
console.log("Max:", max, " Min:", min);
console.log("Avg value:", sum / arr.length);
// equate average by dividing the sum by the length of array
}
maxMinAverage([10,20,1,60,4,30])


// Square the Values
// Given an array, square each value in the array.
function squareArrVals(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        //start for loop off at index 0; run through the array length; incriment by 1;
        arr[idx] *= arr[idx];
        //change the index we are on to be the value of itself times itself;
        }
    return arr;
}
console.log(squareArrVals([10,2,3,4,5]));


// Zero Out Negative Numbers
// Set negative array values to zero.
function setNegsToZero(arr)
    {
    for (var idx = 0; idx < arr.length; idx++)
    //start for loop at index 0; run as long as the array; increment by 0;
        {
        if (arr[idx] < 0)
        //if the index we are on is less than 0 (making it a neg. number)
            {
            arr[idx] = 0;
            // then replace that index with 0
            }
        }
    return arr;
}
console.log(setNegsToZero([-1,2,-3,4]));

// Shift Array Values
// Shift array values: drop the first and leave '0' at end.
function arrShift(arr)
    {
    for (var i = 1; i < arr.length; i++)
    // start for loop off at index 1; run as long as the array length; incremint by 1;
        {
        arr[i - 1] = arr[i];
        // replace the index before the one we are at with the one we are on.
        // (the shift)
        }
        arr[arr.length - 1] = 0;
        //after for loop is over make the last index 0.
    return arr;
}
console.log(arrShift([1,2,3,4,5]));


// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.

function numToStr(arr)
    {
        for (var idx = 0; idx < arr.length; idx++)
        //starting for loop off at index 0 of array; running through the entire length of array' increment by 1;
        {
            if (arr[idx] < 0)
            // if index of arr is < 0 (making it a negative number)
            {
            arr[idx] = "Dojo";
            // then replace that index of array with the word Dojo
            }
        }
        return arr;
    }
console.log(numToStr([1,-2,5,-1]));

