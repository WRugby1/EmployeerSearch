var $companyContainer = $(".company-container");
var $newItemInput = $("input.new-item");


$(document).on("click", "button.delete", deleteCompany);
$(document).on("submit", ".add-company", insertCompany);
$(document).on("click", ".comp-name", sortCompany);
$(document).on("click", "button.edit", editCompany);
var comps = [];

// getComps([["co_name", "ASC" ]] );
getComps();

function initializeRows() {
  $companyContainer.empty();
  var rowsToAdd = [];
  for (var i = 0; i < comps.length; i++) {
    rowsToAdd.push(createNewRow(comps[i]));
  }
  $companyContainer.prepend(rowsToAdd);
}
function getComps(sort) {
  if (!sort) {
    sort = [];
  }
  $.get("/api/companies",
   // { order: sort },
    function (data) {
      comps = data;
      // console.log(data);
      initializeRows();
    });
}
//deleting entries
function deleteCompany(event) {
  event.stopPropagation();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/companies/" + id
  }).then(getComps);
}
//editing company
function editCompany() {
  var currentCompany = $(this).data("comps");
  console.log(comps);
  $(this).children().hide();
  console.log(currentCompany);
  $(this).children("input.edit").val(comps.currentCompany.co_name);
  console.log("Helo3");
  $(this).children("input.edit").show();
  $(this).children("input.edit").focus();
}
console.log("hello4");

function finishEdit(event) {
  var updatedCompany = $(this).data("comp");
  if (event.which === 13) {
    updatedCompany.co_name = $(this).children("input").val().trim();
    $(this).blur();
    updatedCompany(updatedCompany);
  }
}

function updatedCompany(comp) {
  $.ajax({
    method: "PUT",
    url: "/api/companies",
    data: comp
  }).then(getComps);
}

function cancelEdit() {
  var currentCompany = $(this).data("comp");
  if (currentCompany) {
    $(this).children().hide();
    $(this).children("input.edit").val(currentCompany.co_name);
    $(this).children("span").show();
    $(this).children("button").show();
  }
}
//displaying data on screen
function createNewRow(comp) {
  var $newInputRow = $(
    [
      "<tr>",
      "<td>",
      comp.co_name,
      "</td>",
      "<td>",
      "<a href = "+comp.co_url+">",
      comp.co_url,
      "</a>",
      "</td>",
      "<td>",
      comp.co_email,
      "</td>",
      "<td>",
      comp.co_phone,
      "</td>",
      "<td>",
      comp.co_address,
      "</td>",
      "<td>",
      comp.co_city,
      "</td>",
      "<td>",
      comp.co_state,
      "</td>",
      "<td>",
      comp.priority,
      "</td>",
      "<td>",
      //"<button class='edit btn btn-primary'>Edit</button>",
      "</td>",
      "<td>",
      "<button class='delete btn btn-danger'>x</button>",
      "</td>",
      "</tr>"



    ].join("")
  );

  $newInputRow.find("button.delete").data("id", comp.id);
  $newInputRow.data("comp", comp);
  return $newInputRow;
}

function insertCompany(event) {
  event.preventDefault();
  var comp = {
    co_name: $newItemInput.val().trim(),
    complete: false
  };

  $.post("/api/companies", comp, getComps);
  $newItemInput.val("");
};

function sortCompany(event) {
  event.stopPropagation();
  var order = ["co_name", "ASC"];
  getComps();

};



//   function displayEmpty(id) {
//     var query = window.location.search;
//     var partial = "";
//     if (id) {
//       partial = " for Company #" + id;
//     }
//   $companyContainer.empty();
//   var messageH2 = $("<h2>");
//   messageH2.css({ "text-align": "center", "margin-top": "50px" });
//   messageH2.html("No addition yet" + partial + ", navigate <a href='/cms" + query +
//   "'>here</a> in order to get started.");
//   $companyContainer.append(messageH2);
// }


// When user clicks add-btn
$("#add-btn-com").on("click", function (event) {
  event.preventDefault();

  // Make a newBook object
  var newCompany = {
    co_name: $("#company-name").val().trim(),
    co_url: $("#job-url").val().trim(),
    co_email: $("#company-email").val().trim(),
    co_phone: $("#company-phone").val().trim(),
    co_address: $("#company-address").val().trim(),
    co_city: $("#company-city").val().trim(),
    co_state: $("#company-state").val().trim(),
    priority: $("#priority").val().trim()
  };

  console.log(newCompany);

  // Send an AJAX POST-request with jQuery
  $.post("api/companies/new", newCompany)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#company-name").val("");
  $("#job-url").val("");
  $("#company-email").val("");
  $("#company-phone").val("");
  $("#company-address").val("");
  $("#company-city").val("");
  $("#company-state").val("");
  $("#company-priority").val("");

  $.get("api/companies", function (data) {
    comps = data;
    console.log(data);
    initializeRows();
  });



});

// $("#nameId").on("click", function() {
//   $.get("api/companiessortedname", function(data) {
//     comps = data;
//     console.log(data);
//     initializeRows();
//   });
// });



// $.get("/api/companies", function (data) {
//   console.log("AllCompanies", data);
//   var ourSelectElement = $("<select>");
//   for (var i = 0; i < data.length; i++) {
//     var theOption = $("<option value='" + data[i].id + "'>" + data[i].co_name + "</option>")
//     ourSelectElement.append(theOption);
//   }
//   $("#allCompaniesDropdown").append(ourSelectElement);
// });

// $.get("/api/companies", function (data) {
//   console.log("AllCompanies", data);
//   var ourSelectElement = $("<tbody>");
//   for (var i = 0; i < data.length; i++) {
//     var theOption = $("<th value ='+data[i].id + ' >" + data[i].co_name + "</th>")
//     ourSelectElement.append(theOption);
//   }
//   $("<tbody>").append(ourSelectElement);
// });

// $.get("/api/companies", function (data) {
//   console.log("AllCompanies", data);
//   var ourSelectElement = $(".data");
//   for (var i = 0; i < data.length; i++) {
//     var theOption = $(".data" + data[i].co_name + ".data")
//     ourSelectElement.append(theOption);
//   }
//   $(".data").append(ourSelectElement);
// });

// $.get("/api/companies", function initializeRows(data) {
//   console.log("AllCompanies", data);
//   var ourSelectElement = $("<tbody>");


//   ourSelectElement.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < data.length; i++) {
//       rowsToAdd.push(createNewRow(data[i].co_name));
//     }
//     ourSelectElement.append(rowsToAdd);

//     function createNewRow(post) {

//       $("<tbody>").append(ourSelectElement);

//     }


  // for (var i = 0; i < data.length; i++) {
  //   var theOption = $("<th value ='+data[i].id + ' >" + data[i].co_name + "</th>")
  //   ourSelectElement.append(theOption);
  // }
  // $("<tbody>").append(ourSelectElement);

  // function displayEmpty(id) {
  //   var query = window.location.search;
  //   var partial = "";
  //   if (id) {
  //     partial = " for Author #" + id;
  //   }
  //   blogContainer.empty();
  //   var messageH2 = $("<h2>");
  //   messageH2.css({ "text-align": "center", "margin-top": "50px" });
  //   messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
  //   "'>here</a> in order to get started.");
  //   blogContainer.append(messageH2);
  // }