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
}
// coupon Code Valid related code 
const couponCodeInput = document.getElementById("coupon-code");
const applyButton = document.getElementById("apply-button");
const cartTotal = total; 

// Event listener for input changes
couponCodeInput.addEventListener("input", function () {
  const couponCode = couponCodeInput.value;

  // Enable the apply button if the cart total is >= 200
  if (cartTotal >= 200) {
    applyButton.disabled = true;
  } else {
    applyButton.disabled = false;
  }

  // Apply discount if coupon code is valid
  if (couponCode === "SELL200") {
    const discountedPrice = total * 0.2; // 20% discount
    document.getElementById(discount).innerText = discountedPrice;
  }
});

// // Event listener for apply button click
// applyButton.addEventListener("click", function () {
//   const couponCode = couponCodeInput.value;

//   if (couponCode === "SELL200") {
//     // Apply the discount to the cart or perform related actions
//     const discountedTotal = cartTotal * 0.8; // 20% discount
//     console.log("Discount applied. Discounted Total:", discountedTotal);
//   }
// });
