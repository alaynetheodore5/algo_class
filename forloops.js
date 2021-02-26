// here is my Array
var myArray = ["APPLE", "BANANA", "PEAR", "MANGO"];

// this is a for loop that will iterate through each item in myArray and print each item
for(i=0; i<= myArray.length-1; i++){
  console.log(myArray[i]);
}

function addition(num1, num2){
  var sum = 0;
  sum += num1 + num2;
  return sum;
}

console.log(addition(2,3));