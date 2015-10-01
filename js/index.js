$(document).ready(function() {

  var yesCounter = 0;
  var noCounter = 0;

  $("#yesTarget").one("click", function() {
    yesCounter++;
    $("#yesOutput").html(yesCounter)
  });

  $("#noTarget").one("click", function() {
    noCounter++;
    $("#noOutput").html(noCounter)
  });

});