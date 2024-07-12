"use strict";

const logoutButton = document.querySelector("#logoutButton");

window.onload = function() {
    logoutButton.onclick = logout;
}

function addToCart(id) {
    const productCard = document.querySelector(`.card[data-id='${id}']`);
    const name = productCard.getAttribute("data-name");
    const price = parseFloat(productCard.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart.`);
  }
