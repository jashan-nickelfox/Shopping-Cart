let quantity = 1;
let cartItems = 0;

function updateQuantity(change) {
  quantity += change;
  if (quantity < 1) quantity = 1;
  if (quantity > 5) quantity = 5;
  document.getElementById("quantity").textContent = quantity;
}

function addToCart() {
  cartItems = quantity;
  document.getElementById("cart-count").textContent = cartItems;
  alert("Product added to cart successfully!");
}

function openCartPopup() {
  if (cartItems > 0) {
    document.getElementById("cart-details").textContent = `Product: Fall Limited Edition Sneakers\nQuantity: ${cartItems}`;
    document.getElementById("cart-popup").style.display = "block";
    document.body.classList.add("popup-open");
  } else {
    alert("Your cart is empty!");
  }
}

function closeCartPopup() {
  document.getElementById("cart-popup").style.display = "none";
  document.body.classList.remove("popup-open");
}

function checkout() {
  alert("Proceeding to checkout...");
  window.location.href = "checkout.html";
}

function changeImage(imageSrc) {
  document.getElementById("main-image").src = imageSrc;
}


