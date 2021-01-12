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