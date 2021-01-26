// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3)=6(or1 * 2 * 3);factorial(5)=120(or1 * 2 * 3 * 4 * 5).

let factorial = (num) => {
  let holder = [];

for(let i =1; i <=num;i++){
  holder.push(i);
}

let math = holder.reduce(
    (acc, currentValue) => acc * currentValue
  );
  return math;
}

// console.log(factorial(5));


// recursive

function fibonacci(num) {
  if (num <= 1) return 1;

  return num * fibonacci(num - 1);
}

// console.log(fibonacci(3));

//

function largerthanY(){
  var numGreater = 0;
  var y= 3;
  var myArr= [1,4,2,6,3,10];
  for(i= 0; i< myArr.length; i++){
      if (myArr[i]> y);
      numGreater++;
  }
  return numGreater;
}
console.log(largerthanY(6));

// fizz buzz
const fizzBuzz = number => {
  let output = [];
  for (let i = 1; i <= number; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output.push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};

console.log(fizzBuzz(5));

// Part One
// function zipArrays(arr1, arr2) {}
// I => zipArrays(['a','b','c'],[1,2,3])
// O => {'a':1, 'b':2, 'c':3}

var arr1=[1,2,3];

var arr2=['a', 'b', 'c', 'd', 'e'];


var myObj = {};

for(var i=0; i<arr1; i++){
    myObj[arr1[i]] = arr2[i]
    console.log('myObj[arr[i]]', arr1)
}

console.log('myObj', myObj);

function NthLargest(arr, n){
  var temp;
  for(var i=0; i<n; i++){
      for(var j=0; j<arr.length-1-i; j++){
          if(arr[j] > arr[j+1]){
              temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
  return arr[arr.length-n];
}

console.log(NthLargest([5, 2, 7, 1, 4, 9], 3));

function changeChange(num){
	var quarters = math.floor(num/25);
	num %= 25;

	var dimes = math.floor(num/10);
	num %= 10;

	var nickels = math.floor(num/5);
	num %= 5;

	var pennies = num;

	var finChange = {
		'q' : quarters,
		'd' : dimes,
        'n' : nickels,
        'p' : pennies
	}
	return finChange;
}
changeChange(123);

function reverseString(oldString){
  var newString = "";
  for(var i=oldString.length - 1; i>= 0; i--){
      newString = newString + oldString[i];
  }
  return newString;
}

console.log(reverseString("hello"));

function isPrime(val) {
  for (var i = 2; i < Math.sqrt(val+1) | 0; i ++){
  if (val % i == 0) {
      return false;
  }
  }
  return true;
} 

// balance point
function balancePoint(arr) {
  var lsum = 0;
  var rsum = 0;
  for(var i =0; i<arr.length; i++) {
      rsum += arr[i];
  }
  for(var i=0; i<arr.length; i++) {
      lsum += arr[i];
      rsum -= arr[i];
      console.log(arr[i]);
      console.log(rsum);
      if(rsum === lsum){
          return true;
      } 
  }
  return false;
}

// console.log(balancePoint([1,3,1,2,2]));

//balance index
function balanceIndex(arr) {
  var lsum = 0;
  var rsum = 0;
  for(var i =0; i<arr.length; i++) {
      rsum += arr[i];
  }
  for(var i=0; i<arr.length; i++) {
      rsum -= arr[i];
      // console.log(arr[i]);
      // console.log(rsum);
      if(rsum === lsum){
          return i;
      } 
      lsum += arr[i];
  }
  return -1;
}

console.log(balanceIndex([1,3,1,2]));

// Flatten a given array, eliminating nested and empty arrays. Do not alter it; return a new array retaining order.

// Given: [1, [2, 3], 4, [ ] ] return [1, 2, 3, 4]

function flatten(arr) {
  let newArr = [];
  for(let i=0; i<arr.length; i++) {
      if(typeof(arr[i]) === "number") {
          newArr.push(arr[i]);
      } 
      else if(Array.isArray(arr[i])) {
          // newArr = [...newArr, ...arr[i]]
          for(let j=0; j<arr[i].length; j++) {
          newArr.push(arr[i][j]);
          }
      }
  }
  return newArr;
}
