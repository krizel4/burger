$(function () {

  // devour burger
  $(".devoured-burger").on("click", function () {
    var id = $(this).data("id");
    let burger = {
      devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burger
    }).then(
      function () {
        console.log("nom nom nom");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false
    };
    // console.log(newBurger)

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
})