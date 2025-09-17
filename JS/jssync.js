function register(){
  waitforfiveseconds();
  console.log("register end");
}

function sendEmail(){
  waitforfiveseconds();
  console.log("Send Email end");
}

function login(){
  waitforfiveseconds();
  console.log("login end");
}

function getData(){
  waitforfiveseconds();
  console.log("get Data end");
}

function displayData(){
  waitforfiveseconds();
  console.log("display Data end");
}

function waitforfiveseconds(){
  const ms = new Date().getTime() + 5000;
  while(new Date().getTime() < ms){}
}

register();
sendEmail();
login();
getData();
displayData();
console.log("Call other application");