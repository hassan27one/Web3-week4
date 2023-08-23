"use strict";
// Q-1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let array = [2, 3, 4, 5, 6, 7];
let indexValue = 2;
let valueToBeInserted = 10;
function ArrayWithIndexAndValue(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
console.log("Splice 10 on index#2 = " + ArrayWithIndexAndValue(array, indexValue, valueToBeInserted));
// Output -------------------------------------
// Celsius to Fahrenheit List = 50,68,86,104
