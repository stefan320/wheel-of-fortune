"use strict";
const errorName = document.getElementById("error_name");
const errorSurname = document.getElementById("error_surname");
const errorEmail = document.getElementById("error_email");
const form = document.getElementById("form");

let formIsTouched = form.dataset.formistouched;

// Form Validation Methods
const notEmpty = (input) => input.length > 0;

const validEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Handlers
const formSubmitHandler = (event) => {
  formIsTouched = true;
};

const strValidHadndler = (event) => {
  if(!formIsTouched) return;
  
  if ( notEmpty(event.target.value)  ) {
    event.target.nextElementSibling.style.display= "none";
  } else {
    event.target.nextElementSibling.style.display= "block";
  }
}

const emailValidHadndler = (event) => {
  if(!formIsTouched) return;
  
  if ( validEmail(event.target.value) ) {
    console.log("valid email")
    errorEmail.style.display = "none";
  } else {
    console.log("invalidd");
    errorEmail.style.display = "block";
  }
}