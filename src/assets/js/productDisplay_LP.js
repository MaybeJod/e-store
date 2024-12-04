import menClothingImage from '../images/menClothing.png';
import womenClothingImage from '../images/womenClothing.png';
import accessoriesImage from '../images/Accessories.png';
import electronicsImage from '../images/Electronics.png';

export function displayCategoriesOnLandingPage(){
  const productSection = document.querySelector("#productSection");
  const productByCategoriesContainer = document.createElement('div');
  productByCategoriesContainer.classList.add("lp_productCategory");
  productSection.prepend( productByCategoriesContainer);

  const heading = document.createElement("h2");
  heading.classList.add("categories_heading");
  heading.innerText = "Search By Your Choice....!!"
  productByCategoriesContainer.prepend(heading);

  const categoriesDiv = document.createElement("div");
  categoriesDiv.classList.add("categories_container");
  heading.insertAdjacentElement("afterend", categoriesDiv);

  const menClothingDiv = document.createElement("div");
  menClothingDiv.classList.add("category");
  categoriesDiv.prepend(menClothingDiv);
  const menClothingImg = document.createElement("img");
  menClothingImg.classList.add("category_Image");
  menClothingDiv.prepend(menClothingImg);
  menClothingImg.src = menClothingImage;
  const menClothingText = document.createElement("p");
  menClothingText.classList.add("category_Text");
  menClothingImg.insertAdjacentElement("afterend", menClothingText);
  menClothingText.innerText = "Men's Clothing";

  //-----------  
  const womenClothingDiv = document.createElement("div");
  womenClothingDiv.classList.add("category");
  menClothingDiv.insertAdjacentElement("afterend", womenClothingDiv);

  const womenClothingImg = document.createElement("img");
  womenClothingImg.classList.add("category_Image");
  womenClothingDiv.prepend(womenClothingImg);
  womenClothingImg.src = womenClothingImage;
  const womenClothingText = document.createElement("p");
  womenClothingText.classList.add("category_Text");
  womenClothingImg.insertAdjacentElement("afterend", womenClothingText);
  womenClothingText.innerText = "Women's Clothing";
  
  //------------
  const accessoriesDiv = document.createElement("div");
  accessoriesDiv.classList.add("category");
  womenClothingDiv.insertAdjacentElement("afterend", accessoriesDiv);

  const accessoriesImg = document.createElement("img");
  accessoriesImg.classList.add("category_Image");
  accessoriesDiv.prepend(accessoriesImg);
  accessoriesImg.src = accessoriesImage;
  const accessoriesText = document.createElement("p");
  accessoriesText.classList.add("category_Text");
  accessoriesImg.insertAdjacentElement("afterend", accessoriesText);
  accessoriesText.innerText = "Accessories";
  
  //-------------
  const electronicsDiv = document.createElement("div");
  electronicsDiv.classList.add("category");
  accessoriesDiv.insertAdjacentElement("afterend", electronicsDiv);

  const electronicsImg = document.createElement("img");
  electronicsImg.classList.add("category_Image");
  electronicsDiv.prepend(electronicsImg);
  electronicsImg.src = electronicsImage;
  const electronicsText = document.createElement("p");
  electronicsText.classList.add("category_Text");
  electronicsImg.insertAdjacentElement("afterend", electronicsText);
  electronicsText.innerText = "Accessories";

  const viewAllProductsBtn = document.createElement("button");
  viewAllProductsBtn.classList.add("allProducts_btn");
  productByCategoriesContainer.insertAdjacentElement('afterend', viewAllProductsBtn);
  viewAllProductsBtn.innerText = 'View All Products';

  }
