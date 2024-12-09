/*-----styles-----*/
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./assets/styles/productDisplay_LP.css";
import "./assets/styles/hero.css";
import "./assets/styles/checkoutPage.css";
import "./assets/styles/topRated.css";
import "./assets/styles/products.css";
import "./assets/styles/productDetails.css";
import "./assets/styles/filterFunction.css";
/* product section css*/
import "./assets/styles/productSection.css";

/*-----imgs and icons-----*/
import "./assets/icons-and-logo/Jasmiz-Logo.svg";
import "./assets/icons-and-logo/Shopping-Cart-Icon.svg";
import "./assets/icons-and-logo/Favorite Icon.svg";
import "./assets/icons-and-logo/Material Icon Person.svg";

/*-----js-----*/
/* fetch api */
import fetchProduct from "./assets/js/fetchProduct";
/* reset content */
import resetContent from "./assets/js/components/resetContent.js";
/* go to home */
import homeReset from "./assets/js/components/home-reset.js";
/* landing page products */
import { displayCategoriesOnLandingPage } from "./assets/js/productDisplay_LP.js";
import {
	registerLowToHigh,
	registerHighToLow,
	sortOnTheBasisOfRating,
} from "./assets/js/filterFunction.js";

/* landing page */
import { createLandingPage } from "./assets/js/landingPage.js";
import { createTrendingSection } from "./assets/js/trendingProducts.js";
import { createTopRatedGrid } from "./assets/js/landing-page/topRated.js";

/* sort products */
import { sortProducts } from "./assets/js/productCategories";

/* cart */
import renderCartPage from "./assets/js/cart/cartPage.js";

/* when user clicks on nav logo */
const homeElement = document.querySelector("#home-reset");
homeElement.addEventListener("click", () => {
	resetContent();
	homeReset();
});

/* creates top rated products grid */
document.addEventListener("DOMContentLoaded", () => {
	createTopRatedGrid("https://fakestoreapi.com/products");
});

/* run cart function*/
renderCartPage();

/* landing page product categories */
document.addEventListener("DOMContentLoaded", () => {
	createLandingPage();
	createTrendingSection();
	displayCategoriesOnLandingPage();
	productButtons();
});

function productButtons() {
	[
		document.querySelector("#product-all"),
		document.querySelector("#shop_all"),
		document.getElementById("allProducts_btn"),
	].forEach((item) => {
		item.addEventListener("click", () => {
			resetContent();
			const apiUrl_allProducts = "https://fakestoreapi.com/products";
			fetchProduct(apiUrl_allProducts).then((products) => {
				sortProducts(products);
				const lowToHighPrice = document.querySelector("#lowToHigh");
				registerLowToHigh(lowToHighPrice, products);
				const highToLowPrice = document.querySelector("#highToLow");
				registerHighToLow(highToLowPrice, products);
				const filterByRating = document.querySelector("#filter_ratingBtn");
				sortOnTheBasisOfRating(filterByRating, products);
			});
		});
	});
	[
		document.querySelector("#product-men"),
		document.querySelector("#men_category"),
	].forEach((item) => {
		item.addEventListener("click", () => {
			resetContent();
			const apiUrl_men =
				"https://fakestoreapi.com/products/category/men's clothing";
			fetchProduct(apiUrl_men).then((products) => {
				sortProducts(products);
				const lowToHighPrice = document.querySelector("#lowToHigh");
				registerLowToHigh(lowToHighPrice, products);
				const highToLowPrice = document.querySelector("#highToLow");
				registerHighToLow(highToLowPrice, products);
				const filterByRating = document.querySelector("#filter_ratingBtn");
				sortOnTheBasisOfRating(filterByRating, products);
			});
		});
	});
	//--------
	[
		document.querySelector("#product-women"),
		document.querySelector("#women_category"),
	].forEach((item) => {
		item.addEventListener("click", () => {
			resetContent();
			const apiUrl_women =
				"https://fakestoreapi.com/products/category/women's clothing";
			fetchProduct(apiUrl_women).then((products) => {
				sortProducts(products);
				const lowToHighPrice = document.querySelector("#lowToHigh");
				registerLowToHigh(lowToHighPrice, products);
				const highToLowPrice = document.querySelector("#highToLow");
				registerHighToLow(highToLowPrice, products);
				const filterByRating = document.querySelector("#filter_ratingBtn");
				sortOnTheBasisOfRating(filterByRating, products);
			});
		});
	});

	//------------
	[
		document.querySelector("#product-accessories"),
		document.querySelector("#accessories_category"),
	].forEach((item) => {
		item.addEventListener("click", () => {
			resetContent();
			const apiUrl_jewelery =
				"https://fakestoreapi.com/products/category/jewelery";
			fetchProduct(apiUrl_jewelery).then((products) => {
				sortProducts(products);
				const lowToHighPrice = document.querySelector("#lowToHigh");
				registerLowToHigh(lowToHighPrice, products);
				const highToLowPrice = document.querySelector("#highToLow");
				registerHighToLow(highToLowPrice, products);
				const filterByRating = document.querySelector("#filter_ratingBtn");
				sortOnTheBasisOfRating(filterByRating, products);
			});
		});
	});
	//----------
	[
		document.querySelector("#product-electronics"),
		document.querySelector("#electronics_category"),
	].forEach((item) => {
		item.addEventListener("click", () => {
			resetContent();
			const apiUrl_electronics =
				"https://fakestoreapi.com/products/category/electronics";
			fetchProduct(apiUrl_electronics).then((products) => {
				sortProducts(products);
				const lowToHighPrice = document.querySelector("#lowToHigh");
				registerLowToHigh(lowToHighPrice, products);
				const highToLowPrice = document.querySelector("#highToLow");
				registerHighToLow(highToLowPrice, products);
				const filterByRating = document.querySelector("#filter_ratingBtn");
				sortOnTheBasisOfRating(filterByRating, products);
			});
		});
	});
}
