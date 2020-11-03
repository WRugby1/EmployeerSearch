var $jobContainer = $(".job-container");


$(document).on("click", "button.delete", deleteJob);
$(document).on("submit", ".add-job_details", insertJob);

var jobs = [];

getJobs();

function initializeRows() {
  $jobContainer.empty();
  var rowsToAdd = [];
  for (var i = 0; i < jobs.length; i++) {
    rowsToAdd.push(createNewRow(jobs[i]));
  }
  $jobContainer.prepend(rowsToAdd);
}
function getJobs() {
  $.get("api/jobOpenings", function (data) {
    jobs = data;
    initializeRows();
  });
}

function deleteJob(event) {
  event.stopPropagation();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/jobOpenings/" + id
  }).then(getJobs);
}

function createNewRow(job) {
  var $newInputRow = $(
    [ // "<button class='delete btn btn-danger'>x</button>",

      "<tr>",
      "<td>",
      job.jobTitle,
      "</td>",
      "<td>",
      job.co_name,
      "</td>",
      "<td>",
      "<a href = "+job.jobPost_url+">",
      job.jobPost_url,
      "</a>",
      "</td>",
      "<td>",
      job.jobLocation,
      "</td>",
      "<td>",
      job.jobPriority,
      "</td>",
      "<td>",
      "<a href = "+job.resume_file_submitted+">",
      job.resume_file_submitted,
      "</a>",
      "</td>",
      "<td>",
      job.jobPostingSource,
      "</td>",
      "<td>",
      job.skillsRequired,
      "</td>",
      "<td>",
      "<button class='delete btn btn-danger'>x</button>",
      "</td>",
      "</tr>"

    ].join("")
  );

  $newInputRow.find("button.delete").data("id", job.id);
  $newInputRow.data("job", job);
  return $newInputRow;
}

function insertJob(event) {
  event.preventDefault();
  var job = {
    text: $newItemInput.val().trim(),
    complete: false
  };

  $.post("/api/jobOpenings", job, getJobs);
  $newItemInput.val("");
}

// The code in add.js handles what happens when the user clicks the "Add " button.

// When user clicks add-btn
$("#add-btn-job").on("click", function (event) {
  event.preventDefault();

  // Make a newBook object
  var newJob = {
    jobTitle: $("#job-title").val().trim(),
    co_name: $("#company-name").val().trim(),
    jobPost_url: $("#jobPost-url").val().trim(),
    jobLocation: $("#job-location").val().trim(),
    jobPriority: $("#job-priority").val().trim(),
    resume_file_submitted: $("#resume-url").val().trim(),
    jobPostingSource: $("#job-source").val().trim(),
    skillsRequired: $("#skills-required").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("api/jobOpenings/new", newJob)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#job-title").val("");
  $("#company-name").val("");
  $("#jobPost-url").val("");
  $("#job-location").val("");
  $("#job-priority").val("");
  $("#resume-url").val("");
  $("#job-source").val("");
  $("#skills-required").val("");

  $.get("api/jobOpenings", function (data) {
    jobs = data;
    console.log(data);
    initializeRows();
  });

});

$.get("/api/companies", function (data) {
  console.log("AllCompanies", data);
  var ourSelectElement = $("#company-name");
  // var ourSelectElement = $("<select class='form-control form-control-md' id = 'company-name'>");
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