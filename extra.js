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