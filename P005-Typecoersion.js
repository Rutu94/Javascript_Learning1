/* one type of data conver into other type 
type casting in JS applicable for 3 type  string ,number ,boolean 


implicit casting 
JS Engine will take conversion 
also called type coersion

Explicit casting 
it is manual conversion
it is we can implement using constructor 
number ()
string ()
boolean()


Note - data should be conversion comapatible 

1,truthy value 
Any true value in boolean context we called truthy
eg.any non zero number ,non emppty string

2.falsy value 
Any false value in boolean contex called  falsy value 
five value are there 

eg. 0 '' (empty string ),NaN,null,false undefined 

*/

/*
when an expression combine  number and boolean vALUE WITH  + OPERATOR 
THEN NUMBER AND BOOLEAN VALUE automatically converted into string is performed 

*/

let a = "hellow" +100 +true;
console.log(a); //hellow100true type  100 and 2 both coerses to string 
console.log(typeof a); //Strig 

let b = 100 +25+ "hi";
console.log(b);//125hi --- 125 coersced into string 
console.log(typeof b); string 

let c =100 +true +"100";
console.log(c); //101100  ----101 coerced into  string 
console.log(typeof c); //String 

console.log(10 +"100"+20+10);//101002010

console.log(true + 30);//31

console.log(true + "30");//true30

console.log(200 +false+ "50"+false);//20050false

/*   NOTE -- Number conversion - 
when an expression combine combine string number and boolean value with (-,/,*  %) operator
 then string converted string and boolean value automatically converted into number only if they are compatible 

*/

let X= "hellow" -100;
console.log(x); //NaN
console.log(typeof x); // number 

let d ="100"/10;
console.log(d);// 10 string converted into number 
console.log(typeof d); // number

// expression with boolean and number   --- number conversion

console.log( true + 50); // 51
console.log(ture *10); //10  (true value 1)
console.log(false* 2); // 0

let e= 100 - "50"/true ; // 50 coeseed into number 
console.log(e);//50
console.log(typeof e); //number 


let f = 90 -"30 "+ true;// 30 and true coerse  into number (subtraction)
console.log(f);//61 (90-30+1)
console.log(typeof e); //number 

let g = "78"-15+100+"56" // not concatiation (subtractoion) 78-15+100 +string 
console.log(g);// 165356
console.log(typeof g); //string

/*Explicit conversion ___  */

//-------Number constructor----------
//string conver number 

let S1= "1234";
console.log(typeof S1);//string 

//------------------string convert number -------------------------------------------//

let stringToNumber =Nmuber(S1);
console.log(stringToNumber); 1234
console.log(typeof stringToNumber); //number 


let j = "100";
let y = Number(j); 

console.log(j); //100
console.log(typeof j); //string 
console.log(y); //100
console.log(typeof y); //number 


let name ="smita";
let name1 =Number(name);
console.log(name); //smita
console.log(name1); //NaN
console.log(typeof name1); //number 


let num2 = "true";
let num3 =Number(num2);
console.log(num2); //true
console.log(typeof num2); //string
console.log(num3); //NaN ----true conside as string so not a number 
console.log(typeof num3); //number



// -------------boolean to number conversion ------------------------------//


console.log(Number(true));//1
console.log(Number(false)); //0

let num =90 ;
console.log(num); //90
console.log(typeof num);// number 

//number to string conversion
let numTOstring = String(num);
console.log(String(num));
console.log(typeof numTOstring);

// -------------boolean to  string conversion ------------------------------//

let i =true ;
let bolleanToString =String(i);
console.log(i);//true
console.log(typeof i);//boolean
console.log(bolleanToString);//true
console.log(typeof bolleanToString);//string


let h = false;
let t =String(h);
console.log(h);// false 
console.log(typeof h); Boolean
console.log(t);// false
console.log(typeof t);// string




















































