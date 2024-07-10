/* auth.js provides LOGIN-related functions */

"use strict";


const apiBaseURL = "https://microbloglite.onrender.com";


function getLoginData() {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}


function isLoggedIn() {
    const loginData = getLoginData();
    return Boolean(loginData.token);
}


function login(loginData) {
    // POST /auth/login
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    };

    return fetch(apiBaseURL + "/auth/login", options)
        .then((response) => response.json())
        .then((loginData) => {
            window.localStorage.setItem("login-data", JSON.stringify(loginData));
            window.location.assign("/products.html"); // redirect

            return loginData;
        });
}

function register(registerData) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
    };

    return fetch(apiBaseURL + "/api/users", options)
        .then((response) => response.json())
        .then((registerData) => {
            window.localStorage.setItem("register-data", JSON.stringify(registerData));
            window.location.assign("/login.html");

            return registerData;
        })
}

function logout() {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(apiBaseURL + "/auth/logout", options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .finally(() => {
            window.localStorage.removeItem("login-data"); // remove login data from LocalStorage
            window.location.assign("/login.html"); // redirect back to landing page
        });
}
