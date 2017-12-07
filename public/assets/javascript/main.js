$(document).ready(function() {
  // logic for eating a burger
  $('.nom-btn').on('click touch', function() {
    $.ajax("/api/eat/" + $(this).data("id"), {
      type: "PUT",
      data: {eaten: true}
    }).then(function() {
      console.log("Burger eaten");
      location.reload();
    });
  });

  $('#sub-btn').on('click touch', function() {
    var new_name = $('#name').val();
    $.ajax("/api/order", {
      type: "POST",
      data: {name: new_name}
    }).then(function() {
      console.log("Burger added");
      location.reload();
    });
  });
});
