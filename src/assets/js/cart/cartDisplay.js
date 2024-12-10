import "./cart.css";
import {
	getCart,
	updateItemQuantity,
	removeItemFromCart,
} from "./cartOperations";
import resetContent from "../components/resetContent.js";
import checkoutPage from "../checkoutPage.js";
import { calculateOrderSummary } from "./cartCalculation.js"; // Import the calculation logic

export function renderCart(container) {
	const cart = getCart();
	container.innerHTML = ""; // Clear existing content

	if (cart.length === 0) {
		container.innerHTML = "<p>Your cart is empty!</p>";
		return;
	}

	const cartTitle = document.createElement("h1");
	cartTitle.classList.add("cart-title");
	cartTitle.textContent = "Your Cart";
	container.appendChild(cartTitle);

	const cartContent = document.createElement("div");
	cartContent.classList.add("cart-container");

	const itemWrap = document.createElement("div");
	itemWrap.classList.add("cart-wrap");

	cart.forEach((item) => {
		const { id, title, price, quantity, image } = item;

		const itemElement = document.createElement("div");
		itemElement.classList.add("cart-item");

		itemElement.innerHTML = `
            <div class="item-image-container">
                <img src="${image}" alt="${title}" class="cart-item-image" />
            </div>
            <div class="cart-item-details">
                <h3>${title}</h3>
                <p class="item-meta">Size: Large</p>
                <p class="item-meta">Color: White</p>
                <p class="item-price">$${price}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-button decrease" data-id="${id}">-</button>
                <span>${quantity}</span>
                <button class="quantity-button increase" data-id="${id}">+</button>
            </div>
            <button class="remove" data-id="${id}">🗑️</button>
        `;

		itemWrap.appendChild(itemElement);
		cartContent.appendChild(itemWrap);
	});

	// Use the isolated calculation function
	const { subtotal, discount, deliveryFee, total } =
		calculateOrderSummary(cart);

	// Order summary
	const orderSummary = document.createElement("div");
	orderSummary.classList.add("order-summary");

	orderSummary.innerHTML = `
        <h2>Order Summary</h2>
        <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Discount (-20%)</span>
            <span class="discount">-$${discount.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Delivery Fee</span>
            <span>$${deliveryFee.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div class="promo-code">
            <input type="text" placeholder="Add promo code" />
            <button class="apply-promo">Apply</button>
        </div>
        <button id="checkoutButton" class="checkout-button">Go to Checkout</button>
    `;

	cartContent.appendChild(orderSummary);
	container.appendChild(cartContent);

	// Event listeners
	document.querySelector("#checkoutButton").addEventListener("click", () => {
		resetContent();
		checkoutPage(cart);
	});

	container.querySelectorAll(".decrease").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			updateItemQuantity(
				productId,
				Math.max(
					1,
					getCart().find((item) => item.id === productId).quantity - 1
				)
			);
			renderCart(container);
		});
	});

	container.querySelectorAll(".increase").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			updateItemQuantity(
				productId,
				getCart().find((item) => item.id === productId).quantity + 1
			);
			renderCart(container);
		});
	});

	container.querySelectorAll(".remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			removeItemFromCart(productId);
			renderCart(container);
		});
	});
}
