// Registration
function registerUser() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration Successful!");
  window.location.href = "index.html";
}

// Login
function loginUser() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    alert("Login Successful!");
    window.location.href = "catalog.html";
  } else {
    alert("Invalid Credentials");
  }
}

// Add to Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

// Load Cart
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let table = document.getElementById("cartTable");
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
      </tr>
    `;
  });

  document.getElementById("total").innerText = "₹" + total;
}