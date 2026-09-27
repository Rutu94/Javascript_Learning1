/*Question1 : Employee Object

Create an object:

Tasks:
Print the employee name.
Print the department.
Print the experience.
Print the complete object.
Print the value using bracket notation.*/

let employee = {
    name: "John",
    age: 30,
    department: "QA",
    experience: 5
};
console.log(employee.name);
console.log(employee.department);
console.log(employee.experience);
console.log(employee);


// using bracket notation
console.log(["id"]); //[ 'name' ]
console.log(employee["name"]);  //john
console.log(employee["department"]); //QA
console.log(employee["experience"]); //5
console.log([employee]);

/*-----------------------------------------------------------------------------------------

Question2 :

Tasks:
Add location: "Hyderabad".
Update salary to 70000.
Add experience: 6.
Print the updated object.*/

let employee1 = {
    name: "Priya",
    role: "Tester",
    salary: 60000
}
  employee1.location = "Pune" ;
  employee1.salary = 70000 ;
  employee1.experience = 6 ;
    console.log(employee1);

/*----------------------------------------------------------------------------------------------
Question3 :
Tasks:
Delete company.
Print the object.
Check whether company exists.*/

let browser = {
    name: "Chrome",
    version: "140",
    company: "Google",
    type: "Desktop"
};
delete browser.name ;
console.log(browser);
console.log("company" in browser );

/*------------------------------------------------------------------------------------------------

Question 4 
 Nested Object
Tasks:
Print employee name.
Print city.
Print state.
Print pincode.
Change city to "Pune".*/

let employee11 = {
    name: "Amit",
    role: "QA",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500032
    }
};
console.log(employee11.name);
console.log(employee11.address.city);
console.log(employee11.address.pincode);
employee11.address.city ="Pune";
console.log(employee11);



/*------------------------------------------------------------------------------------------------
Question 5 

Tasks:
Print tester name.
Print the first skill.
Print the last skill.
Add "Playwright" to skills.
Print all skills using a loop.
Print total number of skills.*/

let tester = {
    name: "Sneha",
    experience: 5,
    skills: ["JavaScript", "Selenium", "SQL", "JIRA"]
};
console.log(tester.name);
console.log(tester.skills[0]);
console.log(tester.skills[3]);
console.log(tester.skills.push("Playwright"));
console.log(tester);
console.log(tester.skills.length);


// 5. Print all skills using a loop
for (let skill of tester.skills) 
    {
    console.log(skill);
    }

    
/*------------------------------------------------------------------------------------------------------
Question 6 

Tasks:
Print test case ID.
Print test case title.
Print tester name.
Print browser.
Print environment.
Print execution duration.
Change status from "Pass" to "Fail".
Add a new property:*/

let testCase = {
    id: "TC101",
    title: "Login with valid credentials",
    status: "Pass",
    tester: "John",
    browser: "Chrome",
    execution: {
        environment: "QA",
        duration: 25
    }
};
console.log(testCase.id);
console.log(testCase.title);
console.log(testCase.tester);
console.log(testCase.browser);
console.log(testCase.execution.environment);
console.log(testCase.execution.duration); 
testCase.status ="Fail";
testCase.dev = "smita";
testCase.execution.projectCode = 234 ;
console.log(testCase);

/*-------------------------------------------------------------------------------------------------------------
Question 7:

Using Object.entries():
Count Pass.
Count Fail.*/

const testCases = {
    TC101: "Pass",
    TC102: "Fail",
    TC103: "Pass",
    TC104: "Fail",
    TC105: "Pass"
};


let passCount = 0;
let failCount = 0;

for (let [testCase, status] of Object.entries(testCases)) {

    if (status === "Pass") {
        passCount++;
    }

    if (status === "Fail") {
        failCount++;
    }
}

console.log("Pass:", passCount);
console.log("Fail:", failCount);

/*-----------------------------------------------------------------------------------------------------------------

Question 8 :
Tasks:
Add age.
Add experience.
Add location.
Print the object.*/

let employee5 = {
    name: "John",
    role: "Tester"
};
employee5.age =32;
employee5.experience =8;
employee5.location ="Hyderbad";
console.log(employee5);

/*-----------------------------------------------------------------------------------------------------------
Question 9:

Tasks:
Change role to "Automation Tester".
Change experience to 6.
Add salary.
Print the object.*/

