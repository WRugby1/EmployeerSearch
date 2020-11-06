$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/auth/user_data").then(function (data) {
    $("#card-email").text(data.email);
  });

});
