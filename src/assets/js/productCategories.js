
const productSection = document.querySelector("#productSection");
//const heroSection = document.querySelector('#heroSection');
//const productCategories = document.querySelector('.lp_productCategory');
//const main = document.getElementsByTagName('main')

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
        <img src="${product.image}" alt="${product.title}" width="200" id="product_image" />
        <p class="product-category" id="product_group">${product.category}</p>
				<h1 id="product_heading">${product.title}</h1>
        <span id="product_price">Price: <strong>$${product.price}</strong></span>
        <p class="product-rating">Stars: ${product.rating.rate} (${product.rating.count})</p>
				<button class="add-to-cart" id="myCartBtn" data-id="${product.id}">Add To Cart</button>
				<button class="wishlist-cart" id="myWishlist" data-id="${product.id}">Add To Wishlist</button>
				<div class="nav-profile">
				
				`;
	return productElement;
}
