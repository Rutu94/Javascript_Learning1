
import { toolName,getData,StudentData} from "./P046_ModuleImportExport.js"
import { employees } from "./P045_ArrayMethodsBasedOnCallBack.js";


//call
console.log(toolName);

getData("Rahul");

const s1=new StudentData(1,"Seema","Testing");
s1.getInfo();
console.log(s1.sid);

employees.forEach((emp)=>{
    console.log(emp);
    
})