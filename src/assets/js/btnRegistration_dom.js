import {resetContent} from "./assets/js/components/resetContent.js";
import { sortProducts } from "./assets/js/productCategories.js";
import { fetchProduct }from "./assets/js/fetchProduct.js";


export function registerButton(){
	const viewAllProducts = document.getElementById('allProducts_btn');
  viewAllProducts.addEventListener("click", () => {
	resetContent();
	const apiUrl_allProducts = 'https://fakestoreapi.com/products';
	fetchProduct(apiUrl_allProducts).then((products) => {
		sortProducts(products);
	});
});
[document.querySelector("#product-men"), document.querySelector('.category')].forEach(item =>{
	item.addEventListener("click", () => {
		resetContent();
		const apiUrl_men =
		"https://fakestoreapi.com/products/category/men's clothing";
	fetchProduct(apiUrl_men).then((products) => {
		sortProducts(products);
	});
});
})
}