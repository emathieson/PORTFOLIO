// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function() {
  $('#arrow').hover(function() {
    $('#scroll').fadeTo("slow", 0.9);
  }, function() {
    // on mouseout, reset the background colour
    $('#scroll').fadeOut("slow", 0);
  });
});