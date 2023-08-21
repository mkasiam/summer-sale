//Assuming that the total is zero it helps me in the sum
let total = 0;

// Adding the selected items in the cart
function handleClick(target) {
  //getting the area where the items will be shown
  const selectedItemContainer = document.getElementById("selected-products");
  //counting the products
  const count = selectedItemContainer.childElementCount;
  //getting the name of the product using child nodes
  const itemName = target.childNodes[5].innerText;
  //getting the price of the product
  const price = target.childNodes[7].innerText.split(" ")[0];
  //creating a 'p' element
  const p = document.createElement("p");
  //showing details of the product inside the element
  p.innerText = `${count + 1}.  ${itemName} ${price}`;
  //Appending the child inside the element
  selectedItemContainer.appendChild(p);
  //Calculating the total price
  total = parseInt(total) + parseInt(price);
  const totalPrice =total.toFixed(2);
  //Showing total price in to the total price text using innerText
  document.getElementById("total-price").innerText = totalPrice;
  //Finding and declaring the coupon code
  const couponCodeInput = document.getElementById("coupon-code");
  //Finding and declaring the coupon code apply button
  const applyButton = document.getElementById("apply-button");
  //Assigning that cartTotal is total
  const cartTotal = totalPrice;
  // Adding Condition When the button will be enable or disable
  if (cartTotal >= 200) {
    applyButton.disabled = false;
  } else {
    applyButton.disabled = true;
  }
  //Finding the purchase button id and assigning it into a const
  const purchaseButton = document.getElementById("purchase-btn");
  // Purchase button enable logic
  if (cartTotal > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", "true");
  }

  // Event listener for apply button click
  applyButton.addEventListener("click", function () {
    const couponCode = couponCodeInput.value;

    if (couponCode === "SELL200") {
      // Apply the 20% discount
      const discountedPrice = cartTotal * 0.2; // 20% discount
      const discountedPriceTwoDigit = discountedPrice.toFixed(2);
      document.getElementById("discount").innerText = discountedPriceTwoDigit;
      const grandTotal = total - parseFloat(discountedPriceTwoDigit);
      const grandTotalTwoDigit = grandTotal.toFixed(2);
      document.getElementById("grand-total").innerText = grandTotalTwoDigit;
    }
  });
}
//Finding the purchase button id and assigning it into a const
const purchaseButton = document.getElementById("purchase-btn");
//Finding the modal id and assigning it into a const
const modal = document.getElementById("modal");
//Finding the home Button and assigning it into a const
const homeButton = document.getElementById("home-btn");

//Apply Show modal on Purchase button click
purchaseButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

// Reset modal content on Home button click
homeButton.addEventListener("click", function () {
  modal.classList.add("hidden");
  window.location.href = "index.html";
});
