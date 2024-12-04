// display product article
export default async function displayProduct(product) {
	const productSection = document.querySelector("#productSection");
	const menProductsContainer = document.createElement("div");
	menProductsContainer.classList.add("men-product-container");
	menProductsContainer.innerHTML = "";

	productSection.appendChild(menProductsContainer);
	// Check if the input is an array or a single object
	const products = Array.isArray(product) ? product : [product];

	products.forEach((productItem) => {
		const productElement = createProductElement(productItem);
		menProductsContainer.appendChild(productElement);
	});
}

// Helper function to create a product element
export function createProductElement(product) {
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
