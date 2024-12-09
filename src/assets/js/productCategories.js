import resetContent from "../js/components/resetContent.js";
import fetchProductDetails from "./productDetails.js";

import { addItemToCart } from "../js/cart/cartOperations.js";

const productSection = document.querySelector("#productSection");
//const heroSection = document.querySelector('#heroSection');
//const productCategories = document.querySelector('.lp_productCategory');
//const main = document.getElementsByTagName('main')

export async function sortProducts(product) {
	let productContainer = document.querySelector(".product-container");
	let completeDiv = document.createElement("div");

	if (!productContainer) {
		productContainer = document.createElement("div");
		productContainer.classList.add("product-container");

		productSection.appendChild(completeDiv);
		completeDiv.classList.add("complete_div");
		let filterdiv = document.createElement("div");
		filterdiv.classList.add("filter_div");
		completeDiv.prepend(filterdiv);
		filterdiv.innerHTML = `<div class="nav-dropdown">
							<button class="nav-drop-button" id="filterMainBtn">
								Filter By Price ▼
							</button>
							<div class="nav-dropdown-content">
								<hr />
								<ul>
									<li>
										<button class="nav-buttons" id="lowToHigh">Low To High</button>
									</li>
									<li>
										<button class="nav-buttons" id="highToLow">High To Low</button>
									</li>
								</ul>
							</div>
						</div>
						<button id=filter_ratingBtn>Filter By Rating</button>`;

		filterdiv.insertAdjacentElement("afterend", productContainer);
	} else {
		productContainer.innerHTML = "";
	}

	// Check if the input is an array or a single object
	const products = Array.isArray(product) ? product : [product];

	for (const productItem of products) {
		const productElement = await createProductElement(productItem); // Use await to get the resolved value
		productContainer.appendChild(productElement);

		// Attach event listeners for product details
		const productDetailsClick = productElement.querySelector("#product_image");
		productDetailsClick.addEventListener("click", () => {
			resetContent();
			fetchProductDetails(productItem.id);
		});
	}
}

// Helper function to create a product element
async function createProductElement(product) {
	const productElement = document.createElement("article");
	productElement.classList.add("product");

	productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="200" id="product_image" name="product_image" />
        <h1 id="product_heading">${product.title}</h1>
        <span id="product_price">Price: <strong>$${product.price}</strong></span>
        <p class="product-rating">Stars: ${product.rating.rate} (${product.rating.count})</p>
        <div id="button_container">
            <button id="addToCart_div" class="add-to-cart" >
                <svg 
                    width="25px" 
                    height="25px" 
                    data-id="${product.id}" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                >
                    <title>cart-plus</title>
                    <path d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" />
                </svg>
            </button>
            <div id="wishlist_div">
                <svg width="25px" height="25px" data-id="${product.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>heart-plus-outline</title>
                    <path d="M12.67 20.74L12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 9.93 21.5 11.26 20.62 12.61C20 12.31 19.31 12.11 18.59 12.04C19.5 10.8 20 9.65 20 8.5C20 6.5 18.5 5 16.5 5C14.96 5 13.46 6 12.93 7.36H11.07C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.89 18.55L12 18.65L12.04 18.61C12.12 19.37 12.34 20.09 12.67 20.74M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" />
                </svg>
            </div>
        </div>
    `;

	// Attach event listener to the Add to Cart button
	const addToCartButton = productElement.querySelector(".add-to-cart");
	addToCartButton.addEventListener("click", () => {
		//const productId = parseInt(e.target.getAttribute("data-id"), 10);
		if (product) {
			addItemToCart(product); // Pass the product object directly to the cart function
			//alert(`Added "${product.title}" to cart!`);
		}
	});

	return productElement;
}
