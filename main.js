const form = document.getElementById("form");
const givenName = document.getElementById("given-name");
const familyName = document.getElementById("family-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const givenNameValue = givenName.value.trim();
  const familyNameValue = familyName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (givenNameValue === "") {
    // show error
    // add error class
    setErrorFor(givenName, "Given Name cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }
  if (familyNameValue === "") {
    // show error
    // add error class
    setErrorFor(familyNameValue, "Last Name cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }
  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(emailValue, "Please enter a valid email address");
  } else {
    // add success class
    setSuccessFor(username);
  }
  if (passwordValue === "") {
    // show error
    // add error class
    setErrorFor(passwordValue, "Please enter a valid email address");
  } else {
    // add success class
    setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}
