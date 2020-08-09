function validateform(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matric = document.getElementById("matric").value;
  var inquiry = document.getElementById("inquiry").value;
  var error_message=document.getElementById("error_message");
  var text;


  error_message.style.padding = "10px";

  if(name.length <5 ){
    text= "Please enter a valid name";
    error_message.innerHTML= text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length<6){
    text= "Please enter a valid email address ";
    error_message.innerHTML= text;
    return false;
  }
  if(isNaN(matric) || matric.length!=7){
    text= "Please enter a valid matric number (7 digits)";
    error_message.innerHTML= text;
    return false;
  }
  if(inquiry.length <= 20){
    text= "Please enter more than 20 characters in your inquiry";
    error_message.innerHTML= text;
    return false;
  }

  alert("Thank you for inquiring, our staff will get back to you within 3 working days.")
  return true;

}
