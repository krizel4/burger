$(function () {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: '0'
    };
    console.log(newBurger)

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured") === false;

    var newDevouredState = {
      devoured: newDevoured
    };
    console.log('id:' + id)
    console.log('devoured:' + newDevouredState.devoured)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function () {
        console.log("changed devoured state to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})