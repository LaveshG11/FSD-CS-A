// // CalllBack Hell


// function register(cb){
//   setTimeout(() => {
//     console.log("register end");
//   },2000);
//   cb();
// }

// function sendEmail(cb){
//   setTimeout(() => {
//     console.log("Send Email end");
//   },2000); 
//   cb();
// }

// function login(cb){
//   setTimeout(() => {
//     console.log("login end");
//   },2000);

//   cb();
// }

// function getData(cb){
//   setTimeout(() => {
//     console.log("get Data end");
//   },2000);
//   cb();
// }

// function displayData(){
//   setTimeout(() => {
//     console.log("display Data end");
//   },2000);
// }


// register(() => {
//   sendEmail(() => {
//     login(() => {
//       getData(() => {
//         displayData();
//       })
//     })
//   })
// });


// Using Promises

function register(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("register end");
      resolve();
    },2000);
  })
}

function sendEmail(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("send email end");
      resolve();
    },2000);
  })
}

function login(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("login end");
      reject('login failed');
    },2000);
  })
}

function getData(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("get data end");
      resolve();
    },2000);
  })
}

function displayData(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("display data end");
      resolve();
    },2000);
  })
}

// register().then(sendEmail)
//           .then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err) => {
//             console.log('Error:' + err)
//           })
//           .finally(()=>{console.log('Inside Finally')})


//  Using Async Await
async function f1() {
  try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
  }
  catch(err){
    console.log('Error :' + err);
  }
}

f1();
console.log("Call other application");