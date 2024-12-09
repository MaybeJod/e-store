
import { sortProducts } from "./productCategories.js";

export function registerLowToHigh(element, products) {
  element.addEventListener("click",()=>{
  const sortedProducts = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  sortProducts(sortedProducts);
});
}

export function registerHighToLow(element, products) {
  element.addEventListener("click",()=>{
  const sortedProducts = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  sortProducts(sortedProducts);
});
};
export function sortOnTheBasisOfRating(element, products) {
  element.addEventListener("click",()=>{
    const ratingSortedProducts = products.sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate));
    sortProducts(ratingSortedProducts);
  });
  };
