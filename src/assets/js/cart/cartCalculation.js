function calculateOrderSummary(cart) {
	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const discount = subtotal * 0.2; //20% discount
	const deliveryFee = 15;
	const total = subtotal - discount + deliveryFee;

	return {
		subtotal: parseFloat(subtotal.toFixed(2)),
		discount: parseFloat(discount.toFixed(2)),
		deliveryFee: parseFloat(deliveryFee.toFixed(2)),
		total: parseFloat(total.toFixed(2)),
	};
}

module.exports = { calculateOrderSummary };
