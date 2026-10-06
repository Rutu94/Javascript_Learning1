
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

/*
String Assignments
========================
1.Check if a String is a Palindrome 
Problem Statement: 
Write a Javascript  method to check if a string is a palindrome. 
Sample Input: 
str = "madam" 
Sample Output: 
madam is a palindrome
function isPalindrome(str) {



*/

function isPalindrome(str1)
{
let reverse = "";
for (i =0; i<str1.length ; i++ )

    {

  reverse = reverse + str1.charAt(i)
  return str1 === reverse;

    }
 
 let str1 ="madam";
   if (isPalindrome(str1)) 
    {
    console.log(str1 + " is a palindrome.");
     } 
else 
  {
    console.log(str1 + " is not a palindrome.");
  }


}



//using methode 

let str = "madam"
let str1 = str.split();
console.log(str1);

let str2 = str.split().reverse();
console.log(str2);

if (str=str2)
    {
 console.log(str + " is a palindrome.");
}
else 
    {
    console.log(str + " is not a palindrome.");
  }


/*
-----------------------------------------------------------
2. Count Vowels and Consonants 
Problem Statement: 
Write a Java script program that counts vowels in a given string. 
Sample Input: 
str = "Hello World" 
Sample Output: 
Vowels: 3 
*/
let str5 = "Hello World";

// Convert to lowercase for easy comparison
str5 = str5.toLowerCase();

// Split into characters
let chars = str5.split(""); //

let vowels = ["a", "e", "i", "o", "u"];    //
let vowelCount = 0;
let consonantCount = 0;

for (let i of chars) {
  // Only check letters
  if (i >= "a" && i <= "z") {
    if (vowels.includes(i)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("Vowels: " + vowelCount);
console.log("Consonants: " + consonantCount);

 

/*-----------------------------------
3. Find Duplicate Words in a Sentence 
Problem Statement: 
Write a Java script
 program that reads a sentence (string), splits it into words (array), and finds duplicate 
words along with their counts. 
Sample Input: 
"Java is great and Java is powerful"
*/
 let str7= "Java is great and Java is powerful";
  let words = str7.toLocaleLowerCase().split(" ");
 console.log(words);
 let duplicateCount = {}; // empty object to strore 

 for (let i of words) // i iterate on value 
    { 
    if (duplicateCount[i])

        duplicateCount[i]++
    
    else{
        duplicateCount[i] =1;
    }
 }

 console.log("Duplicate words and their counts:");
     
 for(let i in duplicateCount)  // i iterate on index 
     {
if (duplicateCount[i]>1){

    console.log(i +" "+ duplicateCount[i]);

     }

    }
 







/*-----------------------------------------------------------------------------
4. Convert a Sentence to Word Array and Sort Alphabetically 
Problem Statement: 
Given a string sentence, split it into words and return them sorted alphabetically. 
Sample Input: 
"zebra apple mango banana" 
Sample Output: 
[apple, banana, mango, zebra] 
Hint: Use Arrays.sort(array to sort)*/

let input = "zebra apple mango banana";
let arrayInput = input.split(" ").sort();
console.log(arrayInput);

/*------------------------------------------------------------------
 5.Extract Username
let email = "smita.patil123@gmail.com";

Tasks:
Extract only "smita.patil123"
Extract only "gmail"
Extract only "com"

 Use indexOf(), slice() / substring().*/

let email = "smita.patil123@gmail.com";
let extract = email.slice(0,14);
console.log(extract);

let a= email.indexOf("g");
console.log(a);


let extract1 =email.substring(15,20);
console.log(extract1);

let extract2 = email.slice(-3);
console.log(extract2);



/*-----------------------------------------------------------------
6. Remove Duplicate Spaces
let text = "JavaScript    is     very    powerful";
Expected:
JavaScript is very powerful
Hint: Think about replace() / replaceAll() or regex.*/

let text = "JavaScript    is     very    powerful";
console.log(text.length);//37
let RemoveduplicateSpace = text.replaceAll("  ", " ");
console.log(RemoveduplicateSpace);
console.log(RemoveduplicateSpace.length);//31


/*-----------------------------------------------------------------------
7 First and Last Occurrence
let text = "JavaScript is easy. JavaScript is powerful.";
Find:
First JavaScript index
Last JavaScript index
Then extract the second "JavaScript".*/


let text1 = "JavaScript is easy. JavaScript is powerful.";
let text5 = text1.split(" ");
console.log(text5); 
let text2 = text5.indexOf("JavaScript");
let text3 = text5.lastIndexOf ("JavaScript")
console.log(text2);//0
console.log(text3);//3
let text6 = text5.slice(3,4);
console.log(text6);


/*---------------------------------------------------------------------
8 String Comparison
let a = "JavaScript";
let b = "javascript";

Check whether they are equal without considering uppercase/lowercase.

Expected:

true*/

let ax = "JavaScript";
ax = ax.toLocaleLowerCase;
let by = "javascript";
by = by.toLocaleLowerCase;
console.log(ax === by);


/*-------------------------------------------- 
9 Remove First Character Without slice()
let text = "JavaScript";

Output:

avaScript

Restriction: Don't use slice()*/

let texta = "JavaScript";
let textc = texta.split("");
let textd = textc.shift();//j
console.log(textc); // ['a', 'v', 'a'  'S', 'c', 'r',  'i', 'p', 't']
let texte = textc.join("");
console.log(texte); //avaScript


/*---------------------------------------

10. Get Middle Character
let word = "JavaScript";

Find the middle character.

Then try:

let word = "Testing";

What happens when the string has an even number of characters?*/

let word = "JavaScript";
let length = word.length;
console.log(length); //10  
console.log(word.charAt(5));


let  word2 = "Testing";
console.log(word2.length); 7
console.log(word2.charAt(3));//

//other logic 
//Interview point:
//Odd length → 1 middle character
//Even length → 2 middle characters

let word3 = "JavaScript";

let middle1 = word3.charAt(word3.length / 2 - 1); //
let middle2 = word3.charAt(word3.length / 2);

console.log(middle1);
console.log(middle2);



/*-------------------------------------------------
12.let text = "  JavaScript is JavaScript and JavaScript is powerful  ";

Perform all of these:

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

















