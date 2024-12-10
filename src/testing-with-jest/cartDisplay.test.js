const {
	calculateOrderSummary,
} = require("../assets/js/cart/cartCalculation.js");

describe("calculateOrderSummary", () => {
	it("should correctly calculate order summary for a non-empty cart", () => {
		const cart = [
			{ id: 1, title: "Item 1", price: 50, quantity: 2 },
			{ id: 2, title: "Item 2", price: 30, quantity: 1 },
		];

		const result = calculateOrderSummary(cart);

		expect(result).toEqual({
			subtotal: 130.0, // 50*2 + 30*1
			discount: 26.0, // 20% of 130
			deliveryFee: 15.0,
			total: 119.0, // 130 - 26 + 15
		});
	});

	it("should return zeroes for an empty cart", () => {
		const cart = [];

		const result = calculateOrderSummary(cart);

		expect(result).toEqual({
			subtotal: 0.0,
			discount: 0.0,
			deliveryFee: 15.0,
			total: 15.0, // Delivery fee still applies
		});
	});
});
