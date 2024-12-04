import fetchProduct from "../fetchProduct";

export default function createLandingPageProduct() {
	const apiUrlFourProducts = "https://fakestoreapi.com/products?limit=4";

	const contentElement = document.querySelector("#productSection");
	const landingPageProductElement = document.createElement("div");
	landingPageProductElement.classList.add("landing-page-product");

	// Fetch the API
	fetchProduct(apiUrlFourProducts)
		.then((products) => {
			console.log("Fetched Products:", products);

			// Loop through fetched products and add them to the page
			products.forEach((productItem) => {
				const productElement = createLandingPageProductElement(productItem);
				landingPageProductElement.appendChild(productElement);
			});

			// Append the product container to the main content area
			contentElement.appendChild(landingPageProductElement);
		})
		.catch((error) => {
			console.error("Failed to fetch products:", error);
		});
}

// Helper function to create a single product card
function createLandingPageProductElement(product) {
	const landingPageProductElement = document.createElement("article");
	landingPageProductElement.classList.add("product");

	landingPageProductElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="200" />
        <h1>${product.title}</h1>
        <span>Price: <strong>$${product.price}</strong></span>
    `;

	return landingPageProductElement;
}
