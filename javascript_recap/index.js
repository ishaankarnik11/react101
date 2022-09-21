
import name from "./one.js";
import {last, age} from "./two.js";

const a = name =>(console.log(`hello ${name}!!`));

a("ishaan");

console.log(name);
console.log(last);
console.log(age);