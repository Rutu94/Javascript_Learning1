/*

Switch case we can handle multiple condition where  key == value

break is applicable for  loop and switch 
break will exit the control from swich block and loop 


switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

let dayofweek = "Tuesday".toLocaleLowerCase();
switch (dayofweek) 
{
    case  'monday':
        console.log("Monday");
        break;
    case  "tuesday" :
    console.log("tuesday");
         break;
    case  "wedensday":
        console.log("Wedensday");
        break;
    case  "thuresday" :
        console.log("thruesday");
        break;
    case  "friday":
         console.log("friday");
        break;
    case  "Saturday" :
            console.log("saturday");
        break;
    case  "Sunday" :
           console.log("Sunday");
        break;
    default:
        console.log("invalid day");
        
        break;
}

