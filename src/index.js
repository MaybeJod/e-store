/*-----styles-----*/
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./assets/styles/productDisplay_LP.css";
import "./assets/styles/hero.css";
import "./assets/styles/checkoutPage.css";


/* product section */
import "./assets/styles/productSection.css";
/*-----imgs and icons-----*/
import "./assets/icons-and-logo/Jasmiz-Logo.svg";
import "./assets/icons-and-logo/Shopping-Cart-Icon.svg";
import "./assets/icons-and-logo/Favorite Icon.svg";
import "./assets/icons-and-logo/Material Icon Person.svg";
/*-----js-----*/
/* fetch api */
import fetchProduct from "./assets/js/fetchProduct";
/* display checkoutpage */
import checkoutPage from "./assets/js/checkoutPage";
checkoutPage();
/* reset content */
import resetContent from "./assets/js/components/resetContent.js";
/* go to home */
import homeReset from "./assets/js/components/home-reset.js";

/* import temp products to add to cart */
import { fetchAndDisplayProducts } from "./assets/js/fetchProduct";

/* landing page products */
import { displayCategoriesOnLandingPage } from "./assets/js/productDisplay_LP.js";

/* landing page */
import { createLandingPage } from "./assets/js/landingPage.js";
import { createTrendingSection } from "./assets/js/trendingProducts.js";

/* display product */
//import displayProduct from "./assets/js/displayProduct";
/* sort products */
import { sortProducts } from "./assets/js/productCategories";
/* import {removeDivFromLandingPage} from "./assets/js/productCategories"; */

/* cart */
import renderCartPage from "./assets/js/cart/cartPage.js";

/* when user clicks on nav logo */
const homeElement = document.querySelector("#home-reset");
homeElement.addEventListener("click", () => {
	resetContent();
	homeReset();
});

/* landing-page */
/* hero and banner */
/* createLandingPage();
createTrendingSection(); */

/* run cart function*/
renderCartPage();

/* landing page product categories */
document.addEventListener("DOMContentLoaded", () => {
	createLandingPage();
	createTrendingSection();
	displayCategoriesOnLandingPage();
});

/* nav drop down for categories */
const buttonAllProducts = document.querySelector("#product-all");
buttonAllProducts.addEventListener("click", () => {
	const productSectionElement = document.querySelector("#productSection");
	resetContent();
	fetchAndDisplayProducts(productSectionElement);
});


const buttonMen = document.querySelector("#product-men");
buttonMen.addEventListener("click", () => {
	resetContent();
	const apiUrl_men =
		"https://fakestoreapi.com/products/category/men's clothing";
	fetchProduct(apiUrl_men).then((products) => {
		sortProducts(products);
	});
});
const buttonWomen = document.querySelector("#product-women");
buttonWomen.addEventListener("click", () => {
	resetContent();
	const apiUrl_women =
		"https://fakestoreapi.com/products/category/women's clothing";
	fetchProduct(apiUrl_women).then((products) => {
		sortProducts(products);
	});
});

const buttonAccessories = document.querySelector("#product-accessories");
buttonAccessories.addEventListener("click", () => {
	resetContent();
	const apiUrl_jewelery = "https://fakestoreapi.com/products/category/jewelery";
	fetchProduct(apiUrl_jewelery).then((products) => {
		sortProducts(products);
	});
});

const buttonElectronics = document.querySelector("#product-electronics");
buttonElectronics.addEventListener("click", () => {
	resetContent();
	const apiUrl_electronics =
		"https://fakestoreapi.com/products/category/electronics";
	fetchProduct(apiUrl_electronics).then((products) => {
		sortProducts(products);
	});
});
