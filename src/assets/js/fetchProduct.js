// fetch the api for multiple products
export default async function fetchProduct(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.trace("An error occurred: ", error.message);
	}
}

import { addProductToCart } from "../js/cart/cartOperations.js";
//import { displayCart } from "../js/cart/cartDisplay.js";

/* export default function fetchAndDisplayProducts(productContainer) {
	const apiUrl = "https://fakestoreapi.com/products";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((products) => {
			productContainer.innerHTML = ""; // Clear previous content

			products.forEach((product) => {
				const productElement = document.createElement("div");
				productElement.classList.add("product");

				productElement.innerHTML = `
                    <h1>${product.title}</h1>
                    <img src="${product.image}" alt="${product.title}" width="150" />
                    <span>Price: <strong>$${product.price}</strong></span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                `;

				productContainer.appendChild(productElement);
			});

			// Attach event listeners to "Add to Cart" buttons
			productContainer.querySelectorAll(".add-to-cart").forEach((button) => {
				button.addEventListener("click", (e) => {
					const productId = parseInt(e.target.getAttribute("data-id"), 10);
					const product = products.find((p) => p.id === productId);

					if (product) {
						addProductToCart(product); // Add product to cart
					}
				});
			});
		})
		.catch((error) => {
			console.error("Error fetching products:", error); // Debug log
		});
} */
