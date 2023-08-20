let total = 0;
// Adding the selected items in the cart
function handleCLik(target) {
  const selectedItemContainer = document.getElementById("selected-products");
  const count = selectedItemContainer.childElementCount;
  const itemName = target.childNodes[5].innerText;
  const price = target.childNodes[7].innerText.split(" ")[0];
  const p = document.createElement("p");
  p.innerText = `${count + 1}.  ${itemName} ${price}`;
  selectedItemContainer.appendChild(p);
  total = parseInt(total) + parseInt(price);
  document.getElementById("total-price").innerText = total;
  const couponCodeInput = document.getElementById("coupon-code");
  const applyButton = document.getElementById("apply-button");
  const cartTotal = total;
  if (cartTotal >= 200) {
    applyButton.disabled = false;
  } else {
    applyButton.disabled = true;
  }
  // Event listener for apply button click
  applyButton.addEventListener("click", function () {
    const couponCode = couponCodeInput.value;

    if (couponCode === "SELL200") {
      // Apply the 20% discount
      const discountedPrice = cartTotal * 0.2; // 20% discount
      document.getElementById("discount").innerText = discountedPrice;
      const grandTotal = total - parseFloat(discountedPrice);
      document.getElementById("grand-total").innerText = grandTotal;
    }
  });
}
const purchaseButton = document.getElementById("purchaseButton");
const modal = document.getElementById("modal");
const homeButton = document.getElementById("homeButton");

// Show modal on Purchase button click
purchaseButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

// Reset modal content on Home button click
homeButton.addEventListener("click", function () {
  modal.classList.add("hidden");
  document.getElementById("selected-products").innerText= " ";
  document.getElementById("total-price").innerText = 0;
  document.getElementById("discount").innerText = 0;
  document.getElementById("grand-total").innerText = 0;

});
