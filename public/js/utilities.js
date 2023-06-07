"use strict";

let formIsTouched = false;

// Form Validation Methods
const notEmpty = (input) => input.length > 0;

const validEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};


// DOM Functions
const showErrorMsg = (targetEl, errorMsg) => {
  if (targetEl.nextElementSibling) {
    return;
  }
  const errorDiv = `<div class="mt-1 color-danger">${errorMsg}</div>`;
  targetEl.insertAdjacentHTML('afterend', errorDiv);
}


// Handlers
const formSubmitHandler = (event) => {
  // event.preventDefault();
  formIsTouched = true;

  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const email = document.getElementById("email");

  notEmpty(name.value) || showErrorMsg(name, "A valid name is required");
  notEmpty(surname.value) || showErrorMsg(surname, "A valid surname is required");
  validEmail(email.value) || showErrorMsg(email, "A valid email is required");
};

const strValidHadndler = (event) => {
  if(!formIsTouched) return;
  
  if ( notEmpty(event.target.value) && event.target.nextElementSibling ) {
    event.target.nextElementSibling.remove();
  } else {
    notEmpty(event.target.value) || showErrorMsg(event.target, `A valid ${event.target.name} is required`);
  }
}

const emailValidHadndler = (event) => {
  if(!formIsTouched) return;
  
  if ( validEmail(event.target.value) && event.target.nextElementSibling ) {
    event.target.nextElementSibling.remove();
  } else {
    validEmail(event.target.value) || showErrorMsg(event.target, `A valid ${event.target.name} is required`);
  }
}