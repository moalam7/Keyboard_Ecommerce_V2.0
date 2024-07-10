/* Landing Page JavaScript */

"use strict";


const loginForm = document.querySelector("#login");

loginForm.onsubmit = function (event) {
    event.preventDefault();

    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};

