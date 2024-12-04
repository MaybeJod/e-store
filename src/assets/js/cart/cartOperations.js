import { loadCart, saveCart } from "./cartStorage";

export function addProductToCart(product) {
	const cart = loadCart();

	const existingProduct = cart.find((item) => item.id === product.id);

	if (existingProduct) {
		existingProduct.quantity += 1;
	} else {
		cart.push({ ...product, quantity: 1 });
	}

	saveCart(cart);
	updateCartDisplay();
}

export function removeProductFromCart(productId) {
	let cart = loadCart();

	const productIndex = cart.findIndex((item) => item.id === productId);

	if (productIndex !== -1) {
		if (cart[productIndex].quantity > 1) {
			cart[productIndex].quantity -= 1;
		} else {
			cart.splice(productIndex, 1);
		}
	}

	saveCart(cart);
	updateCartDisplay();
}

export function updateCartDisplay() {
	const cart = loadCart();
	const cartContainer = document.querySelector("#cart");

	cartContainer.innerHTML = ""; // Clear the current cart display

	cart.forEach((item) => {
		const cartItemElement = document.createElement("div");
		cartItemElement.classList.add("cart-item");

		cartItemElement.innerHTML = `
            <h1>${item.title}</h1>
            <img src="${item.image}" alt="${item.title}" width="50" />
            <span>Price: <strong>$${item.price}</strong></span>
            <span>Quantity: ${item.quantity}</span>
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;

		cartContainer.appendChild(cartItemElement);
	});

	// Add event listeners to the "Remove" buttons for live cart updates
	cartContainer.querySelectorAll(".remove-from-cart").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.getAttribute("data-id"), 10);
			removeProductFromCart(productId); // Remove product from cart
		});
	});
}
