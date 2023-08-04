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
    var input = document.getElementById("given-name");
    input.placeholder = "";
  } else {
    // add success class
    setSuccessFor(givenName);
  }
  if (familyNameValue === "") {
    // show error
    // add error class
    setErrorFor(familyName, "Family Name cannot be blank");
    var input = document.getElementById("family-name");
    input.placeholder = "";
  } else {
    // add success class
    setSuccessFor(familyName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    var input = document.getElementById("email");
    input.placeholder = "example@mail/com";
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
    var input = document.getElementById("password");
    input.placeholder = "";
  } else {
    setSuccessFor(password);
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

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
