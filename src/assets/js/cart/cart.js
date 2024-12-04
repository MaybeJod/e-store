export function loadCart() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');

    const title = document.createElement('h2');
    title.textContent = 'Shopping Cart';

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');

    const cartTotal = document.createElement('div');
    cartTotal.classList.add('cart-total');

    const checkoutBtn = document.createElement('button');
    checkoutBtn.textContent = 'Proceed to Checkout';
    checkoutBtn.classList.add('checkout-btn');
    

    updateCart();

    cartContainer.appendChild(title);
    cartContainer.appendChild(cartItems);
    cartContainer.appendChild(cartTotal);
    cartContainer.appendChild(checkoutBtn);

    content.appendChild(cartContainer);

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            cartTotal.innerHTML = '';
            checkoutBtn.style.display = 'none';
            return;
        }

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;

            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        checkoutBtn.style.display = 'block';
    }


    window.updateQuantity = function(productId, newQuantity) {
        if (newQuantity < 1) return;
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    };

    window.removeFromCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };
}