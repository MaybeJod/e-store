/*-----styles-----*/
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
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

import { sortProducts } from "./assets/js/productCategories";

// for all products
//"https://fakestoreapi.com/products"

//for one product
//""https://fakestoreapi.com/products/1""

//const apiUrl = "https://fakestoreapi.com/products";

//fetchProduct(apiUrl).then((products) => {
 //   console.log("Fetched Products:", products);
//  displayProduct(products);
//})

const buttonMen = document.querySelector('#product-men');
buttonMen.addEventListener('click', ()=>{
    const apiUrl_men = "https://fakestoreapi.com/products/category/men's clothing";
    fetchProduct(apiUrl_men).then((products) => {
        sortProducts(products);
    }) 
})
const buttonWomen = document.querySelector('#product-women');
buttonWomen.addEventListener('click', ()=>{
    const apiUrl_women = "https://fakestoreapi.com/products/category/women's clothing";
    fetchProduct(apiUrl_women).then((products) => {
        sortProducts(products);
    }) 
})

const buttonAccessories = document.querySelector('#product-accessories');
    buttonAccessories.addEventListener('click', ()=>{
        const apiUrl_jewelery = "https://fakestoreapi.com/products/category/jewelery";
        fetchProduct(apiUrl_jewelery).then((products) => {
            sortProducts(products);
        }) 
    })

    const buttonElectronics = document.querySelector('#product-electronics');
    buttonElectronics.addEventListener('click', ()=>{
        const apiUrl_electronics = "https://fakestoreapi.com/products/category/electronics";
        fetchProduct(apiUrl_electronics).then((products) => {
            sortProducts(products);
        }) 
    })
 