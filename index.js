//Variables
const error = document.getElementById("error");
const form = document.querySelector("form");
const input = document.getElementById("input");
const send = document.getElementById("send");

send.addEventListener("click", e => {
  e.preventDefault();

  if (input.value == "") {
    error.style.display = "block";
    input.style.borderColor = "hsl(354, 100%, 66%)";
    error.innerHTML = "Email cannot be empty!";
  } else {
    error.style.display = "none";
    input.style.borderColor = "hsl(0, 0%, 59%)";
  }

  if (input.validity.valid === false) {
    error.style.display = "block";
    input.style.borderColor = "hsl(354, 100%, 66%)";
    error.innerHTML = "Please provide a valid email address";
  }
});
