// contains modified version of fetchProducts.js for testing
//get products form api
async function getProductsFromApi() {
	const products = [];
	const apiURL = "https://fakestoreapi.com/products";

	try {
		const response = await fetch(apiURL);

		if (!response.ok) throw new Error("Could not fetch products");

		products = await response.json();
	} catch (error) {
		console.log("Error:", error);
	}
}

module.exports = { getProductsFromApi };
