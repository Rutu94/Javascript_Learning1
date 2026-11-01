/*1. Create a function:

function multiply(a, b) {
    // return result
}
Store the returned value:
let result = multiply(5, 4);
console.log(result);
Question: Why should we use return instead of directly using console.log() inside the function?*/

function multiply (a ,b) {
     return  a*b;
   
}
let result = multiply(5,4);
console.log(result);

//Why should we use return instead of directly using console.log() inside the function?////

function multiply (a ,b) {
     console.log("multiplication is "+ a*b);

}
 multiply(5,4);



//Create a function greet() that prints "Hello JavaScript".

function greet() {
    console.log("Hello JavaScript");
 
}
greet ();

//Create a function subtract(a, b) that returns the difference.
function subtract(a,b) {
    return a-b;
}
let difference = subtract(100,32);
console.log(difference);

//Create a function displayName(name) that prints the given name.

function displayName(name) {

    return name ; 
}
let name = displayName ("smita")
console.log("Display name  " + name);

//without retrn 

function displayName(name) {
    console.log("displayname is  " + name ); 
}
displayName("smita");


//Create a function square(num) that returns the square of a number.

function square(num) {
    return num*num;
}
let square1 = square(4);
console.log(square1);

//Create a function cube(num) that returns the cube of a number.
function Cube (num) {
    return num*num*num;
}
let cube1 = Cube(4);
console.log(cube1);

//Create a function checkEvenOdd(num) that returns "Even" or "Odd".

function checkEvenOdd(num) {

    if (num % 2 === 0){
        console.log("Number "+ num  + " is even");
        
    }
    else{
        console.log("Number "+ num  + " is odd");
    }
    
}
checkEvenOdd (46);
//Create a function checkPositiveNegative(num) that returns "Positive", "Negative", or "Zero".

function checkPositiveNegative (num) {

    if(num === 0){
         console.log("Number "+ num  + " is zero");
                 }
    else if (num>0)
    {
    console.log("Number "+ num  + " is positive");
    }
     else

        {
      console.log("Number "+ num  + " is negative");
        }

}

checkPositiveNegative (-76);
//Create a function that accepts firstName and lastName and returns the full name.
function firstName(name) { 
    return name; 
}
function lastName(name) {
    return name ;
    
}

let fname =firstName ("smita");
let Lname = lastName("Jagdale");

console.log("Full Name is"+" "+ fname +" "+ Lname);


//Create a function that accepts name and age and returns a sentence containing both.
let emp = (name ,age) => {
    return `My name is ${name} and I am ${age} years old.`;
}
let result1 = emp ("smita",32);
console.log(result1);


/*Create a function that accepts three numbers and returns the largest number.
Create a function that accepts three numbers and returns the smallest number.
Create a function that accepts price and quantity and returns the total amount.
Create a function that accepts salary and returns a 10% bonus.
Create a function that accepts marks and returns:
"Pass" if marks >= 40
"Fail" otherwise.
Create a function that accepts age and returns whether a person is eligible to vote.
Create a function that accepts a number and returns whether it is divisible by 5.
Create a function that accepts a number and returns its factorial
----------------------------------------------------------
Create a function that accepts a string and returns its length.
Create a function that accepts a string and returns the first character.
Create a function that accepts a string and returns the last character.
Create a function that accepts a string and converts it to uppercase.
Create a function that accepts a string and converts it to lowercase.
Create a function that checks whether a string contains "JavaScript".
Create a function that checks whether a string starts with "TC".
Create a function that checks whether a string ends with "PASS".
Create a function that accepts a string and returns the reversed string.
Create a function that accepts a string and counts the number of vowels.
Create a function that checks whether a string is a palindrome.
Create a function that counts how many times a given character appears in a string.
Create a function that removes all spaces from a string.
Create a function that extracts the domain from an email address.
Create a function that replaces all spaces in a string with "-".
-----------------------------------------------------------------------
Create a function that accepts an array and returns its length.
Create a function that accepts an array of numbers and returns the sum.
Create a function that accepts an array and returns the largest number.
Create a function that accepts an array and returns the smallest number.
Create a function that accepts an array and returns only even numbers.
Create a function that accepts an array and returns only odd numbers.
Create a function that checks whether a given value exists in an array.
Create a function that returns the first element of an array.
Create a function that returns the last element of an array.
Create a function that reverses an array.
Create a function that removes duplicate values from an array.
Create a function that counts how many times a given value occurs in an array.
Create a function that accepts an array of strings and returns the longest string.
Create a function that accepts an array of strings and returns the shortest string.
Create a function that accepts an array of numbers and returns the average.
-------------------------------------------------------------
Create a function that accepts an employee object and returns the employee's name.
Create a function that accepts an employee object and returns the employee's salary.
Create a function that checks whether an employee's salary is greater than 50000.
Create a function that calculates an employee's bonus based on salary.
Create a function that accepts a student object and returns "Pass" or "Fail" based on marks.
Create a function that accepts a product object and returns its total price based on price and quantity.
Create a function that checks whether an employee has "JavaScript" in their skills array.
Create a function that returns the number of skills an employee has.
Create a function that accepts an object and returns all its keys.
Create a function that accepts an object and returns all its values.