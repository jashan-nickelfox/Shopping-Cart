const cartQuantity = localStorage.getItem("cartQuantity") || 1;
const pricePerItem = 125.0;

document.getElementById("cart-quantity").textContent = cartQuantity;
document.getElementById("total-price").textContent = `$${(cartQuantity * pricePerItem).toFixed(2)}`;

function goBack() {
  window.location.href = "index.html"; // Adjust the URL as necessary
}

function proceedToPayment() {
  alert("Proceeding to payment...");
  // Redirect to payment page or payment gateway
}
