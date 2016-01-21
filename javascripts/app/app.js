/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#year').text(new Date().getFullYear())
}

