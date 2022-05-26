console.log("Login test");

document.getElementById("loginButton").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let loginUserInformation = {};

  console.log(userEmail, userPassword);

  let user = {
    email: userEmail,
    password: userPassword,
  };

  const postLogin = async () => {
    try {
      await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((result) => (loginUserInformation = result));
      console.log(loginUserInformation);
    } catch (error) {
      console.log("error ", error);
    }
    if (loginUserInformation == "Fel lösenord") {
      window.alert("Du har angett fel mejladress eller lösenord");
      location.reload();
      return console.log("fel lösenord");
    } else {
      localStorage.setItem(
        "loginUserInformation",
        JSON.stringify(loginUserInformation)
      );
      window.location.href = "../index.html";
    }
  };

  postLogin();
});
