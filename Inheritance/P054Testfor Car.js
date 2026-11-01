import {BMW} from "./P052 BMW.js"
import { Audi } from "./P053-audi.js"
import { Car } from "./P051-car.js"

let C1 = new Car(); // Parent Class individualy metode access
C1.Start();
C1.refil();
C1.stop();

const C2 = new BMW();
C2.autoEngine();// individual method 
C2.Start();// inherited method 
C2.refil();//inherited Method
C2.stop(); // inherited method

const C3 = new Audi();
C3.autoGare();// individual method
C3.Start(); // inherited method
C3.stop();// inherited method
C3.refil();// inherited method



