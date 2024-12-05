

export default function checkoutPage() {
    const checkoutElement = document.getElementById('checkout');
    if (checkoutElement) {
        console.log('Checkout page is loaded');
    }

/*     const createForm = (title) => {
        const checkoutFormContainer = document.createElement('div');
        checkoutFormContainer.classList.add('checkout-form-container');

        const checkoutFormTitle = document.createElement('h2');
        checkoutFormTitle.classList.add('checkout-form-title');
        checkoutFormTitle.textContent = title;

        const form = document.createElement('form');
        form.id = 'checkoutForm';

        checkoutFormContainer.appendChild(checkoutFormTitle);
        checkoutFormContainer.appendChild(form);

        return checkoutFormContainer;
    }; */

    //main container for the FORM
    const checkoutContentContainer = document.createElement('div');
    checkoutContentContainer.classList.add('checkout-content-container');

    //create the customer info form
    const customerInfoSection = document.createElement('div');
    customerInfoSection.classList.add('checkout-section');
    customerInfoSection.innerHTML = `
        <h3 class="checkout-customer-title" id="customerTitle">Customer Information</h3>
        <div class="checkout-input-group email" id="email-checkout">
            <label for="email">Email</label>
            <input type="email" id="email" required>
        </div>
         <div class="checkout-input-group" id="firstName">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" required>
        </div>
        <div class="checkout-input-group" id="lastName">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" required>
        </div>
        </div>
        <div class="checkout-input-group" id="address">
            <label for="address">Address</label>
            <input type="text" id="address" required>
        </div>
        <div class="checkout-input-group" id="city">
            <label for="city">City</label>
            <input type="text" id="city" required>
        </div>
        <div class="checkout-input-group" id="country">
            <label for="country">Country</label>
            <select id="country">
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="SE">Sweden</option>
            </select>
        </div>
        <div class="checkout-input-group" id="postalCode">
            <label for="postal-code">Postal Code</label>
            <input type="text" id="postal-code" required>
        </div>
    `;
    checkoutContentContainer.appendChild(customerInfoSection);

    //Payment setion
    const paymentMethodSection = document.createElement('div');
    paymentMethodSection.classList.add('checkout-payment-section');
    paymentMethodSection.innerHTML = `
        <h3 class="payment-section-title">Payment Details</h3>
        
        <div class="payment-section-options">
            <button class="creditCard-btn">
                <svg src=></svg>
                <span class="creditCard-words">Credit Card</span>
            </button>
            <button class="paypal-btn">
                <svg src=></svg>
                <span class="paypal-words">PayPal</span>
            </button>
        </div>
        <div class="input-group" id="checkout-cardnumber">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>
        </div> 
        <div class="input-group" id="expiry-date">
            <label for="expire-date">Expiry-Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" required>
        </div>
        <div class="input-group" id="cvc">
            <label for="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="123" required>
        </div>
    `;
    checkoutContentContainer.appendChild(paymentMethodSection);

    //Order Summary
    const checkoutOrderSummarySection = document.createElement('div');
    checkoutOrderSummarySection.classList.add('checkout-order-summary-section');
    checkoutOrderSummarySection.innerHTML = `
        <h3 class="checkout-ordersummary-title">Order Summary</h3>
        <div class="checkout-ordersunmmary">
            <div class="order-summary-item">
                <div>
                    <img src="">
                </div>
                <div class="order-summary-words">
                    <span>Sample Product</span>
                    <p>quantity *1</p>
                    <span>$99.99</span>
                </div>    
            </div>
            <div class="order-summary-item">
                <div>
                    <img src="">
                </div>
                <div class="order-summary-words">
                    <span>Sample Product</span>
                    <p>quantity *2</p>                
                    <span>$99.98</span>
                </div>
            </div>
            <div class="order-subtotal">
                <strong>Subtotal</strong>
                <strong>$199.97</strong>
            </div>
            <div class="order-shipping">
                <strong>Shipping</strong>
                <span>$10</span>
            </div>
            <div class="order-total">
                <strong>Total</strong>
                <strong>$209.97</strong>
            </div>
        </div>
    `;
    checkoutContentContainer.appendChild(checkoutOrderSummarySection);

    //Checkout complete button
    const checkoutCompleteBtn = document.createElement('button');
    checkoutCompleteBtn.classList.add('checkout-complete-Btn');
    checkoutCompleteBtn.textContent = 'Complete Order';
    checkoutContentContainer.appendChild(checkoutCompleteBtn);

    //pop up message
    checkoutCompleteBtn.addEventListener('click', (event) => {
        event.preventDefault();

        confirmPayment();
    });

    function confirmPayment() {
        checkoutElement.innerHTML = `
        <div class="checkout-complete-message">
            <h4>Order palced successfully!</h4>
            <p>You will receive a confirm email</p>
            <button id="checkout-backtohome">Back to Home</button>
        </div>
        `;
    }

    //append all the content to the main checkout page
    checkoutElement.appendChild(checkoutContentContainer);
}