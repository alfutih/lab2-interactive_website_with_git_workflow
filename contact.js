const form= document.getElementById("contactForm");

const firstName= document.getElementById("firstName");

const lastName= document.getElementById("lastName");

const email= document.getElementById("email");

const phone= document.getElementById("phone");

const subject= document.getElementById("subject");

const message= document.getElementById("message");

const messageCounter = document.getElementById("messageCounter");

const successMessage = document.getElementById("successMessage");


//Validation functions for name, message and email.
function isNotEmpty (input){
    return input.value.trim().length > 0;
}

function validateName(nameInput){
  return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nameInput.value.trim());
}

function validateMessage(message){
    return message.value.trim().length >= 20;
}

function validateEmail(emailInput) {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}

function validatePhone(phoneInput) {
  const value = phoneInput.value.trim();
  const phonePattern = /^\+?[0-9]+$/;
  return phonePattern.test(value);
}

function validateSubject(subject){
    return(subject.value !=="");
}

function updateMessageCounter(){
    const currentLength = message.value.trim().length;
    const minLength = 20;

    messageCounter.textContent = `${currentLength} / ${minLength} characters`;

    if(currentLength>= minLength){
        messageCounter.classList.add("valid");
    }else{
        messageCounter.classList.remove("valid");
    }

}
//Create function for show error.

function showError(input, message){
    //select the <p> under the input by useing nextElementSibling.
   const errorP = input.nextElementSibling;
   // put text in it
   errorP.textContent = message;
   // Now we add class call "show" in order to be contraled on css.
   errorP.classList.add("show");
   // Now we add red border class to input call "input-error" :
   input.classList.add("input-error");
}

// Create function for clear error
function clearError(input){
    // select the <p> under the input
    const errorP = input.nextElementSibling;
    // remove the text from it
    errorP.textContent = "";
    // Hide it:
    errorP.classList.remove("show");
    //remove red border
    input.classList.remove("input-error");
}

// The problem is when we click submit the browser 
// sends the form, reloads the page and removes all
// JS state. To stop the browser from reloading the page so I can validate the 
// inputs with JS i should use: event.preventDefault();

form.addEventListener("submit", function(event){
    event.preventDefault();

    // Clear old success message when user submits again
    successMessage.textContent = "";
    successMessage.classList.remove("show");

    //This helps me check if all fields are correct before showing the success message
    let isFormValid = true;

    // always update counter
    updateMessageCounter(); 

    //Implement first name validation function
    if(!isNotEmpty(firstName)){
    showError(firstName, "First name is required");
    isFormValid = false;
    } else if(!validateName(firstName)){
        showError(firstName, "Only letters allowed");
        isFormValid = false;
    }
    else{
        clearError(firstName);
    }

    //Implement last name validation function

    if(!isNotEmpty(lastName)){
        showError(lastName, "Last name is required");
        isFormValid = false;
    } else if(!validateName(lastName)){
        showError(lastName, "Only letters allowed");
        isFormValid = false;
    }
    else{
        clearError(lastName);
    }

    //Implement validation email

    if(!isNotEmpty(email)){
        showError(email, "Email is required");
    isFormValid = false;
    } else if(!validateEmail(email)){
        showError(email, "Please enter a valid email address");
    isFormValid = false;
    } else{
        clearError(email);
    }

    // Implement validation phone numbers
    if(isNotEmpty(phone) && !validatePhone(phone)){
        showError(phone, "Only numbers are allowed, optionally starting with +");
    isFormValid = false;
    }else{
        clearError(phone);
    }

    //subject validation
    if(!validateSubject(subject)){
        showError(subject, "Please choose a subject");
    isFormValid = false;
    }else{
        clearError(subject);
    }

    //Implement message validation function
    // The validateMessage function checks if the message length is at least 20 characters and returns true or false. 
    // If it’s false, I handle the error in the submit logic.”

    if(!isNotEmpty(message)){
        showError(message, "Message is required");
    isFormValid = false;
    }
    else if(!validateMessage(message)){
    showError(message, "It must be at least 20 characters");
    isFormValid = false;
    }else {
        clearError(message);
    }

    // implement successful message, reset the form and clear the errors

    if (isFormValid){
        successMessage.textContent= `Thank you ${firstName.value}! I will contact you soon!`;
        successMessage.classList.add("show");

        form.reset();
        updateMessageCounter();

        //Hide success message after 3 seconds
        setTimeout(function(){
            successMessage.textContent= "";
            successMessage.classList.remove("show");
        }, 3000);
    }

});

// I want errors to update while the user types not only when user click submit.

firstName.addEventListener("input", function(){
  if (!isNotEmpty(firstName)) {
    clearError(firstName);
  } else if (!validateName(firstName)) {
    showError(firstName, "Only letters allowed");
  } else {
    clearError(firstName);
  }
});

lastName.addEventListener("input", function(){
  if (!isNotEmpty(lastName)) {
    clearError(lastName);
  } else if (!validateName(lastName)) {
    showError(lastName, "Only letters allowed");
  } else {
    clearError(lastName);
  }
});

phone.addEventListener("input", function(){
    if(!isNotEmpty(phone)){
        clearError(phone);
    } else if (!validatePhone(phone)){
        showError(phone, "Only numbers are allowed, optionally starting with +");
    } else {
        clearError(phone);
    }
});

email.addEventListener("input", function(){
     if(!isNotEmpty(email)){
        clearError(email);
    } else if(!validateEmail(email)){
        showError(email, "Please enter a valid email address");
    } else{
        clearError(email);
    }
})

// According to UX consideration, that Error message should disappear 
// when the user type on the same input and will appear only when the user leave input if the value is wrong.
//To fix this issue I should use blur validation and touched.
// I leave that to the future work.


subject.addEventListener("change", function(){

    if(!validateSubject(subject)){
        showError(subject, "Please choose a subject");
    }else{
        clearError(subject);
    }
})
    
message.addEventListener("input", function(){
    updateMessageCounter();

    if(!isNotEmpty(message)){
    clearError(message);
    }
    else if(!validateMessage(message)){
    showError(message, "It must be at least 20 characters");
    }else {
        clearError(message);
    }
})

updateMessageCounter(); // in order to initialize counter on page load

form.addEventListener("reset", function () {
  setTimeout(function () {
    updateMessageCounter();

    // clear all field errors + red borders
    clearError(firstName);
    clearError(lastName);
    clearError(email);
    clearError(phone);
    clearError(subject);
    clearError(message);
  }, 0);
});