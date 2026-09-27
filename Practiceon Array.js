//Array diclaration litrarl way

/*1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list */

let employee = ["Rahul","Priya","Amit"];
console.log(employee);

//1. Add "Sneha" to the employee list  
employee.push("sneha");
console.log(employee);

// Remove the last employee from the list  
employee.pop();
console.log(employee);

// Add "Manager" at the beginning of the list  
employee.unshift ("Manager");
console.log(employee);

//4. Remove the first employee from the list */
employee.shift();
console.log(employee);


/*
2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "  
*/

let ShoppingCart = ["Mobile","Laptop","Mouse"];
console.log(ShoppingCart.push("Keyboard"));
console.log(ShoppingCart);
console.log(ShoppingCart.reverse());
    
let [c1 ,c2 ,c3 ] = ShoppingCart; // Destructring 
console.log(c1);
console.log(c2);
console.log(c3);
console.log(typeof c1);// String 

/*
3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  */

let browser =  ["Google","Youtube","ChatGpt"]
browser.pop ();
console.log(browser);
browser.unshift ("Github");
console.log(browser);
browser.reverse ();
console.log(browser);

/*4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string  */

let order = ["Pizza","Burger","Pasta"];
order.push("Sandwitch");
order.shift();
console.log(order);

let[o1,o2,o3] = order; //destructiring for  practice 
console.log(o1);
console.log(o2);
console.log(o3);

/* 
5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list 
*/

let Std = ["Ankit", "Priya","Karan"]
Std.unshift("Neha");
Std.pop();
console.log(Std);

/* QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order  
*/

let TestCase = ["LoginTest", "PaymentTest","SearchTest"];
let  TestcaseCopy =[...TestCase];
console.log(TestCase);
console.log(TestcaseCopy);
let extractedArray = TestCase.slice(0,2); // Slice returend end index -1 .. strat from 0 and retrun end index -1 (2-1 = 1) (so output [ 'LoginTest', 'PaymentTest' ] )
console.log(extractedArray);
extractedArray.reverse();
console.log(extractedArray);


/*
7. Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  */

let movie = ["Inception","Avatar","Titanic"];
movie.push("Interstellar");
console.log(movie);
movie[2] = "Jawan";
let SingleStringcoversion = movie.join(" ");//converts the array into a string using space as separator.
//let SingleStringcoversion = movie.join("-");//converts the array into a string using - as separator. Inception-Avatar-Jawan-Interstellar
console.log(SingleStringcoversion);

/*
8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory  
*/

let ProInventary = ["Mobile","Laptop","Tablet","Camera"];
let removeelemnet1 = ProInventary.splice(2,1); // 2 is index number and 1 is deleted count 
console.log(removeelemnet1);
console.log(ProInventary);
let addElement = ProInventary.splice(2,0,"Smartwatch");
console.log(addElement);
console.log(ProInventary);
let ProInventaryCopy = [...ProInventary]
console.log(ProInventaryCopy);

/*
9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses  

*/

let Course = ["JavaScript", "Playwright", "Cypress"];
Course.shift();
console.log(Course);
Course.unshift("TypeScript");
console.log(Course);
let removeelement3 = Course.slice(1,3);//extract part of an array wiyhout modifiing original array 
console.log(removeelement3);// [ 'Playwright', 'Cypress' ] -- portion starts with startindex end with last index-1 
console.log(Course);//[ 'TypeScript', 'Playwright', 'Cypress' ] --wiyhout modifiing original array 


/*10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string */


let favoriteSong = ["Song1","Song2","Song3"];
favoriteSong.pop();
favoriteSong.unshift("newSong");
favoriteSong.join(" ");
console.log(favoriteSong);


/*
11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list  */

let bugTrack = ["Bug101","Bug102","Bug103"];
bugTrack.push("Bug104");
bugTrack.splice(1,1); // delete at incdex position  1 and delete count 1
//let removeelement = bugTrack.splice(1,1);
//console.log(removeelement);
console.log(bugTrack);
let CopyBuglist = [...bugTrack];
console.log(CopyBuglist);



/*12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " */


let taskPlanner = ["Wake Up", "Exercise", "Study"];
taskPlanner.splice(1,1,"Meeting");
console.log(taskPlanner);
taskPlanner.shift();
taskPlanner.reverse();
console.log(taskPlanner.join(" "));


/*
13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" and "geetea" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  
*/

let ContactName = ["Ram", "Shyam", "Mohan"]
ContactName.unshift("Sita" , "geetea")
console.log(ContactName);
ContactName.pop();
let removecontact = ContactName.slice(0,2);
console.log(removecontact);

/*14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order  */
let players = ["Virat", "Rohit", "Gill"]
console.log(players);
players.push("hardik");
players[2] = "KL Rahul";
console.log(players);
players.reverse();
console.log(players);

/*15. Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string*/

let failedTest = ["LoginFail", "CheckoutFail", "SearchFail"];
failedTest.push("ProfileFail")
failedTest.shift();
let CopyFailedtest = [...failedTest];
console.log(CopyFailedtest);
let removeelement = failedTest.slice(0, 2);
console.log(removeelement );
console.log(failedTest);
failedTest[0] = "PaymentFail";
console.log(failedTest.join(","));


/*
Declare an array with "John", "Priya", "Rahul" and:
1. Add "Sneha" at the beginning
2. Remove the last employee
3. Display the total number of employees
*/

let Empname = ["John", "Priya", "Rahul"];
Empname.unshift("Sneha");
Empname.pop();
console.log(Empname);
console.log(Empname.length);

