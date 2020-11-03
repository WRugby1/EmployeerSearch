var $contactContainer = $(".contact-container");


// $(document).on("click", "button.delete", deletecontact);
$(document).on("click", "button.delete", deleteContact);
$(document).on("submit", ".add-contacts", insertContact);

var conts = [];

getConts();

function initializeRows() {
  $contactContainer.empty();
  var rowsToAdd = [];
  for (var i = 0; i < conts.length; i++) {
    rowsToAdd.push(createNewRow(conts[i]));
  }
  $contactContainer.prepend(rowsToAdd);
}
function getConts() {
  $.get("api/contacts", function (data) {
    conts = data;
    initializeRows();
  });
}

function deleteContact(event) {
  event.stopPropagation();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/contacts/" + id
  }).then(getConts);
}

function createNewRow(cont) {
  var $newInputRow = $(
    [ // "<button class='delete btn btn-danger'>x</button>",

      "<tr>",
      "<td>",
      cont.first_name,
      "</td>",
      "<td>",
      cont.last_name,
      "</td>",
      "<td>",
      cont.email,
      "</td>",
      "<td>",
      cont.phone_number,
      "</td>",
      "<td>",
      cont.work_phone,
      "</td>",
      "<td>",
      cont.co_name,
      "</td>",
      "<td>",
      "<button class='delete btn btn-danger'>x</button>",
      "</td>",
      "</tr>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", cont.id);
  $newInputRow.data("cont", cont);
  return $newInputRow;
}

function insertContact(event) {
  event.preventDefault();
  var cont = {
    text: $newItemInput.val().trim(),
    complete: false
  };

  $.post("/api/contacts", cont, getConts);
  $newItemInput.val("");
}

// The code in add.js handles what happens when the user clicks the "Add " button.

// When user clicks add-btn

// MARK CHANGES
// $("#new").on("click", function(event) {
$("#add-btn-con").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newContact = {
      first_name: $("#firstName").val().trim(),
      last_name: $("#lastName").val().trim(),
      email: $("#email-input").val().trim(),
      phone_number: $("#contact-phone").val().trim(),
      work_phone: $("#work-phone").val().trim(),
      co_name: $("#company-name").val().trim(),
      CompanyId: $("#company-name").attr("value")

    };
  
    // Send an AJAX POST-request with jQuery
    $.post("api/contacts/new", newContact)
    
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email-input").val("");
    $("#contact-phone").val("");
    $("#work-phone").val("");
    $("#company-name").val("");

    $.get("api/contacts", function(data) {
      conts = data;
      console.log(data);
    });

    // MARK CHANGES

    
  
  });


  $.get("/api/companies", function (data) {
    console.log("AllCompanies", data);
    var ourSelectElement = $("#company-name");
    // var ourSelectElement = $("<select class='form-control form-control-md' id = 'company-name'>");
    // var theOption = $("<option value='' disabled selected>Company Name</option>")
    for (var i = 0; i < data.length; i++) {
    
      var theOption = $("<option value='" + data[i].co_name + "'>" + data[i].co_name + "</option>")
      ourSelectElement.append(theOption);
    }

    $("#theDropDown").append(ourSelectElement);
  });

  // function --> create/return one single html item
  // make call to get all contacts
  // forEach contact return make a function to use that func
  // 