$(function () {

  $("#moreBurger").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addBurger").val().trim(),
      devoured: "0"
    };
    console.log(newBurger)

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

  // devour burger
  $("#devouredBurger").on("click", function () {
    var id = $(this).data("id");
    let eatBurger = {
      devoured: "1"
    }
    console.log(eatBurger);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatBurger
    }).then(
      function () {
        console.log("nom nom nom");
        location.reload();
      }
    );
  });


})