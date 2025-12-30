const form= document.getElementById("contactForm");

const firstName= document.getElementById("firstName");

const lastName= document.getElementById("lastName");

const email= document.getElementById("email");

const phone= document.getElementById("phone");

const subject= document.getElementById("subject");

const message= document.getElementById("message");

const submit= document.querySelector(".submitButton");

const clear= document.querySelector(".clearButton");

// The problem is when we click submit the browser 
// sends the form, reloads the page and removes all
// JS state. To stop the browser from reloading the page so I can validate the 
// inputs with JS i should use: event.preventDefault();
form.addEventListener("submit", function(event){
    event.preventDefault();
});

/* form.addEventListener("click", function(){
    console.log("test");
}) */

/* firstName.addEventListener("click", function(){
    console.log("test");
})

lastName.addEventListener("click", function(){
    console.log("test");
})

email.addEventListener("click", function(){
    console.log("test");
})

phone.addEventListener("click", function(){
    console.log("test");
})

subject.addEventListener("click", function(){
    console.log("test");
})

message.addEventListener("click", function(){
    console.log("test");
})

submit.addEventListener("click", function(){
    console.log("test");
})

clear.addEventListener("click", function(){
    console.log("test");
}) */