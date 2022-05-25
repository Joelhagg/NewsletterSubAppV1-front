console.log("Login test");

let user = {};

document.getElementById("loginButton").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;

  console.log(userEmail, userPassword);
});
