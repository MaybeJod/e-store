const productSection = document.querySelector("#productSection");
export async function sortProducts(product) {
	let productContainer = document.querySelector(".product-container");
	if (productContainer === undefined || productContainer === null) {
		productContainer = document.createElement("div");
		productContainer.classList.add("product-container");
		productSection.appendChild(productContainer);
	} else {
		productContainer.innerHTML = "";
	}

	// Check if the input is an array or a single object
	const products = Array.isArray(product) ? product : [product];

	products.forEach((productItem) => {
		const productElement = createProductElement(productItem);
		productContainer.appendChild(productElement);
	});
}

// Helper function to create a product element
function createProductElement(product) {
	const productElement = document.createElement("article");
	productElement.classList.add("product");

	productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="200" />
        <p class="product-category">${product.category}</p>
		<h1>${product.title}</h1>
        <p>${product.description}</p>
        <span>Price: <strong>$${product.price}</strong></span>
        <p class="product-rating">Stars: ${product.rating.rate} (${product.rating.count})</p>
    `;

	return productElement;
}