const employee7 = {
    name: "Priya",
    role: "Tester",
    experience: 5
};
employee7.role ="Automation tester";
employee7.experience = 6;
employee7.salry =55000;
console.log(employee7);

/*-----------------------------------------------------------------------------------------------------------------
Question10

Perform:

Find:
Total number of keys.
Total number of values.
Employee name.
Employee salary.
All key-value pairs.
Whether experience exists. */

const employee8 = {
    id: 101,
    name: "Amit",
    role: "QA",
    experience: 7,
    salary: 90000
};

console.log(Object.keys(employee8)); //[ 'id', 'name', 'role', 'experience', 'salary' ]
console.log(Object.keys(employee8).length);
console.log(Object.values(employee8));// [ 101, 'Amit', 'QA', 7, 90000 ]
 console.log(Object.values(employee8).length);
console.log(Object.entries(employee8));
console.log(employee8.name);
console.log(employee8.salary);


/* ----------------------------------------------------------------------------------------------------------------------
Question 11 


Tasks:

Print all object keys.
Print all object values.
Find the number of keys.*/

let employe = {
    name: "John",
    age: 30,
    role: "Tester",
    location: "Hyderabad"
};
console.log(Object.keys(employe));
console.log(Object.values(employe));
console.log(Object.entries(employe));

                

/*---------------------------------------------------------------------------------------------------------------------


Tasks:

Change role to "Automation Tester".
Add experience: 5.
Print the object.

Question: Can you modify a const object?*/

const employee23 = {
    name: "John",
    role: "Tester"
};
employee23.role = "Automation Tester";
employee23.Experience = 9;
console.log(employee23); // yes we can modifify const object but cant use same  name of object when it used as constat 



/* -----------------------------------------------------------------------------------------------------------------------
Question - 
Tasks:
Use Object.values().
Print all values.
Print the number of values.
Print the first value.*/

   const product = {
    name: "Laptop",
    brand: "Dell",
    price: 65000,
    quantity: 2
};
console.log(Object.values(product));
console.log(Object.entries(product));
console.log(Object.values(product).length);//4
console.log(Object.values(product)[0]);//Laptop



/*-----------------------------------------------------------------------------------------------------------------------------
question 

Tasks:
Print all values.
Find the highest mark.
Find the lowest mark.
Calculate the total marks.*/


const marks = {
    math: 80,
    science: 95,
    english: 75,
    computer: 90
};
let values =Object.values(marks);
console.log(Object.values(marks));
//highest mark

let highestMark = Math.max(...values);
console.log("Highest Mark ",highestMark );
//Lowest  mark

let lowestMark = Math.min(...values);
console.log("Lowest Mark " ,lowestMark );

let totalMarks = values.reduce ((sum, mark) => sum + mark, 0);
console.log(totalMarks);


/*------------------------------------------------------------------------------------------------------------------------------

Tasks:
Change the name to "Sneha".
Add experience: 6.
Assign a completely new object to employee.
Print the final object.

Question: Why is reassignment possible with let but not with const?*/

let student = {
    name: "Priya",
    role: "QA"
};
student.name = "sneha";
console.log(student );

 student = { 
    name: "smita",
    role: "Automation QA"
};                    
console.log(student);// Reassignmet possible with let but it will take update object value and old value gose to garbage collection



/*-----------------------------------------------------------------------------------------------------------------------------------------


Tasks:

Change user1.name.
Change user2.name.
Add age to both objects.
Try assigning a new object to both variables.

Identify which statements work and which produce an error.*/

let user1 = {
    name: "Amit"
};

const user2 = {
    name: "Rahul"
};

console.log(user2);
user1.name ="Raj";
user2.name ="smita"; 
console.log(user1);
console.log(user2);

user1.age =20;
user1.age= 40;
console.log(user1);
console.log(user2);

user1 = {
    Salary : 98000,
    city : "pune",
    Experience :10
}
 console.log(user1); // Reassignment possible but take update value of object
 

 user2 = {
        Salary : 555000,
    city : "Hyderabad",
    Experience :15
}  //Assignment to constant variable. error

/*-----------------------------------------------------------------------------------------------------------------------------------------

Tasks:
Freeze the employee object.
Try to change salary to 70000.
Print the object.
Check whether the object is frozen.*/

