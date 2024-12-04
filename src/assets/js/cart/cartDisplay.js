import { loadCart } from "./cartStorage";
import { removeProductFromCart } from "./cartOperations";

export function displayCart(container) {
	const cart = loadCart();
	container.innerHTML = "";

	cart.forEach((item) => {
		const cartItemElement = document.createElement("div");
		cartItemElement.classList.add("cart-item");

		cartItemElement.innerHTML = `
            <h1>${item.title}</h1>
            <span>Price: <strong>$${item.price}</strong></span>
            <span>Quantity: ${item.quantity}</span>
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;

		container.appendChild(cartItemElement);
	});

	// Add event listeners to remove buttons
	container.querySelectorAll(".remove-from-cart").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.getAttribute("data-id"), 10);
			removeProductFromCart(productId);
			displayCart(container); // Re-render cart
		});
	});
}
