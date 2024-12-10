import resetContent from "../js/components/resetContent.js";
import fetchProductDetails from "./productDetails.js";

export async function createTopRatedproducts(apiUrl) {
  try {
      // Fetch products
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`Error fetching products: ${response.status}`);

      const products = await response.json();
      const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
      const top6Products = sortedProducts.slice(0, 6);

      const product_container = document.createElement('div');
      if (!product_container) throw new Error("Element with id 'topRated' not found.");
      const productSection = document.querySelector('#productSection');

      productSection.appendChild(product_container);
      product_container.innerHTML = '';

      // Add Product Grid
      const grid = document.createElement("div");
      grid.classList.add("grid-container"); // Apply grid-container styling to this div
      product_container.appendChild(grid);

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
          grid.appendChild(productCard); // Append each product card to the grid
          
      });
  } catch (error) {
      console.error("Error:", error);
  }
}
