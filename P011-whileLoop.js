
/*
while loop
----------------
- It is called entry controlled loop
- When number of iterations are not fixed use while loop

Automtion scenario:
--------------------
- Pegination
- list/menu with dynamic number of option

Synatx:
--------------
initialize;
while(condition)
{
statements;
inc/dec
}


*/

//print welcome message 5 times
let i=1;
while(i<=5)
{
    console.log("Welcome");
    i++;
        
}


//for sum of 100 natural numbers
//1+2+3+4+.....+100=5050

let j=1;
let result=0;
while(j<=100)
{
    result=result+j;
    j++;
    
}

console.log("Sum of 100 natural numbers: "+result);

/*Sum of number 
math.floor - rounds down, returning the largest integer less than or equal to a number.
Math.ceil(x): Rounds up, returning the smallest integer greater than or equal to a number.
// Rounding numbers
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5// */
 

let num = 123, reminder =0 , sum = 0;
while (num>0)
{
reminder=num %10 ;
num = Math.floor (num/10);
sum = reminder+sum ;
}

console.log(sum);

/* Reverse the  number */

let n = 1234 ,rm =0, rev =0;
while(n>0)
{
    rm =n%10;
    n= Math.floor(n/10);
    rev= rev *10+ rm;

}
console.log("reverse number is " + rev);









    