/*


Perform exactly in this order:

Create a copy called backup.
Add "Registration" to the original beginning.
Remove "Payment" from the original.
Add "Profile" after "Search".
Remove the last item from backup.
Add "API" to backup.
Extract the last 2 items from the original.
Reverse those 2 items.
Convert backup to a string using "->".
Display:
Original
Backup
Last 2 reversed
Backup string
Number of items in original*/

let testCases = [
    "Login",
    "Payment",
    "Search",
    "Logout"
];
let backup = [...testCases];
console.log(backup);
testCases.unshift("Registration");
console.log(testCases);
testCases.splice(4,0,"Profile")
console.log(testCases);
backup.pop();
backup.push("API");
console.log(backup);
let removeitem = testCases.slice(4,6);
console.log(removeitem);
console.log(removeitem.reverse());
console.log(backup.join("->"));
console.log(testCases.length);


/*Array COncatination

Concatenate all three arrays.
Display the complete team.
Display the employee at index 3 */



let qaTeam = ["A", "B"];
let devTeam = ["C", "D"];
let managerTeam = ["E"];

let CompleteTeam = qaTeam.concat(devTeam ,managerTeam);
console.log(CompleteTeam);
console.log(CompleteTeam[3]);




//concat() vs Spread


let a = [1, 2];
let b = [3, 4];

let result1 = a.concat(b);
let result2 = [...a, ...b];
console.log(result1);
console.log(result2);

let result3 = [1, ...b];
let result4 = [1,2, ...a];

console.log(result3);//[ 1, 3, 4 ]
console.log(result4);//[ 1, 2, 1, 2 ]


/*
1. Student Marks

Tasks:

Display Priya's marks.
Display Rahul's English mark.
Display John's Maths mark.
Display the complete data of all students.*/


let students = [
    ["John", 80, 75, 90],
    ["Priya", 85, 88, 92],
    ["Rahul", 70, 78, 82]
];

console.log(students.length);
console.log( students[1][1]);//85
console.log(students[1][2]);//88
console.log(students[1][3]);//92
console.log(students[2][3]);//82
console.log(students[0][1]);//80
console.log(students);


  

/*4. Test Cases

Tasks:

Print all test case IDs.
Print all failed test cases.
Count how many test cases passed.
Count how many failed.
Change TC002 status from "Fail" to "Pass".*/

let testCases1 = [
    ["TC001", "Login", "Pass"],
    ["TC002", "Payment", "Fail"],
    ["TC003", "Logout", "Pass"],
    ["TC004", "Search", "Fail"]
];



// 1. Print all test case IDs
for (let i = 0; i < testCases1.length; i++) 
    {
    console.log(testCases1[i][0]);
    }


// 2. Print all failed test cases
for (let i = 0; i < testCases.length; i++) {
    if (testCases1[i][2] === "Fail") {
        console.log(testCases[i]);
    }
}


// 3. Count how many test cases passed
let passCount = 0;

for (let i = 0; i < testCases1.length; i++) {
    if (testCases1[i][2] === "Pass") {
        passCount++;
    }
}

console.log("Passed Test Cases:", passCount);


// 4. Count how many failed
let failCount = 0;

for (let i = 0; i < testCases1.length; i++) {
    if (testCases1[i][2] === "Fail") {
        failCount++;
    }
}

console.log("Failed Test Cases:", failCount);


// 5. Change TC002 status from "Fail" to "Pass"
testCases1[1][2] = "Pass";
console.log(testCases1);


/*Print Every Element

let teams = [
    ["John", "Priya"],
    ["Rahul", "Sneha"],
    ["Amit", "Neha"]
];

Task:

Use nested for loops to print every employee.*/



let teams = [
    ["John", "Priya"],
    ["Rahul", "Sneha"],
    ["Amit", "Neha"]
];

for (let i = 0; i < teams.length; i++) {

    for (let j = 0; j < teams[i].length; j++) {

        console.log(teams[i][j]);

    }
}


/*
Employee Names

let employees = ["John", "Priya", "Rahul", "Sneha", "Amit"];

Tasks:

Print every employee.
Print the first employee.
Print the last employee.
Print employees using their index.
Print the total number of employees.*/

let employees = ["John", "Priya", "Rahul", "Sneha", "Amit"];

// 1. Print every employee
console.log("All Employees:");

for (let employee of employees) {
    console.log(employee);
}


// 2. Print the first employee
console.log("First Employee:", employees[0]);


// 3. Print the last employee
let lastEmployee;

for (let employee of employees) {
    lastEmployee = employee;
}

console.log("Last Employee:", lastEmployee);


// 4. Print employees
console.log("Employees:");

for (let employee of employees) {
    console.log(employee);
}


// 5. Print total number of employees
let count = 0;

for (let employee of employees) {
    count++;
}

console.log("Total Employees:", count);


/*Level 2 — Numbers

2. Find Even Numbers

let numbers = [12, 7, 18, 25, 30, 41, 56];

Tasks:

Print all numbers.
Print only even numbers.
Print only odd numbers.
Count the even numbers.
Calculate the sum of all numbers.*/

let numbers = [12, 7, 18, 25, 30, 41, 56];

// 1. Print all numbers
console.log("All Numbers:");

for (let number of numbers) {
    console.log(number);
}


// 2. Print only even numbers
console.log("Even Numbers:");

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}


// 3. Print only odd numbers
console.log("Odd Numbers:");

for (let number of numbers) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}


// 4. Count the even numbers
let evenCount = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        evenCount++;
    }
}

console.log("Even Count:", evenCount);


// 5. Calculate the sum of all numbers
let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

console.log("Sum:", sum);



































