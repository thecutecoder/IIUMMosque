function validate(){
var uname = document.myForm.name;
var umatric = document.myForm.matric;
var uemail = document.myForm.email;
var uphone = document.myForm.phone;


  if(allLetter(uname))
  {
  if(validmatric(umatric))
  {
  if(ValidateEmail(uemail))
  {
  if(validphone(uphone))
  {
    alert("Thank you for registering. Your submission have been recieved!");
  }
  }
  }
  }

  return false;
} //end if

function allLetter(uname)
  {
    var letters = /^[A-Za-z ]+$/;
    if(uname.value.match(letters))
    {
      return true;
    }
    else
    {
      alert('Name must have alphabet characters only');
      uname.focus();
      return false;
  }
}//end allLetter

function validmatric(umatric)
  {
    var numbers = /^\d{7}$/;
    if(umatric.value.match(numbers))
    {
      return true;
    }
    else
    {
      alert('Matric no must have numeric characters only and must be 7 digits');
      umatric.focus();
      return false;
    }
} //end validmatric

function ValidateEmail(uemail)
  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
      return true;
    }
    else
    {
      alert("You have entered an invalid email address!");
      uemail.focus();
      return false;
    }
}//end ValidateEmail

function validphone(uphone)
  {
    var numbers = /^\d{10}$/;
    if(uphone.value.match(numbers))
  {
    return true;
  }
  else
  {
    alert('Phone no must have numeric characters only and must be 10 digits');
    uphone.focus();
    return false;
  } //end validphone
}
