$(document).ready(function() { //when the document is ready,
  $("#registrationForm").on("submit", function(e) { // using jquery, look for an id "registerEmail" on the "submit" and run the function(e),
    if($("#registerEmail").val().length === 0) { //
      alert("Please enter an email");
      return false;
    } else if($("#registerPassword").val().length === 0) {
      alert("Please enter a password");
      return false;
    } else {
      return true;
    }
  });
});