$(document).ready(function() {
  var number2 = 274;
  var counter = 1;
  var id = setInterval(function() {
    $('.counter .counter-container .digit-container h4:nth-of-type(2n)').text(counter);
    counter++;
    if (counter > number2) {
      clearInterval(id);
    }
  }, 0.01);
});
