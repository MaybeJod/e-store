const CART_KEY = "cart";

export function loadCart() {
	return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
	localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
