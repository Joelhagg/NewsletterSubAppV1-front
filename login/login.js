console.log("Login test");
localStorage.clear();
document.getElementById("loginButton").addEventListener("click", (e) => {
  e.preventDefault();

  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let loginUserInformation = {};

  let user = {
    email: userEmail,
    password: userPassword,
  };

  const postLogin = async () => {
    try {
      await fetch("https://orca-app-ugjfg.ondigitalocean.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((result) => (loginUserInformation = result));
      if (loginUserInformation) {
        localStorage.setItem(
          "loginUserInformation",
          JSON.stringify(loginUserInformation)
        );
        console.log(loginUserInformation);
        window.alert("Du är inloggad!");
        window.location.href = "../index.html";
      }
    } catch (error) {
      console.log("error ");
      window.alert("Du har angett fel mejladress eller lösenord, försök igen");
      return location.reload();
    }
  };

  postLogin();
});
