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

// flatten with recursion
function willsFlatten(arr) {
  var results = [];

  function helper(subarr) {
      for(let i=0; i<subarr.length; i++) {
          if(typeof(subarr[i]) === "number") {
              results.push(subarr[i]);
          } 
          else if(Array.isArray(subarr[i])) {
              // call helper function (recursion)
              helper(subarr[i]);
          }
      }
  }
  helper(arr);
  return results;
}

// console.log(flatten([1, [2, 3], 4, [ ] ]));

console.log(willsFlatten([1, [2, 3], 4, [ ] ]));

// Remove array duplicates. Do not alter the original array. Return a new array with the results 'stable' (preserve the original order).
// Given [1, 2, 1, 3, 4, 2] return [1, 2, 3, 4]

function removeDuplicates(array) {
  const arr2 = [];
  for (let i = 0; i < array.length; i++) {
      let exists = false;
      for (j = 0; j < arr2.length; j++) {
      if (array[i] === arr2[j]) {
          exists = true;
          break;
          }
      }
      if (!exists) {
          arr2.push(array[i]);
          }
      }
  return arr2;
  }
console.log(removeDuplicates([1,1,2,3,3,4,4,5,5]));

// Part 2: work 'in place' in the given array. Alter the order if necessary (stability isn't required).
// Given [1, 2, 1, 3, 4, 2] we might return [1, 2, 4, 3].

function removeDupes(arr) {
  for(var i=1; i<arr.length; i++) {
      for(var j=0; j<i; j++) {
          if(arr[i] === arr[j]) {
          arr[i] = arr.pop();
          i--;
          }  
      }
  }
  return arr;
}

// Part 3: work 'in place' and make it 'stable'.

function removeDupes(arr) {
  for(var i=1; i<arr.length; i++) {
      for(var j=0; j<i; j++) {
          if(arr[i] === arr[j]) {
          for(var k=i; k<arr.length-1; k++) {
              arr[k] = arr[k+1]
          }
          arr.pop();
          i--;
          }  
      }
  }
  return arr;
}

// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function rGCF(num1, num2){
  if(num1 === num2){
    return num1;
  } else if(num1 > num2){
    return rGCF(num1-num2, num2);
  } else {
    return rGCF(num1, num2-num1)
  }
}

// console.log(rGCF(5,10));

function greatestCF(a, b){
  if(b<=0){
    return a;
  }
  return greatestCF(b, a%b);
}

// console.log(greatestCF(5,10));

// The Tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant. The tarai function accepts three parameters and is defined as:

// tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
// tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).
function tarai(x, y, z) {
  if (x > y){
    return tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y));
  } else {
    return y;
  }   
}

console.log(tarai(10,2,9));
