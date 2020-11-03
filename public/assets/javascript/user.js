$(document).ready(function () {
    // GET request for which user is logged in
    $.get("/auth/user_data").then(function (data) {
      $(".member-name").text(data.email);
    });
  });
  