$(document).ready(function()  {
  $("form#some-form").submit(function(event) {

  var first = $("#itemOne").val();
  var second = $("#itemTwo").val();
  var third = $("#itemThree").val();
  var fourth = $("#itemFour").val();
  var fifth = $("#itemFive").val();
  var sixth = $("#itemSix").val();

  var list = [first, second, third, fourth, fifth, sixth];
  list.sort();
  list.forEach(function(data) {
$("ul").append("<li>" + data + "</li>");

  event.preventDefault();
  });
});
});
