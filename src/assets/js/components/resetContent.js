// reset content
export default function resetContent() {
	const heroSection = document.querySelector("#heroSection");
	heroSection.textContent = "";

	const productSection = document.querySelector("#productSection");
	productSection.textContent = "";

	const topRated = document.querySelector("#topRated");
	topRated.textContent = "";

	const cart = document.querySelector("#cart");
	cart.textContent = "";

	const checkout = document.querySelector("#checkout");
	checkout.textContent = "";
}
