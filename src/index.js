/*-----styles-----*/
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./assets/styles/checkoutPage.css";
/*-----imgs and icons-----*/
import "./assets/icons-and-logo/Jasmiz-Logo.svg";
import "./assets/icons-and-logo/Shopping-Cart-Icon.svg";
import "./assets/icons-and-logo/Favorite Icon.svg";
import "./assets/icons-and-logo/Material Icon Person.svg";
/* product section */
import "./assets/styles/productSection.css";
/*-----js-----*/
/* fetch api */
import fetchProduct from "./assets/js/fetchProduct";
/* display product */
import displayProduct from "./assets/js/displayProduct";
/* display checkoutpage */
import checkoutPage from "./assets/js/checkoutPage";
checkoutPage();

// for all products
//"https://fakestoreapi.com/products"

//for one product
//""https://fakestoreapi.com/products/1""

const apiUrl = "https://fakestoreapi.com/products";

fetchProduct(apiUrl).then((products) => {
	console.log("Fetched Products:", products);
	displayProduct(products);
});
