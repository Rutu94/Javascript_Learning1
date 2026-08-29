//Question1//
console.log(1 +2 +"3"); // 33
console.log("5"-2+"3"); // 33
console.log(false == "");//true
console.log("hellow"|| "world");// hellow ---operator evalueate left to right 
console.log(0 && "javascript");// 0 --- operator evalueate left to right 
console.log(+"42"+ +true);//43 --+"42" become number
console.log(null == undefined);//true
console.log(NaN === NaN);//false

let a =1 ;
let b = a++ + a;
console.log(b);//1+2 = 3

let x = 10 ;
if (true){
let x =20;
x+=5;
}
console.log(x); // 10

var y=5;
if (true){
    var y =10;
}
console.log(y);//10

let count ="5" ;
count -- ;
console.log(count +2);//6 The decrement operator (--) forces numeric type casting. 
                       //The string "5" instantly converts into the number 5, 
                       // then decrements down to the number 4. Now that count is a true number, 4 + 2 performs basic addition to yield 6.5. Correct Answer: C) false, true💡 Explanation: Strict equality (===) checks both value and type without changing anything. Since 0 is a number and false is a boolean, it outputs false. Loose equality (==) forces casting. It converts the string "0" to the number 0, matching the numeric side to output true.6. Correct Answer: A) 0💡 Explanation:score starts at 10.--score is a prefix operator. It decrements score immediately to 9 and returns 9.The expression is now 9 - score--. At this moment, score is 9.score-- is a postfix operator. It returns the current value 9 to the expression, and then drops score to 8 in memory.The math calculates as 9 - 9, which equals 0.7. Correct Answer: C) TypeError💡 Explanation: Variables created with const cannot be reassigned. The expression max++ is shorthand for max = max + 1. This re-assignment attempt on a constant immediately crashes the script with a TypeError.8. Correct Answer: B) "true1"💡 Explanation: Template literals convert data explicitly into strings. ${value} evaluates to the string "true". When you add a number using the + operator to any string, JavaScript triggers string concatenation, sticking the items together to produce "true1".Would you like to build a quick interactive quiz out of these specific rules, or do you want to move on to how logical operators (&&, ||, ??) interact with variable reassignment?

let num =0;
let str =0;s
let bool =false;

console.log(num === bool);//false
console.log(num==str); //true

let score =10 ;
let finalscore = --score - score-- ;
console.log(finalscore);//9-9 =0

const max= 100;
max ++;
console.log(max);//type  error  -- re-assignment attempt on a constant immediately crashes the script with a TypeError.

let value = true ;
let outcome =`$(value)+ 1`; // true1-------

//Template literals convert data explicitly into strings. 
// ${value} evaluates to the string "true". When you add a number using the + operator to any string, JavaScript triggers string concatenation, sticking the items together to produce "true1".



let r =1 ;
y = r++ + ++r * r++;
console.log(y);// 1+3*3 = 10


//---------------Temporal dead ZONE -------------//
 //Variables declared with let and const are hoisted, but they are not initialized. 
 // The period between entering the scope and the actual line of declaration is called the Temporal Dead Zone (TDZ). 
 // Because let ak = 10; exists inside the function, the engine shadows the outer ak. 
 // Attempting to access a on the line above its declaration throws a ReferenceError.

let ak = 5;
function test() {
  console.log(ak);
  let ak = 10;
}
test(); // ReferenceError: Cannot access 'ak' before initialization



let val = "10";
val = +val++ + +val;
console.log(val); // 10+11 = 21



(function() 
{
  let safe = (unsafe = 100);
})
();

console.log(typeof safe, typeof unsafe); // undefined and number 

//flag starts as true.In !flag++, 
// the postfix operator runs first. It returns true, 
// then instantly increments flag into a number: Number(true) + 1 = 2.
// The logical NOT operator ! is then applied to the returned true, 
// making it false.The expression is now false + -flag. In memory, flag is 2. 
// So -flag becomes -2.The binary + triggers numeric coercion on the boolean: 
// Number(false) is 0.0 + (-2) yields -2

let flag = true;
let result = !flag++ + -flag;
console.log(result); // ----

let score1 = 5;
{
  score1 = 10;
  function score1() {}
  score1 = 20;
}
console.log(score1);//5



let str3 = "   "; //empty string is falsy value  false =0 
let val3 = 10;
console.log(++str3 + val3--);//11

let active = "0"; 
let status = !active++; //active++ = 0 and active =1 !active++ = true 
console.log(status, active); //true 1

let a5 = 1;
{
  a5 = a5 + 1;
  let a5 = 5;
}
console.log(a5); // ReferenceError: Cannot access 'a5' before initialization


"use strict";
function check() {
  let result = 10;
                       // Note the implicit global attempt
  (target = 20);       // ReferenceError: target is not defined
  return result + target;
}
console.log(check());


//Function parameters evaluate from left to right in their own hidden block scope. 
// When evaluating x = y, the engine searches for y within the parameter scope. 
// It finds y further down the line, meaning y exists but is currently in its Temporal Dead Zone. 
// Trying to read y to assign it to x instantly trips the TDZ protection and crashes.

function calculate(x = y, y = 2) {
  return x + y;
}
calculate();


let sym = Symbol("id"); 
console.log(sym + "");  //TypeError: Cannot convert a Symbol value to a string



var data = 1;
{
  var data = 2;
  let data = 3;  // SyntaxError: Identifier 'data' has already been declared
}
console.log(data);


let value6 = 5n;
console.log(+value6); // TypeError: Cannot convert a BigInt value to a number

let x = x;
console.log(x); //ReferenceError: Cannot access 'x' before initialization

let a7 = 1, b7 = 2;
a7 = (b7 = a7) + ([a7, b7] = [b7, a7], 0);
console.log(a7, b7);