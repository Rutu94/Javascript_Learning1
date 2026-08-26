//Pre increment 
let a =100;
console.log (a); // 100
console.log(++a); //101

//Post increment 

let b =200;
console.log(b); // 200
console.log(b++); // 200
console.log(b);//201
console.log(b); //201 only one time increment 
console.log(b++);// 201
console.log(b); //202


let i =199;
let j = i++ ;  // value will use first and use  it  increment opration first 
console.log(i);//200
console.log(j); //199
console.log(j); //199  only one time increment 


let p = 687;
let q =p++;
console.log(p); 688
console.log(q);687

let r = 78;
let s= ++r;
console.log(r);//79
console.log(s);//79


let u =101;
let v= ++u;
console.log(u);//102
console.log(v);//102

//post decremet 
let e =90;
let f= e--;
console.log(e);//89
console.log(f);//90

let t=100;
t=t--;
console.log(t);

//Predecrement 

let z= 78;//
let y= --z;
console.log(z);
console.log(y);


let m= 10;
let n = --m + m-- ;
console.log(m);
console.log(n);

console.log(''---Short hand operator------'');
//+= .-+, /=,%= (eg x=x+1 isted we can write x+=1) 

let k=20;
k+=20;
console.log(k);//40

let o=100;
o-=20;
console.log(o);//80

let g=200;
g *=10;
console.log(g);//2000

let c= 100;
c/=50;
console.log(c);//2


console.log("------Relational Operatoe -----------");

/* >,>=, <,<= ,!=
equqlity 

1.loose equqlity ==

In loose equality value will coearced (type will convert first )then compare

2.strict equqlity === recomanded in playwright 
--------------------------------------------
Value will comapare as it is and no type coersion is not applicable 

*/
//loose equality
console.log("100"== 100);// true - loos equality -string convert into number internally called type coersion (Type casting) we dont fallow in automation
console.log(null == undefined); //true

//strict equality 
console.log("100"=== 100); // false
console.log(null === undefined); //false

console.log("------Logical operator--------");
/*
c1     c2    &&    ||   !C1 (not)
T       T     T     T   F    
T       F     F     T   F
F       T     F     T   T
F       F     F     F   T
*/


























