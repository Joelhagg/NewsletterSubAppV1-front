let user = {};

document.getElementById("registerButton").addEventListener("click", () => {
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
        .then((result) => {
          console.log("Success ", result);
        });
    } catch (error) {
      console.error("Error ", error);
    }
  };

  postUser();
});
