// a = u, b 

console.log(a); //hoisting
var a;
var b = 10;
var c = 7;

{
  let d = 11;
  const f = 10;
  console.log(b);
   console.log(c);
    console.log(d);
    // f++;
    console.log(f);
}
console.log(b);
console.log(c);
// console.log(d);
console.log(f);