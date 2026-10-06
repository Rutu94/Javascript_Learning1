/*
String 
==========
- String is collection of characters
-In Js string is premitive data type and Predefined Immutable object
Strings are immutable once we declare we cannot modify the value, but if we modify
then in Js engine it will create new object

/ In JavaScript, strings do not have a built-in reverse() and  join  method. it is avaiavle in  arrays, 
// which you can reverse using array.reverse(), strings are immutable and don’t provide that directly.
// but we can use in combination with string method split  bcz it return array 
//let st2= str.reverse -----  not working 
//str.split().revers() or str.split().join() or str.split().join().reverse () will work 
//here split convert it into array the we can use reverse or any array metode on that returning array .

"Jay"--->['J','a','y']
index      0,  1,  2

/*
Method	                 Main Use
length----------------------String length
charAt()--------------------Character at index
at()------------------------Character/index access
toUpperCase()---------------Uppercase
toLowerCase()---------------Lowercase
includes()------------------Check text
startsWith()----------------Check beginning
endsWith()------------------Check ending
indexOf()-------------------Find first index
lastIndexOf()---------------Find last index
search()----- --------------Search using regex
slice()---------------------Extract portion
substring() --------------- Extract portion
substr()--------------------Legacy extraction
concat()--------------------Combine strings
trim()----------------------Remove both-side spaces
trimStart()-----------------Remove starting spaces
trimEnd()-------------------Remove ending spaces
replace()-------------------Replace text
replaceAll()----------------Replace all occurrences
split()---------------------String → Array
padStart()------------------Add padding at beginning
padEnd()--------------------Add padding at end
repeat()--------------------Repeat string
String()--------------------Convert to string
toString()------------------Convert to string

*/

let fname="Jay";
console.log(fname);
console.log(typeof fname);//string
//fname[2]='m';//TypeError: Cannot assign to read only property '2' of string 'Jay'//

fname=fname+"Nigade";
console.log(fname);

fname="Sarang";
console.log(fname);

//-----------------------------property:length------------------------------
let ss1="Hello All";
console.log("Total characters are: "+ss1.length);//9

//---------------------------String methods-------------------------------
//1.string conversion: toLowerCase() and toUpperCase()
console.log(ss1.toLowerCase());
console.log(ss1.toUpperCase());

//---------------------2.String equality (===)--------------------------
console.log("Facebook" === "Facebook");//true
//console.log("Facebook" == "Facebook");//true

//-----------------3.includes():search for substring--------------------------------
let ss2="Playwright is webui and api testing framework.";
console.log("search for webui?: "+ss2.includes("webui"));//true
console.log("Search for Selenium?: "+ss2.includes("Selenium"));//false

//----------------------4.startsWith('prefix value')-------------------------------
console.log("serch string starts with Playwright?: "+ss2.startsWith('Playwright'));//true
console.log("serch string starts with Play?: "+ss2.startsWith('Play'));//true
console.log("serch string starts with wright?: "+ss2.startsWith('wright'));//false
console.log("serch string starts with P?: "+ss2.startsWith('P'));//true


//--------------------5.endsWith('suffix value')-------------------------------------
console.log("serch string ends with framework?: "+ss2.endsWith('framework.'));//true
console.log("serch string ends with work?: "+ss2.endsWith('work.'));//true
console.log("serch string ends with frame?: "+ss2.endsWith('frame'));//false
console.log("serch string ends with k?: "+ss2.endsWith('k'));//false
console.log("serch string ends with .?: "+ss2.endsWith('.'));//true

//-------------------------------------trim()---------------------------------------------------------
//trim()  <span>   Cart  </span>: to ignore white space before and after string use trim()
//Removes the leading and trailing white space and line terminator characters from a string.
let ss3="     welcome All    ";
console.log(ss3);
console.log(ss3.trim());

//scenario: calculate actual length
let toolName="   Playwright Training   ";
console.log(toolName.length);//25 including space
console.log(toolName.trim().length);//19

//-----------------------------------------------------------------------------------------
//charAt(index):string : return character from specified index
let ss4="Postman is used for API testing! P";
console.log("character at 0 th position: "+ss4.charAt(0));//P
console.log(ss4.length);//32

console.log("character at 16th position: "+ss4.charAt(16));//f
console.log("Character at wrong index position: "+ss4.charAt(32));//empty string

//---------------------------------------------------------------------------------------------
//indexOf('character'):index number
console.log("index of charcater u?: "+ss4.indexOf('u'));
console.log("index of P?: "+ss4.indexOf('P'));//0
//second occurrence
console.log("index of second occurrence of P?: "+ss4.indexOf('P',1));
console.log("index of Third occurrence of P?:" +ss4.lastIndexOf('P'));
//--------------------------concat()-----------------------------------------------------------

