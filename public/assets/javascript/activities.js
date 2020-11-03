var $activityContainer = $(".activity-container");

$(document).on("click", "button.delete", deleteActivity);
$(document).on("submit", ".add-activities", insertActivity);

var acts = [];

getActs();

function initializeRows() {
  $activityContainer.empty();
  var rowsToAdd = [];
  for (var i = 0; i < acts.length; i++) {
    rowsToAdd.push(createNewRow(acts[i]));
  }
  $activityContainer.prepend(rowsToAdd);
}
function getActs() {
  $.get("api/activities", function (data) {
    acts = data;
    initializeRows();
  });
}

function deleteActivity(event) {
  event.stopPropagation();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/activities/" + id
  }).then(getActs);
}

function createNewRow(act) {
  var $newInputRow = $(
    [ // "<button class='delete btn btn-danger'>x</button>",

      "<tr>",
      "<td>",
      act.action_item,
      "</td>",
      "<td>",
      act.jobLocation,
      "</td>",
      "<td>",
      "<a href = "+act.resume_file_submitted+">",
      act.resume_file_submitted,
      "</a>",
      "</td>",
      "<td>",
      act.due_date,
      "</td>",
      "<td>",
      act.date_applied,
      "</td>",
      "<td>",
      act.interview_date,
      "</td>",
      "<td>",
      "<button class='delete btn btn-danger'>x</button>",
      "</td>",
      "</tr>"

    ].join("")
  );

  $newInputRow.find("button.delete").data("id", act.id);
  $newInputRow.data("act", act);
  return $newInputRow;
}

function insertActivity(event) {
  event.preventDefault();
  var act = {
    text: $newItemInput.val().trim(),
    complete: false
  };

  $.post("/api/activities", act, getActs);
  $newItemInput.val("");
}
// When user clicks add-btn
$("#add-btn-act").on("click", function (event) {
  event.preventDefault();

  // Make a newBook object
  var newActivity = {
    action_item: $("#action-item").val().trim(),
    jobLocation: $("#job-location").val().trim(),
    resume_file_submitted: $("#resume-url").val().trim(),
    due_date: $("#due-date").val().trim(),
    date_applied: $("#date-applied").val().trim(),
    interview_date: $("#interview-date").val().trim()
  };

  console.log(newActivity);

  // Send an AJAX POST-request with jQuery
  $.post("api/activities/new", newActivity)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#action-item").val("");
  $("#job-location").val("");
  $("#resume-url").val("");
  $("#due-date").val("");
  $("#date-applied").val("");
  $("#interview-date").val("");

  $.get("api/activities", function (data) {
    acts = data;
    console.log(data);
    initializeRows();
  });
});
