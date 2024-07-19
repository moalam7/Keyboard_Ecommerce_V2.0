# Keyboard E-Commerce Website

## Table of Contents
- [Introduction](#introduction)
- [Before and After](#before-and-after)
- [Home Page](#home-page)
- [Authentication](#authentication)
- [Register Page](#register-page)
- [Login Page](#login-page)
- [Products Page](#products-page)
- [Cart Page](#cart-page)
- [Checkout Page](#checkout-page)
- [Technologies Used](#technologies-used)


## Introduction
This project is a collaborative effort to create an e-commerce website focused on selling a variety of keyboards. The website allows users to browse products, add them to a cart if they have logged in, and proceed to checkout. Users must register or log in to access certain features through authentication using an API.

# Before and After
## Before
![Home Page](/images/beforeImages/examplePage.png)
![Register Page](/images/beforeImages/signupPage.png)
![Login Page](/images/beforeImages/loginPage.png)
![Products Page](/images/beforeImages/productsPage.png)
![Checkout Page](/images/beforeImages/checkoutPage.png)


# After
## Home Page
The home page provides an overview of the website, showcasing featured products and a brief introduction.

![Home Page](/images/afterImages/home.png)

## Authentication
Authentication is a critical part of our e-commerce website, ensuring that users have a secure and personalized experience. We implemented authentication using API calls to handle user registration and login

 **Token Management**:
   - The token in local storage is used to authenticate the user for subsequent requests.
   - If the user logs out, the token is removed from local storage, and the user is redirected to the login page.
   - Local storage is also used to store the users products that was added to cart and be shown in the cart page.

## Register Page
- Users fill out a registration form with their details.
   - The form data is sent to the API endpoint.
   - The API validates the data and creates a new user.
   - A token is generated and stored in the user's local storage.

![Register Page](/images/afterImages/register.png)

## Login Page
   - Users enter their credentials in the login form.
   - The credentials are sent to the API endpoint.
   - The API verifies the credentials and, if valid, generates a token.
   - The token is stored in the user's local storage.

![Login Page](/images/afterImages/login.png)

## Products Page
The products page displays a variety of keyboards with descriptions and an "Add to Cart" button for each item. Users can browse through different products and add them to their cart. Once clicking "Add to Cart", it will automatically be stored in local storage and shown when going to the cart page.

![Products Page](/images/afterImages/products.png)

![Add To Cart Page](/images/afterImages/addedCart.png)

## Cart Page
- The cart page displays the items added by the user.
- Each item is shown in a Bootstrap card with a description, price, and quantity controls.
- Users can update quantities or remove items from the cart.
- Total price is calculated and displayed at the bottom.

![Cart Page](/images/afterImages/cart.png)

## Checkout Page
- The checkout page contains a form for users to enter their shipping information and complete the purchase.
- Form includes HTML validations to ensure data accuracy.

![Checkout Page](/images/afterImages/checkout.png)

## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap
- API calls