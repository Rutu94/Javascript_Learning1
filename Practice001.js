// ---Predecrement  - (--a) substract the first the return new value //

let a =10
let b = --a;
console.log(a); // 9   return new value 
console.log(b); // 9 subtract imediatly first 

// ---Post decrement  - (x--) return current value first the subtrsct  //

let x =10 ;
let y = x--;
console.log(x);//9     subtrsct the one 
console.log(y);//10 -- return current value first

let count =5;

console.log(count-- + 2); //5+2 = 7  return current value first (Value of count 5)
console.log(--count+2);//  value of count 4 bcz of --count value become 3 (imediate decremant ) =3+2 =5
console.log(count);//value return same 3  so proit as 3

let a1 =10;
console.log(a1-- + 10); // current vale 10 +10 = 20 ;now value become 9
console.log(--a1 + a1--);// bcz preincremet value bcome 8+8=16
console.log(a1);//7


let score =20;
let player1 = score-- - --score; //post returen current value first 20 (now value become 20-1 =19 ) -- Score value become 18 expression 20-18 =2
let player2 = --score + score--; //current value 18 after pre dec become 17 and score-- become 17  expression 17 +17 =34
console.log(player1);//2
console.log(player2);//34

let b1= 30;
let b12 = b1-- + --b1; //30 +28 =58
let b13 = --b1 - b1--;//28-28 =0
console.log(b12);
console.log(b13);


let score1 =5 ;
let cal =(score1--) +(--score1); //5+3 =8
console.log(cal); // 8
console.log(score1); //3


let count1 = 3;
console.log(count1); //3
let result = count1++ +  ++count1;
console.log(result);//3+5=8
console.log(count1);//5


let g = 1;
let total = g++ + ++g + g-- - --g; // 1+ 3 +3 -1 =6
//g= 1 greturen 1 now g become 2
console.log(total);
 


let t1 =10;
let t2= (t1--) + (++t1) - (--t1) +(t1++); //10 + 10-10+10 = 20 ;
// t1-- = 10  || t1 =9 || ++t1 = 10 ||t1 10 ||--t1 =10 ||t1 =9|| t1++ =10;
console.log(t2);

let s1 =20 ;
let S2 = (--s1)+(++s1)-(s1++)-(s1)+(s1--);
//--s1 =19||s1= 19||++s1 =20||s1=20||S1++ = 20||s1 =21||s1--=21
//expression = 19 +20-20-21+21= 19
console.log(S2);
















