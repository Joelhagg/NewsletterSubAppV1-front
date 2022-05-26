console.log("test");

let isAuth = false;
let loggedInConatiner = document.getElementById("loggedInConatiner");
let registerLoginContainer = document.getElementById("registerLoginContainer");
let checkboxDiv = document.getElementById("checkboxDiv");
let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "subCheckbox");

const initApp = () => {
  let localStorageUserString = localStorage.getItem("loginUserInformation");
  let localStorageUserParsed = JSON.parse(localStorageUserString);
  console.log("localStorageUser", localStorageUserParsed);

  if (localStorageUserParsed) {
    isAuth = true;

    if (localStorageUserParsed.subOnNewsletter) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }

  if (isAuth) {
    loggedInConatiner.classList.remove("isAuth");
    registerLoginContainer.classList.add("isAuth");

    checkboxDiv.append(checkbox);
  } else {
    loggedInConatiner.classList.add("isAuth");
    registerLoginContainer.classList.remove("isAuth");
  }

  document
    .getElementById("checkboxForNewsletterButton")
    .addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click");

      let subOnNewsletter = false;

      if (document.getElementById("subCheckbox").checked) {
        subOnNewsletter = true;
      } else {
        subOnNewsletter = false;
      }

      let putUser = {
        _id: localStorageUserParsed.id,
        subOnNewsletter: subOnNewsletter,
      };

      const sendSubValue = async () => {
        try {
          await fetch("http://localhost:3000/register", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(putUser),
          })
            .then((response) => response.json())
            .then((result) => console.log(result));
        } catch (error) {}

        let updatedUser = {
          id: localStorageUserParsed.id,
          subOnNewsletter: subOnNewsletter,
        };
        localStorage.setItem(
          "loginUserInformation",
          JSON.stringify(updatedUser)
        );
        window.alert("Du har ändrat din prenumation!");
        location.reload();
      };

      sendSubValue();
    });

  document.getElementById("logOutButton").addEventListener("click", () => {
    console.log("click");
    localStorage.clear();
    isAuth = false;
    location.reload();
  });
};

initApp();
