import { addItemToCart } from "./cart/cartOperations.js";

export default async function fetchProductDetails(productId) {
    const productSection = document.querySelector("#productSection");
    const apiBaseUrl = "https://fakestoreapi.com/products";

    try {
        // Fetch product details
        const response = await fetch(`${apiBaseUrl}/${productId}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const product = await response.json();

        // Display the product details
        productSection.innerHTML = `
            <div class="product_detail">
                <img src="${product.image}" alt="${product.title}" id="product_image" />
                <div id="info_div">
                    <h1 id="product_heading">${product.title}</h1>
                    <p id="product_discription">${product.description}</p>
                    <p id="product_price"><strong>$${product.price}</strong></p>
                    <p class="product-rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                    <button id="AddToCart_btn" class="add-to-cart">Add To Cart</button>
                    <button id="backToTopRated">Back to Top Rated</button>
                </div>
            </div>
        `;

        const addToCartButton = document.querySelector("#AddToCart_btn");
        addToCartButton.addEventListener("click", () => {
            addItemToCart(product);
            console.log(`Product "${product.title}" added to cart.`);
        });

        // Add "Back to Top Rated" functionality
        const backToTopRatedButton = document.querySelector("#backToTopRated");
        backToTopRatedButton.addEventListener("click", () => {
            resetContent();
            const topRatedGridUrl = "https://fakestoreapi.com/products";
            createTopRatedGrid(topRatedGridUrl); // Recreate the top-rated grid
        });
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}
