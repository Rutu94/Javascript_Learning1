let studentName ='smita';
let studenAge = 20; 
let studentgrade = 'A';
let StudentEmail = `smitajagdale@gmail.com`; // template Steing 
let StudentEnroled =true;

console.log(studentName);
console.log("Student Name is " + studentName);
console.log(typeof studentName);
console.log("Student Age is " + studenAge);
console.log(typeof studenAge);
console.log("Student grade " + studentgrade) ;
console.log(typeof studentgrade);
console.log("email id "  +  StudentEmail);
console.log(typeof StudentEmail);
console.log("Is student currently enroled ?" + StudentEnroled);
console.log(typeof StudentEnroled);


//Assignement 2 - create variable for the following value //

let num1 = 100;
let x = '100'
let a = true ;
let  b = undefined;
let c = null;
let d = 123456789n;

console.log(num1);
console.log(typeof num1);

console.log(x);
console.log(typeof x);

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(d);
console.log(typeof d);

//Assignment 3 //

var CompanyName = "Mphasis";
let EmployeeName = 'Kushi gupta';
const EmployeId = 456

//console.log("EmployeeData" + "Company name is " + CompanyName , "employeename is " + EmployeeName, + "employeeid" + EmployeId);
console.log("EmployeeData" + "\nCompany name is " + CompanyName ,"\nemployeename is " + EmployeeName, + "\n employeeid is" + EmployeId);

console.log(`EmployeeData 
           \nCompany name is ${CompanyName} 
           \nemployeename is ${EmployeeName} 
           \n employeeid is ${EmployeId} `);

CompanyName = "infosys";
console.log(`EmployeeData 
           \nCompany name is ${CompanyName} 
           \nemployeename is ${EmployeeName} 
           \n employeeid is ${EmployeId} `); //Infosy 

 EmployeeName = 'Ravi verma';
 console.log(`EmployeeData 
           \nCompany name is ${CompanyName} 
           \nemployeename is ${EmployeeName} 
           \n employeeid is ${EmployeId} `); // Ravi verma 


 EmployeId = 546;
 console.log(`EmployeeData 
           \nCompany name is ${CompanyName} 
           \nemployeename is ${EmployeeName} 
           \n employeeid is ${EmployeId} `); //TypeError: Assignment to constant variable.


           // Assignment 4//

var m =10;
let n = 20;
const z=30;

console.log(m); //10
console.log(n); //20
console.log(z); //30

m = 100;
n = 200;
console.log(m); //100
console.log(n); //200 Reassingment is possible for both let and var redeclaration not allow to let 

//let n=5;
//console.log(n);//SyntaxError: Identifier 'n' has already been declared 


//Assignment 5  //

var k=20 ;
k=20 ;
let t =30;
t=40;
const g = 50;
g =60 ;

console.log(k);//20
console.log(t);//40
console.log(g);// Error  Redeclaration not allowed for constant  (TypeError: Assignment to constant variable.)

//Assignment 6 //

let EmployName = 'Smita';
let EmployId = 1134 ;
let Salary = 1234567;
let Employstatus = 'Permanent';
let date = '26/8/2026';
let manager ='Avinash more';

console.log(`Employinformation 
\nemployname is ${EmployName}
\nemployeeid is ${EmployId}
\nsalary is ${Salary}
\nis employee permant - ${Employstatus}
\n date is ${date}
\n manager is ${manager}
`
);
//----------------------------------------------------------------------------------------
// Error question 

let name  ='Rahul';
let name  = 'Amit'; // Redeclaration not allowed for let only applicable for var (SyntaxError: Identifier 'name' has already been declared)
//console.log(name);

Const age = 25;
age = 30;
console.log(age); // reassignment not allowed for const value 


const city ;
city = 'Pune';
console.log(city); // error not initialise (SyntaxError: Missing initializer in const declaration)

let asalary = 50000;
asalary = 60000;
console.log(asalary);// 60000

var acompany = 'ABC';
var acompany = 'xyz';
console.log(acompany); //xyz

let aage = 25;
var aage = 30;
console.log(aage);//Error Redeclaration not allow in let (Identifier 'aage' has already been declared)

let Age1 =25;
Age1 ='Twenty five ' ;
console.log(Age1);// Twenty five 

//------------------------------
const value =100;
value = "Hellow";
console.log(value); // error Reassignment of value not allow in const (TypeError: Assignment to constant variable.)

//Trickey Question

var w =10;
{
    var w =20 ;
}
console.log(w);// 20 Var having functional Scope 

//------------------------------
let q =20;
{
    let q =30;
}
console.log(q); //20 let have block Scope 

//-----------------------------------
const e =30;
{
    const e = 60;
}
console.log(e); //30 const have block scope 


//-----------------------------------------------

let age2 =25;
{
    let age2 = 30;
    console.log(age2); //30  block data displaye displayed first (block scope )
    
}
console.log(age2); // 25

//---------------------------------------------------

var y =10;
{
    var y= 20;
    console.log(y);//20  (Functional Scope )
    
}
console.log(y);//20 (Functional Scope )

//--------------------------

console.log(age3); // undefined  ( Cannot access 'age3' before initialization)
let age3=25;

//-----------------------------------------------------------
console.log(age4); //undefined (no error message )
var age4 =25 ;

//--------------------------------------------------

var p =10;
{
    let p=20 ;
    console.log(p); //20  block scope 
    
}
console.log(p); //10  


//--------------------------------------------------------------

let h = 10 ; // REDECLARATION ERROR  (SyntaxError: Identifier 'h' has already been declared)
{
    var h =20;
}
console.log(h); // Typo error for redeclaration not allow for let and it is out of the block and var is function scope 

//----------------------------------------------------------------------------

const s =10;REDECLARATION ERROR  (SyntaxError: Identifier 's' has already been declared)
{
    var s =20;

} console.log(s);//Typo error for redeclaration not allow for let and it is out of the block and var is function scope 
































