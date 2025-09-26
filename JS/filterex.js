import {add, mul} from "../JS/mathModule.js";


const num = [1,2,3,4,5,6,7,8,9];
const even = num.filter((n) => n % 2 === 0)
                .map((n) => n**2)
                .reduce((n,s) => n+s,0);
console.log(even);

console.log("sum:" , add(3,9));
console.log("Multiply:" , mul(3,9));