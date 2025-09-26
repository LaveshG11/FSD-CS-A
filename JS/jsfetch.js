const username = "LaveshG11";
// const url = `https://api.github.com/users/${username}`;
const url = `https://dummyjson.com/users?limit=3`;
const pr = fetch(url);
pr.then((response) => {
  return response.json();
})
  .then((data) => {
  data.users.forEach(element => {
    console.log(element.firstName);
         })})
  .catch((error) => {
    console.log('Error:', error.message);
  })
  .finally(() => {
    console.log("Inside Finally block");
  })