let statuscode = 200;
let resposecode = 450;

if (statuscode === 200)
{
    if (resposecode >=100 && resposecode<=199)
        {
        console.log("informational")
        
        }
    else if(resposecode >=200 && resposecode<=299)
       {
console.log("Succesfull")
       }
    else if (resposecode >=300 && resposecode<=399)
      {
      console.log("Redirectional")
     
      }
        else if (resposecode >=400 && resposecode<= 499)
        {
console.log("Clienteroor");

        }
         else if (resposecode >=500 && resposecode<= 599)
        {
      console.log("Servererror");
        }
         else
        {
        console.log("unknow STATUS");

        }
    
      

}