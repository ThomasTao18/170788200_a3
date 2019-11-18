function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateField(value) {
  var re = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

  var test = re.test(value);

  console.log(test);
  return test;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  test = validateField(username);

  if (!test) {
    alert("Invalid username.");

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  test = validateField(password);

  if (!test) {
    alert("Invalid password.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}
