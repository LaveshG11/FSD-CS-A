function hello(user = "Guest"){
  console.log(`Hello ${user}`);
}

function sum(a, b){
  console.log("Before execution");
  return a+b;
}

const add = (a,b) => {
  return a+b;
}

hello();
hello('Lavesh');
console.log(sum(5,10));
console.log(add(8,10));


// IIFE : Immediately Invoked Function Expression
(function(){
  console.log("Inside IIFE");
})();

// Callback Function
function f1(user, Callback){
  console.log(`Hello ${user}`);
  Callback();
}

f1('admin', () => {
  console.log(add(3, 5));
});