let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let emailId = document.getElementById("email");
let mob = document.getElementById("mobile");
let msg = document.getElementById("message");
const btn = document.getElementById("submit");


document.querySelector('form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log("First Name: "+fname.value);    
    console.log("Last Name: "+lname.value);    
    console.log("Email: "+emailId.value);    
    console.log("Mobile: "+mob.value);
    console.log("Message: "+msg.value);
});