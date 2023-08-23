//Assignment-4  for the week-5 is:

// Q-1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

// Q-1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let array = [2, 3, 4, 5, 6, 7];
let indexValue = 2;
let valueToBeInserted = 10;
function ArrayWithIndexAndValue(array: number[], index: number, value: number) {
  array.splice(index, 0, value);

  return array;
}
console.log("Splice 10 on index#2 = "+ArrayWithIndexAndValue(array,indexValue,valueToBeInserted))

// Output -------------------------------------
// Splice 10 on index#2 = 2,3,10,4,5,6,7


// Q-2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation


// Q-3 - Write a program that uses a while loop to print the first 25 integers.
function functionFirst25Integers() {
  let count = 1;

  while (count <= 25) {
    console.log(count);
    count++;
  }
}

console.log(functionFirst25Integers());



// Q-4 - Write a program that uses a while loop to print the first 10 even numbers.

let count = 2; 

while (count <= 20) {
  if (count % 2 ==0)  
  console.log( 'The first 10 even number are = ', count);
  count++
}



// Q-5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.


function factorial(num:number) {
  let integers=1
  while (num>0) {
    integers*=num;
    num--; 
  }
  return integers
  
}
var num:number = 4;
console.log( "The value of factorial 4 is = ",factorial(num));

// Output -------------------------------------
//The value of factorial 4 is =  24




// Q-6 - Write a program having a5 array of numbers if the number is negative it should remove the negative number from the array.


const Array5 = [0, 1, -2, 3, 4, 5, -6, 7 ];

function removeNegativeNumbers(array:number[]) {
    return array.filter((num) => num > 0)
}

console.log(removeNegativeNumbers(Array5));

// Output -------------------------------------
//  [ 1, 3, 4, 5, 7 ]




// Q-7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.


const numberArray = [0, 1, 2, 3, 4, 5];

function SumArrayNumbers (array:number[]) {

    let sum = 0
    let index = 0

    while(index< array.length){
        sum += array[index]
        index++
    }
    return sum
}

console.log("sum of all the numbers in the array is = "+ SumArrayNumbers(numberArray));

// Output -------------------------------------
//  sum of all the numbers in the array is = 15



// Q-8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.



let celsius = [0, 10, 20, 30, 40];
let fahrenheitList = [];

let i = 1;
while (i < celsius.length) {
  let fahrenheit = (celsius[i] * 9) / 5 + 32;
  fahrenheitList.push(fahrenheit);
  i++;
}

console.log("Celsius to Fahrenheit List = "+fahrenheitList); 

// Output -------------------------------------
// Celsius to Fahrenheit List = 50,68,86,104




