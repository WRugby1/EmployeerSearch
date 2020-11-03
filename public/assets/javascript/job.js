var Messenger = function (el) {
  'use strict';
  var m = this;

  m.init = function () {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Your Solution',
      'To Your Job Hunt',
      'And Management',
      'In One Place!'
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function (length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function () {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function () {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');

    setTimeout(m.animateIn, 200);
  };

  m.init();
}

// console.clear();
var messenger = new Messenger($('#job-hunt'));


$(function pmatch() {
  $("#submit-signup").click(function () {
    var result = true;
    var password = $("#password-input").val();
    var confirmPassword = $("#confirmPassword-input").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email-input").val();
    if (firstName == "") {
      $(".error-message1").text("*First Name can not be empty").fadeIn();
      $(".error-message1").css("color", "red");
      console.log("*empty");
      result = false;
    }
    if (lastName == "") {
      $(".error-message2").text("*Last Name can not be empty").fadeIn();
      $(".error-message2").css("color", "red");
      console.log("*empty");
      result = false;
    }
    if (email == "") {
      $(".error-message3").text("*Email can not be empty").fadeIn();
      $(".error-message3").css("color", "red");
      console.log("*empty");
      result = false;
    }
    if (password == "") {
      $(".error-message4").text("*Password can not be empty").fadeIn();
      $(".error-message4").css("color", "red");
      console.log("*empty");
      result = false;
    }
    if (password != confirmPassword) {
      $(".error-message5").text("* Password do not match").fadeIn();
      $(".error-message5").css("color", "red");
      console.log("* Password do not match");
      result = false;
    }
    if (confirmPassword == "") {
      $(".error-message5").text("*Confirm Password can not be empty").fadeIn();
      $(".error-message5").css("color", "red");
      console.log("*empty");
      result = false;
    }
    else {
      alert("Signup Successful. Login to continue.");
    }
    return result;
  });
});

$(function fname() {
  $("#submit-signup").click(function () {
    var password = $("#password-input").val();
    var confirmPassword = $("#confirmPassword-input").val();
    var firstName = $("#firstName").val()
    var lastName = $("#lastName").val()
    var email = $("#email-input").val()
  });
});


// Hello user

$(function notempty() {
  $("add-btn-com").click(function () {
    var co_name = $("#company-name").val();
    var co_url = $("#job-url").val();
    var co_email = $("#company-email");
    var co_phone = $("#company-phone");
    var co_address = $("#company-address");
    var co_city = $("#company-city");
    var co_state = $("#company-state");
    var priority = $("#priority");
    var result = true;

    if (co_name == "" && co_url == "" && co_email == "" && co_phone == "" && co_address == "" && co_city == "" && co_state == "" && priority == "") {
      $(".error-message").text("All fields can not be empty").fadeIn();
      $(".error-message").css("color", "red");
      result = false;
    }
    return result;

  });
});

      // sort

      // function sortTable(n) {
      //   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;table = document.getElementById("table");
      //   switching = true;
      //   //Set the sorting direction to ascending:
      //   dir = "asc"; 
      //   /*Make a loop that will continue until
      //   no switching has been done:*/
      //   while (switching) {
      //     //start by saying: no switching is done:
      //     switching = false;
      //     rows = table.getElementsByTagName("tr");
      //     /*Loop through all table rows (except the
      //     first, which contains table headers):*/
      //     for (i = 1; i < (rows.length - 1); i++) {
      //       //start by saying there should be no switching:
      //       shouldSwitch = false;
      //       /*Get the two elements you want to compare,
      //       one from current row and one from the next:*/
      //       x = rows[i].getElementsByTagName("td")[n];
      //       y = rows[i + 1].getElementsByTagName("td")[n];
      //       /*check if the two rows should switch place,
      //       based on the direction, asc or desc:*/
      //       if (dir == "asc") {
      //         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //           //if so, mark as a switch and break the loop:
      //           shouldSwitch= true;
      //           break;
      //         }
      //       } else if (dir == "desc") {
      // if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //           //if so, mark as a switch and break the loop:
      //           shouldSwitch= true;
      //           break;
      //         }
      //       }
      //     }
      //     if (shouldSwitch) {
      //       /*If a switch has been marked, make the switch
      //       and mark that a switch has been done:*/
      //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      //       switching = true;
      //       //Each time a switch is done, increase this count by 1:
      //       switchcount ++;      
      //     } else {
      //       /*If no switching has been done AND the direction is "asc",
      //       set the direction to "desc" and run the while loop again.*/
      //       if (switchcount == 0 && dir == "asc") {
      //         dir = "desc";
      //         switching = true;
      //       }
      //     }
      //   }
      // }
