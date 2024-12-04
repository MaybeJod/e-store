/* cart page */
import "./cart.css";
//import { fetchAndDisplayProducts } from "../fetchProduct.js";
import { renderCart } from "./cartDisplay.js";
import resetContent from "../components/resetContent.js";

export default function renderCartPage() {
	const mainContent = document.querySelector("#cart");

	//fetchAndDisplayProducts(mainContent);
	document.querySelector("#viewCartButton").addEventListener("click", () => {
		resetContent();
		renderCart(mainContent);
	});
}