let ss5="Hey";
let ss6="Hello how are you?";
console.log(ss5+" "+ss6);
console.log(ss5,ss6);
console.log(ss5.concat(" "+[ss6,ss4]));
//--------------------------------------------------------------------------------------------
//replace() - replace  first match only 
// and replaceAll() - replace all ,matches 
//Replaces text in a string, using a regular expression or search string.

let ss7="Playwright is Automation tool and Playwright is Automation Framework";
console.log(ss7);
console.log(ss7.replace("Playwright","*********")); //********* is Automation tool and Playwright is Automation Framework


//Replace all instances of a substring in a string, using a regular expression or search string.

console.log(ss7.replaceAll("Automation","Testing")); //Playwright is Testing tool and Playwright is Testing Framework
//--------------------------------------------------------------------------------------------------------
//substring()
console.log(bill.substring(7));
//------------------------------------------Reverse Methode ----------------------------------------------------------
//how to reverse any string 
let s1="Playwright with Javascript 123";
console.log(s1);

let result="";

for(let i=s1.length-1;i>=0;i--)
{
    result=result+s1.charAt(i);
}

console.log(result);



//--------------------------------------------------------------------------
//Split 
 let name = " Smiata , RAj ,ravi,amar, mukesh ";
 let output = name.split(",");
 console.log(output);

 //String seperated by  ,and limit 3 
 let output2 = name.split(",", 3)
 console.log(output2);


let date="April 2026";
let month=date.split(" ")[0];
let year=date.split(" ")[1];
console.log(month);
console.log(year);


//split(RegExp/Pattern):string[]
let toolList="Selenium,Appium,Cypress,Postman,Playwright";
console.log(toolList);
let list=toolList.split(",");
console.log(list);

console.log("------");
console.log(list[4]);//Playwright


let bill="your total amount is 5000";
let data=bill.split(" ")[4];
console.log(typeof data);//string
//string into number
let amount=Number(data);
console.log(typeof amount);//number

//The string "JavaScript###Java###Python" contains "###" as separators.
//split("###") tells JavaScript to cut the string wherever "###" appears.

let data1 = "JavaScript###Java###Python";

let result1 = data1.split("###");

console.log(result1);
 

// Reverse with methods split()+reverse()+join()
let str = "Hello World";
let st1 = str.split("");
console.log(st1);
//------------------------- Important points -------------------------------------------------
// In JavaScript, strings do not have a built-in reverse() and  join  method. it is avaiavle in  arrays, 
// which you can reverse using array.reverse(), strings are immutable and don’t provide that directly.
// but we can use in combination with string method split  bcz it return array 
//let st2= str.reverse -----  not working 
//str.split().revers() or str.split().join() or str.split().join().reverse () will work 
//here split convert it into array the we can use reverse or any array metode on that returning array .

let reversed = str.split("").reverse().join("");
console.log(reversed);
console.log(str);
console.log(str.split("").reverse().join(""));



/*-----------------------Perform all of these:

Remove leading/trailing spaces.
Count total characters.
Count words.
Find first "JavaScript".
Find last "JavaScript".
Count "JavaScript" occurrences. // 
Replace only the first "JavaScript" with "Python".
Replace all "JavaScript" with "Python".
Extract "powerful".
Convert the complete string to uppercase.
Convert it to an array of words.
Find the longest word.
Find the shortest word.
Reverse the complete string.
Check whether "Python" exists.
hint - 

trim()       → removes beginning/end whitespace
split(" ")   → splits using a normal space
split(/\s+/) → splits on one or more whitespace characters
length       → counts characters for String / elements for Array
*/


let tex = "  JavaScript is JavaScript and JavaScript is powerful  ";

console.log(tex.trim());
console.log(tex.length);
let wordscount = tex.trim().split(/\s+/);// split(/\s+/) → splits on one or more whitespace characters
console.log(wordscount.length);
console.log(wordscount.at(0)); // after split it becom array and at methode applicable on array ....charAt not applicable on array 
console.log(wordscount.indexOf("JavaScript"));
console.log(wordscount.lastIndexOf("JavaScript")); 
console.log(tex.split("JavaScript").length-1);//  3 --split("word").length - 1 → counts how many times "word" occurs in the string.
console.log(tex.replace("JavaScript" , "Python")); // not using wordscount bcz it an array and tex is string --here using string method 
console.log(tex.replaceAll("JavaScript" ,"Python"));
console.log(wordscount.slice(6));
console.log(tex.toUpperCase());
console.log(wordscount);
// Longest word
let longestword = "";
for (let i of wordscount)
{
    if (i.length > longestword.length){
longestword = i ;
        
    }
}
console.log(longestword);

// shoortest word

let shortestlength = wordscount [0] ;  

for (let word of wordscount) {

    if (word.length < shortestlength.length){

    shortestlength = word;

    }

}

console.log(shortestlength);

console.log(wordscount.reverse().join(" "));

console.log(tex.includes("Python"));

