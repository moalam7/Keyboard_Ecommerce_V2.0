document.addEventListener("DOMContentLoaded", () => {
  loadCart();
});

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const listItem = document.createElement("div");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const itemDetails = document.createElement("div");

    const itemName = document.createElement("h5");
    itemName.textContent = `${item.name} - $${item.price}`;
    itemDetails.appendChild(itemName);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("btn-group");

    if (item.quantity === 1) {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-sm", "btn-outline-danger");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteItem(item.id);
      buttonGroup.appendChild(deleteButton);
    } else {
      const minusButton = document.createElement("button");
      minusButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
      minusButton.textContent = "-";
      minusButton.onclick = () => updateQuantity(item.id, -1);
      buttonGroup.appendChild(minusButton);
    }

    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("mx-2");
    quantitySpan.textContent = item.quantity;
    buttonGroup.appendChild(quantitySpan);

    const plusButton = document.createElement("button");
    plusButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
    plusButton.textContent = "+";
    plusButton.onclick = () => updateQuantity(item.id, 1);
    buttonGroup.appendChild(plusButton);

    itemDetails.appendChild(buttonGroup);
    listItem.appendChild(itemDetails);

    const itemTotal = document.createElement("span");
    itemTotal.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    listItem.appendChild(itemTotal);

    cartItemsContainer.appendChild(listItem);
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

function updateQuantity(id, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity += delta;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}

// If one item in cart, the - button turns into a delete button instead
function deleteItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("You have no items in your cart.");
  } else {
    window.location.href = "checkout.html";
  }
}
