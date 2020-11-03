
// When user clicks add-btn
$(document).ready(function () {

  $("#new-company-btn").on("click", function (event) {
    console.log("company-form button hit 1");
    event.preventDefault();
    console.log("company-form button hit");
    // Make a newCompany object
    var newCompany = {
      coName: $("#coName").val().trim(),
      coJobsUrl: $("#coJobsUrl").val().trim(),
      coPriority: $("#coPriority").val().trim()
    };
    console.log("new company");
    console.log(newCompany);
    // Send an AJAX POST-request with jQuery
    $.post("/api/newCo", newCompany)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        console.log("the post came back from /api/newCo");
        console.log(data);
        console.log("the post came back from /api/newCo");
      });

    // Empty each input box by replacing the value with an empty string
    $("#coName").val("");
    $("#coJobUrl").val("");
    $("#coPriority").val("");
  });

  $.get("/api/companies", function (data) {
    console.log("AllCompanies", data);
    var ourSelectElement = $("<select>");
    for (var i = 0; i < data.length; i++) {
      var theOption = $("<option value='" + data[i].id + "'>" + data[i].coName + "</option>")
      ourSelectElement.append(theOption);
    }

    $("#allCompaniesDropdown").append(ourSelectElement);
  });
});
