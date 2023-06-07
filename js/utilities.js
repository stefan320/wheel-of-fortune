// Form Validation Methods
const isEmpty = (input) => input.length === 0;

const isValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  

  module.exports = { isEmpty, isValidEmail }