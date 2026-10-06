/*JavaScript Class Problem Statements 
Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details.*/ 

class student {
    name;
    age;
    course;
    constructor(name,age,course) {
        this.name =name;
        this.age =age;
        this.course =course;

        
    }
    display()
    {
console.log(this.name);
console.log(this.age);
console.log(this.course);

    }
}

let Student1 = new student("Smita",10,"Playwright");
console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.course);

let Student2 = new student ("Amar",30,"Tax counsaltant");
console.log(Student2.name);
console.log(Student2.age);
console.log(Student2.course);

/*Create an Employee class with:
name
salary
department

Create 3 employee objects.

Tasks:

Display all employees.*/

class Employee {
name;
salary;
department;
    constructor(name,salary,department) {
        this.name = name;
        this.salary = salary;
        this.department = department;

    }
    getdeatil ()
    {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
        
    }
}

let emp1 = new Employee ("Smita",767899,"QA");
emp1.getdeatil();
let emp2 = new Employee ("Amar",767899,"tax");
emp2.getdeatil();
let emp3 = new Employee ("ravi",767899,"Hr");
emp3.getdeatil();


/*Create an Employee class with:

name
basicSalary

Methods:

calculateBonus()
calculateTotalSalary()

Rules:

Salary >= 50,000 → 10% bonus
Salary < 50,000 → 5% bonus

Create 2 employee objects and display their total salary.*/


class Employee {

    name;
basicSalary;
    constructor(name,basicSalary) {

    this.name = name;
    this.basicSalary =basicSalary;
    }
calculateBonus(bonuspercent){

    let bonus = this.basicSalary*bonuspercent /100 ;
    let TotalSalary = bonus + this.basicSalary;
    console.log("Total Salary with","",bonuspercent,"percent bonus",TotalSalary);
return {

bonus,
TotalSalary
}
}
}
let Employee12 = new Employee("Raj",40000, "QA");
console.log( Employee12.calculateBonus(10));

let Employee13 = new Employee("Mahak", 60000,"BA");
console.log(Employee13.calculateBonus(5));




/*Program 2: Bank Account Class 
Problem Statement: 
Create a BankAccount class with the following: 
• accountHolder  
• balance  
• deposit()  
• withdraw()  
• checkBalance() */

class BankAccount {
 accountHolder ; 
 balance  ;

    constructor(accountHolder,balance ) {
        this.accountHolder = accountHolder;
        this.balance = balance;

    }

    deposite (amount)
    {
        this.balance = this.balance + amount;
        console.log("Deposited amount" , amount);
        
    }
withdraw(amount )
{
    if (amount <= this.balance)
    {
       this.balance = this.balance - amount;
       console.log("withfrew amount" ,amount);
       
    } else 
        {
        console.log("insufficiemnt balance");
        
        }
}

checkbalance()
{
console.log("checkbalance",this.balance);

}
}

let Account1 = new BankAccount ("Smita" ,1000);
console.log(Account1.accountHolder);
Account1.deposite(200); //call methode 
Account1.withdraw(100);
Account1.checkbalance();

/*
Program 3: Student literal object 
Problem Statement: 
Create a student object with the properties name, age, course, and 
marks. Print all the details. */

class STd {
    name;
     age;
      course;
      marks;

    constructor(name, age,course,marks,)
     {
        this.name =name;
        this.age= age;
        this.course =course;
        this.marks= marks;
    }
    getdeatil()
    {
          return {
            name: this.name,
            age: this.age,
            course: this.course,
            marks: this.marks
        };

}

}

let Studentone = new STd("jee" ,34,"MBA",89);
console.log(Studentone.getdeatil());

let Studenttwo = new STd("Amar" ,23,"Engineering",96);
console.log(Studenttwo.getdeatil());



/*
Create a Calculator class with methods:

add()
subtract()
multiply()
divide()

Create a calculator object and perform all operations.*/


class Calculator {


    constructor(parameters) {
        
    }

     Add (a,b){
        let Addition = a+b;
        return Addition; }
    
        Substract(a,b){
            let Subtraction = a-b ;
            return Subtraction ;
        }

        multiply (a,b){
            let Multiplication = a*b;
            return Multiplication
        }

        Divide (a,b){
            let devide = a/b ;
            return devide ;
        }

     }
    

let calculator = new Calculator();
console.log("Additoion" , calculator.Add(10, 20));
console.log("Subtraction" ,calculator.Substract (30,20));
console.log("Multiplay" ,calculator.multiply(5,5));
console.log("Devision" ,
calculator.Divide (100, 10) );

/*
Create 4 tester objects.

Example:
Amit   3 years
Priya  7 years
Rahul  5 years
Sneha  2 years

Tasks:
Print all tester names.
Print testers having experience >= 5.
Find the tester having maximum experience.
Add "Playwright" to Priya's skills.*/

let testers = [
    {
        name: "Amit",
        experience: 3,

    },
    {
        name: "Priya",
        experience: 7,
    },
    {
        name: "Rahul",
        experience: 5,
        
    },
    {
        name: "Sneha",
        experience: 2,
       
    }
]

for ( let faname of testers)
    {

    console.log(faname.name );
    console.log(faname.experience);
  
}

for (let tester of testers)

    {
 if(tester.experience >= 5){

    console.log(tester.name);
 }
   }

 /*let maxexp1 = testers[0];

   for (let tester of testers)
   {
if (tester.experience >maxexp1.experience){
     maxexp1 = tester;
   console.log(tester.name);
}


  }


  for (let tester of testers) {
    if (tester.name === "Priya") {
        tester.skills.push("Playwright");
    }
}

console.log(testers[1]);
*/


//using array method 
/*
Create 4 tester objects.

Example:
Amit   3 years
Priya  7 years
Rahul  5 years
Sneha  2 years

Tasks:
Print all tester names.
Print testers having experience >= 5.
Find the tester having maximum experience.
Add "Playwright" to Priya's skills.*/

let testers1 = [
{
    name : "Amit",
    exp : 3
},
{
    name : "priya",
    exp : 7
},
{
    name : "rahul",
    exp : 5
},
{
    name : "sneha",
    exp : 2
}
]

testers1.forEach(testername => {
    console.log(testername.name);
});


let testermaxexp = testers1.filter(testername => testername.exp>= 5 );
console.log(testermaxexp);

let maxexptest = testers1.reduce((initial, tester) => {

    if (tester.exp > initial.exp) {
        return tester;
    } else {
        return initial;
    }

}, testers1[0]);

console.log(maxexptest);
    






//Create an object named car with properties make, model, and year. Add a method getDetails that returns a string with all three details using template literals.

/*Create a base class Shape with a color property. Then create a subclass Circle that extends Shape and adds a radius property and a getArea() method.

JavaScript */

/*Create a static object student:

const student = {
    name: "Rahul",
    age: 25,
    course: "JavaScript",
    marks: 85
};

Tasks:

Print the student name.
Print the age.
Print the course.
Print the marks.
Print all object values.*/
