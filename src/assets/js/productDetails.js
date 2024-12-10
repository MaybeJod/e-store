import { addItemToCart } from "./cart/cartOperations";

export default async function fetchProductDetails(productId) {
	const productSection = document.querySelector("#productSection");
	const apiBaseUrl = "https://fakestoreapi.com/products";
	try {
		// Fetch product details
		const response = await fetch(`${apiBaseUrl}/${productId}`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const product = await response.json();

		// Display the product details
		const productDetailsDiv = document.createElement("div");
		productDetailsDiv.classList.add("product_detail");
		productSection.appendChild(productDetailsDiv);
		productDetailsDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}" name="product_image" id="product_image" />
				  <div id="info_div">
            <h1 id="product_heading">${product.title}</h1>
            <p id ="product_discription">${product.description}</p>
            <p id="product_price"><strong>$${product.price}</strong></p>
            <p class="product-rating">Rating: ${product.rating.rate} (${product.rating.count})</p>
            <button id="AddToCart_btn" class="add-to-cart">Add To Cart</button>
          </div>
    `;

		const addToCartButton = productDetailsDiv.querySelector(".add-to-cart");
		addToCartButton.addEventListener("click", () => {
			//const productId = parseInt(e.target.getAttribute("data-id"), 10);
			if (product) {
				addItemToCart(product); // Pass the product object directly to the cart function
				//alert(`Added "${product.title}" to cart!`);
			}
		});
	} catch (error) {
		console.error("Error fetching product details:", error);
	}
}
