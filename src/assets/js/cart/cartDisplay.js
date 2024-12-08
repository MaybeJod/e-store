import {
	getCart,
	updateItemQuantity,
	removeItemFromCart,
} from "./cartOperations";
import resetContent from "../components/resetContent.js";
import checkoutPage from "../checkoutPage.js";

export function renderCart(container) {
	const cart = getCart();
	container.innerHTML = ""; // Clear existing content

	if (cart.length === 0) {
		container.innerHTML = "<p>Your cart is empty!</p>";
		return;
	}

	const cartContent = document.createElement("div");
	cartContent.classList.add("cart-container");

	let subtotal = 0;
	cart.forEach((item) => {
		const { id, title, price, quantity, image } = item;
		subtotal += price * quantity;

		const itemElement = document.createElement("div");
		itemElement.classList.add("cart-item");

		itemElement.innerHTML = `
			<img src="${image}" alt="${title}" class="cart-item-image" />
			<div class="cart-item-details">
				<h3>${title}</h3>
				<p>Price: $${price}</p>
				<p>Quantity: ${quantity}</p>
				<button class="decrease" data-id="${id}">-</button>
				<span>${quantity}</span>
				<button class="increase" data-id="${id}">+</button>
				<button class="remove" data-id="${id}">Remove</button>
			</div>
		`;

		cartContent.appendChild(itemElement);
	});

	// Order summary
	const orderSummary = document.createElement("div");
	//const discount = subtotal * 0.2; // Example 20% discount
	// add to oderSummary if used: <div>Discount: -$${discount.toFixed(2)}</div>
	const deliveryFee = 15;
	//const total = subtotal - discount + deliveryFee;
	const total = subtotal + deliveryFee;

	orderSummary.innerHTML = `
		<div>Subtotal: $${subtotal.toFixed(2)}</div>
		<div>Delivery Fee: $${deliveryFee.toFixed(2)}</div>
		<div>Total: $${total.toFixed(2)}</div>
		<button id="checkoutButton">Go to Checkout</button>
	`;
	cartContent.appendChild(orderSummary);

	container.appendChild(cartContent);

	// Attach event listeners
container.querySelector('#checkout')
const checkoutButton = document.querySelector('#checkoutButton')
checkoutButton.addEventListener('click', () => {
	console.log('Checkout button clicked');
	resetContent();
	checkoutPage();
})


	//increase decrease remove button addeventlistener
	container.querySelectorAll(".decrease").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			updateItemQuantity(
				productId,
				getCart().find((item) => item.id === productId).quantity - 1
			);
			renderCart(container); // Re-render
		});
	});

	container.querySelectorAll(".increase").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			updateItemQuantity(
				productId,
				getCart().find((item) => item.id === productId).quantity + 1
			);
			renderCart(container); // Re-render
		});
	});

	container.querySelectorAll(".remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.id, 10);
			removeItemFromCart(productId);
			renderCart(container); // Re-render
		});
	});
}

/* //attach checkoutpage button eventlistener

document.addEventListener('DOMContentLoaded', () => {
	const checkoutBtn = document.querySelector('#checkoutButton');
	if (checkoutBtn) {
		checkoutBtn.addEventListener('click', () => {
		console.log('Checkout button clicced');
		resetContent();
		checkoutPage();
		}); 
	} else {
		console.warn('checkout button not found');
	}
}); */