import resetContent from "../js/components/resetContent.js";
let wishlist = [];


export function addToWishlist(id, products) {
  const existingItem = wishlist.find(product => product.id === id);
  let currentProduct ="";
  for (const product of products){
      if(product.id == id){
        currentProduct = product;
    }
  }
  if (!existingItem) {
    wishlist.push({ id, currentProduct}); // Add to wishlist array
    updateWishlistUI(); // Update the UI
  }
}
export function updateWishlistUI() {
  let wishlistCart = document.querySelector('.nav-liked-items');
  wishlistCart.addEventListener('click', ()=>{
    if (wishlist.length === 0) {
      wishlistCart.innerHTML = '<p>Your wishlist is empty.</p>';
    } else {
      //wishlistCart.innerHTML = ''; // Clear wishlist cart
      wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
          <img src="${item.currentProduct.image}" alt="${item.currentProduct.title}" name="product_image" id="product_image" />
            <div id="info_div">
              <h1 id="product_heading">${item.currentProduct.title}</h1>
              <p id="product_price"><strong>$${item.currentProduct.price}</strong></p>
              <p class="product-rating">Rating(Stars): ${item.currentProduct.rating.rate} (${item.currentProduct.rating.count})</p>
              <button id="AddToCart_btn">Add To Cart</button>
              <button id="AddToCart_btn">Remove From WishList</button>
            </div>
        `;
        wishlistCart.appendChild(wishlistItem);
      })
    }
  })
}

// Remove a product from the wishlist
export function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item.id !== id); // Remove item by id
  updateWishlistUI(); // Update the UI
}

