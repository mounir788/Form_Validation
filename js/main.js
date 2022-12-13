

form.addEventListener("submit", submitData);

function submitData(e) {
  e.preventDefault();
  
  const form = document.getElementById("form");
  const payload = new FormData(form);
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const cPassword = document.getElementById("confirm-password").value;

  if (/^[a-z]+[0-9]*[a-z]+$/gim.test(userName) && password === cPassword) {
    fetch("https://goldblv.com/api/hiring/tasks/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((res) => console.log(res))
      .then((data) => {
        console.log(data);
        console.log(payload)
      })
      .catch((error) => alert(error));
  } else {
    if (!/^[a-z]+[0-9]*[a-z]+$/gim.test(userName)) {
      alert("User name should be in this pattern a-z+numbers+a-z");
    }
    if (password !== cPassword) {
      alert("Password not match");
    }
  }
}
