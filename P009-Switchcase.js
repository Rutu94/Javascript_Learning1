
/*
Switch Case
-----------------
Using Switch case we can handle multiple conditions where Key===value

break
------------
- break is applicable for loop and switch
- break will exit the control from switch block or loop


key===value

syntax:
===========

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//traffic signal

let color="blue".toLowerCase();

switch (color) {
    case 'green':
        console.log("GO");
        break;
    case 'red':
            console.log("STOP");
        break;
    case 'yellow':
        console.log("READY");
        break;

    default:
        console.log("Color Error!");
        
      
}

console.log("--------------");

//Browser validation

let browserName="CHROME";

switch (browserName)
 {
    case "chrome":
        case "CHROME":
        console.log("Test is executing on "+browserName);
        break;
    case "edge":
        console.log("Test is executing on "+browserName);
        break;
    case "firefox":
        console.log("Test is executing on "+browserName);
        break;

    default:
        console.log("Browser not match test case executing on default browser chrome");
        break;
}


/*-----------------------------------------------------*/

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

