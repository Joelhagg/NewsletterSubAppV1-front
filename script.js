console.log("test");

let isAuth = false;
let loggedInConatiner = document.getElementById("loggedInConatiner");
let registerLoginContainer = document.getElementById("registerLoginContainer");

const initApp = () => {
  let localStorageUserString = localStorage.getItem("loginUserInformation");
  let localStorageUserParsed = JSON.parse(localStorageUserString);
  console.log("localStorageUser", localStorageUserParsed);

  if (localStorageUserParsed) {
    isAuth = true;
  }

  if (isAuth) {
    loggedInConatiner.classList.remove("isAuth");
    registerLoginContainer.classList.add("isAuth");
  } else {
    loggedInConatiner.classList.add("isAuth");
    registerLoginContainer.classList.remove("isAuth");
  }

  document.getElementById("logOutButton").addEventListener("click", () => {
    console.log("click");
    localStorage.clear();
    isAuth = false;
    location.reload();
  });
};

initApp();