let Aemployee = {
    name: "John",
    role: "Tester",
    salary: 60000
};
Aemployee.name = "Amar";
console.log(Aemployee);//{ name: 'Amar', role: 'Tester', salary: 60000 }
console.log(Object.freeze(Aemployee));
Aemployee.role = "QA";
console.log(Aemployee);// after ferrzing -Cannot assign to read only property 'role' of object 


/*-------------------------------------------------------------------------------------------------------------------------------------------
Question 4: Important

Tasks:
Try to change employee.name to "Riya".
Try to change employee.address.city to "Pune".
Print the object.
Check whether employee is frozen.
Check whether employee.address is frozen.

Think carefully: Is Object.freeze() automatically freezing the nested address object? */

let teacher = {
    name: "Sneha",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
teacher.name = "Amey"; //possible 
Object.freeze(teacher);
//Object.freeze(teacher.address);//not possible we have to deep freez
teacher.name = "Riya";//Cannot assign to read only property 'name' of object
teacher.address.city = "Pune"; // The nested address object remains a reference pointing to a separate object in memory, so its internal properties can still be modified.
console.log(teacher);


/*---------------------------------------------------------------------------------------------------------------------------------------

Tasks:
Seal the employee object.
Try to change salary to 70000.
Try to add city: "Hyderabad".
Try to delete role.
Print the object.

Note  - only modification is possible .addition and deletion of property not applicable after seal object 
*/
let manager = {
    name: "John",
    role: "Tester",
    salary: 60000
};

//delete manager.role;// possible 
Object.seal(manager);
manager.salary = 66666;
console.log(manager);
manager.city = "Hyderabad"; //Cannot add property city, object is not extensible
console.log(manager);
delete manager.role;// not possible after seal

/*------------------------------------------------------------------------------------------------------------------------------------------


Tasks:

Create a copy of emp1 using the spread operator.
Store it in emp2.
Change employeeCopy.name to "Rahul".
Print both objects.
Check whether both objects are the same using ===.*/


let emp1 = {
    name: "John",
    role: "Tester",
    experience: 5
};

let emp2 = {...emp1};
console.log(emp1); //{ name: 'John', role: 'Tester', experience: 5 }
console.log(emp2); //{ name: 'John', role: 'Tester', experience: 5 } --memory location differnt so not true
console.log(emp1 === emp2);
emp2.name ="Smita";
console.log(emp1);//{ name: 'John', role: 'Tester', experience: 5 }
console.log(emp2);//{ name: 'Smita', role: 'Tester', experience: 5 }

/*------------------------------------------------------------------------------------------------------------------------------------------

Tasks:
Create an empty object.
Copy employee into it using Object.assign().
Change the copied department to "Automation QA".
Print both objects.*/

let Emp3 = {
    name: "Amit",
    department: "QA",
    experience: 5
};

let Emp4 = Object.assign ({},Emp3); // by using assign property
console.log(Emp4);

Emp4.department = "Automation QA";
console.log(Emp3);
console.log(Emp4);

/*const employee = {
    name: "Amit",
    experience: 7,

    project: {
        name: "Banking Application",
        domain: "Capital Market",
        status: "Active"
    }
};

Tasks:

Print employee name.
Print project name.
Print project domain.
Change project status to "Completed".
Add client: "ABC Bank" inside project.
Print the complete object.*/


/*Convert this object into a JSON string and print it.

let employee = {
    name: "Priya",
    age: 28,
    role: "Tester"
};

Task:

Convert object → JSON string
Print the result
Print its typeof*/


/*JSON String → Object
let data = '{"name":"Rahul","experience":5,"role":"Developer"}';

Task:

Convert the JSON string into an object.
Print name.
Print experience.
Print role.*/


/*3. Object → Keys
let tester = {
    name: "Smita",
    experience: 7,
    skill: "Manual Testing",
    location: "Hyderabad"
};

Task:

Convert the object into an array of keys.
Print the keys.*/


/*Object → JSON → Object
let employee = {
    name: "Smita",
    role: "QA",
    experience: 7
};

Perform these steps:

Convert object → JSON string.
Print the JSON string.
Convert JSON string → object.
Print name.
Print role.*/

/*You receive API response data as a JSON string:

let response = '{"status":"Pass","testCase":"TC101","tester":"Smita"}';

Tasks:

Convert JSON string → object.
Print status.
Print testCase.
Print tester.
Change status from "Pass" to "Fail".
Convert the modified object back to JSON string.
Print the final JSON string.*/