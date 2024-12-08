export async function createTopRatedGrid(apiUrl) {
    try {
        // Fetch products from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.status}`);
        }

        const products = await response.json();

        // Sort products by their rating (descending order)
        const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);

        // Get the top 6 products
        const top6Products = sortedProducts.slice(0, 6);

        // Select the container using querySelector
        const container = document.querySelector("#topRated");
        if (!container) {
            throw new Error("Element with id 'topRated' not found.");
        }

        // Clear any existing content in the container
        container.innerHTML = '';

        // Add products to the container
        top6Products.forEach(product => {
            // Create a parent div for the product card
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Add image
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className = 'product-image';

            // Create a div for product info
            const productInfo = document.createElement('div');
            productInfo.className = 'product-info';

            // Add product name
            const name = document.createElement('h3');
            name.textContent = product.title;
            productInfo.appendChild(name);

            // Add price
            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;
            productInfo.appendChild(price);

            // Append image and info to the parent product card
            productCard.appendChild(img);
            productCard.appendChild(productInfo);

            // Append the product card to the container
            container.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
