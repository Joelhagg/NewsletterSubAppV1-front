let user = {};
let registerResponseFromServer = {};

document.getElementById("registerButton").addEventListener("click", (e) => {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let subOnNewsletter = false;

  if (document.getElementById("newsletterCheckbox").checked) {
    subOnNewsletter = true;
  } else {
    subOnNewsletter = false;
  }

  console.log(userName, userEmail, userPassword, subOnNewsletter);

  let user = {
    name: userName,
    email: userEmail,
    password: userPassword,
    subOnNewsletter: subOnNewsletter,
  };

  const postUser = async () => {
    try {
      await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((result) => (registerResponseFromServer = result));

      console.log(registerResponseFromServer);
      if (registerResponseFromServer.message == "Användaren är registrerad!") {
        window.alert("Du har registrerat dig!!!");
        return (window.location.href = "../login/login.html");
      }
      if (
        registerResponseFromServer.message == "Användaren är redan registrerad"
      ) {
        window.alert("Användaren är redan registrerad");
        location.reload();
        return;
      }
    } catch (error) {
      console.error("Error ", error);
    }
  };

  postUser();
  e.preventDefault();
});
