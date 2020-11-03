$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstNameInput = $("input#firstName");
  var lastNameInput = $("input#lastName");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var confirmPasswordInput = $("input#confirmPassword-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      confirmPassword: confirmPasswordInput.val().trim()


    };

    // console.log(userData);


    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.confirmPassword) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.email, userData.password, userData.confirmPassword);
    firstNameInput.val("");
    lastNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    confirmPasswordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, email, password, confirmPassword) {
    $.post("/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }).then(function (data) {
      console.log(data.path);
      console.log(location);
      // window.location.replace(location.origin + data.path);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
