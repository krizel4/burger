$(function () {

  // devour burger
  $("#devouredBurger").on("click", function () {
    var id = $(this).data("id");
    let eatBurger = {
      devoured: true
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

  $("#moreBurger").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false
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
})