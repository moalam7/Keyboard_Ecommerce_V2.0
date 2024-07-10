"use strict";

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const registerForm = document.querySelector("#register");


window.onload = function () {

    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;

    registerForm.onsubmit = checkPasswordAfterSubmit;

}

function validatePassword() {

    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords Do Not Match");
    }

}

function checkPasswordAfterSubmit(event) {

    validatePassword();
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        confirmPassword.setCustomValidity("Passwords Do Not Match");
    }
    else {
        registerUser(event);
    }

}

function registerUser(event) {
    
    event.preventDefault();

    const registerData = {
        username: registerForm.username.value,
        fullName: registerForm.fullName.value,
        password: registerForm.password.value
    }

    registerForm.registerButton.disabled = true;

    register(registerData);

}

