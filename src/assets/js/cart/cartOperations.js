// Get cart from localStorage
export function getCart() {
	return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to localStorage
export function saveCart(cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

// Add an item to the cart
export function addItemToCart(product) {
	const cart = getCart();
	const existingItem = cart.find((item) => item.id === product.id);

	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.push({ ...product, quantity: 1 });
	}

	saveCart(cart);
}

// Remove an item from the cart
export function removeItemFromCart(productId) {
	let cart = getCart();
	cart = cart.filter((item) => item.id !== productId);
	saveCart(cart);
}

// Update the quantity of an item
export function updateItemQuantity(productId, quantity) {
	const cart = getCart();
	const item = cart.find((item) => item.id === productId);

	if (item) {
		item.quantity = quantity;
		if (item.quantity <= 0) {
			removeItemFromCart(productId);
		} else {
			saveCart(cart);
		}
	}
}
