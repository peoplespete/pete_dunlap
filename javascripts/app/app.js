/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $("header").slideDown( 1000, function() {
    // Animation complete.
  });
}

