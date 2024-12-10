import fetchProductDetails from "../productTopDetails.js"; // For productTopDetails.js
import resetContent from "../components/resetContent.js"; // For resetContent.js


export async function createTopRatedGrid(apiUrl) {
    try {
        // Fetch products
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error fetching products: ${response.status}`);

        const products = await response.json();
        const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
        const top6Products = sortedProducts.slice(0, 6);

        const container = document.querySelector("#topRated");
        if (!container) throw new Error("Element with id 'topRated' not found.");

        // Clear any existing content
        container.innerHTML = '';

        // Add Trending Header
        const header = document.createElement("div");
        header.classList.add("trending-section");
        const headerText = document.createElement("h1");
        headerText.textContent = "TRENDING";
        headerText.classList.add("trending");
        header.appendChild(headerText);
        container.appendChild(header); // Append header to #topRated

        // Add Product Grid
        const grid = document.createElement("div");
        grid.classList.add("grid-container"); // Apply grid-container styling to this div
        container.appendChild(grid);

        // Add products to the grid
        top6Products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;
            img.className = "product-image";

            const productInfo = document.createElement("div");
            productInfo.className = "product-info";

            const name = document.createElement("h3");
            name.textContent = product.title;
            productInfo.appendChild(name);

            const price = document.createElement("p");
            price.textContent = `Price: $${product.price}`;
            productInfo.appendChild(price);

            productCard.appendChild(img);
            productCard.appendChild(productInfo);

            // Add click event to display product details
            productCard.addEventListener("click", () => {
                resetContent(); // Clear the current content
                fetchProductDetails(product.id); // Fetch and display product details
            });

            grid.appendChild(productCard); // Append each product card to the grid
        });
    } catch (error) {
        console.error("Error:", error);
    }
}
