/* import {
	updateItemQuantity,
	removeItemFromCart,
} from "./cart/cartOperations.js";
import { getCart } from "./cart/cartOperations.js";  */ // 确保引入 getCart 函数

import resetContent from "./components/resetContent";
import homeReset from "./components/home-reset";

export default function checkoutPage(cart) {
	const checkoutElement = document.getElementById("checkout");
	if (checkoutElement) {
		console.log("Checkout page is loaded");
	}
	if (!Array.isArray(cart)) {
		console.error("Invalid cartItems:", cart);
		return; // Exit if cartItems is not an array
	}

	const createForm = (title) => {
		const checkoutFormContainer = document.createElement("div");
		checkoutFormContainer.classList.add("checkout-form-container");

		const checkoutFormTitle = document.createElement("h2");
		checkoutFormTitle.classList.add("checkout-form-title");
		checkoutFormTitle.textContent = title;

		const form = document.createElement("form");
		form.id = "checkoutForm";

		const customerInfoSection = document.createElement("div");
		customerInfoSection.classList.add("checkout-section");
		customerInfoSection.innerHTML = `
            <h3 class="checkout-customer-title" id="customerTitle">Customer Information</h3>
            <div class="checkout-input-group email" id="email-checkout">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="checkout-input-group" id="firstName">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required>
            </div>
            <div class="checkout-input-group" id="lastName">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required>
            </div>
            <div class="checkout-input-group" id="address">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" required>
            </div>
            <div class="checkout-input-group" id="city">
                <label for="city">City</label>
                <input type="text" id="city" name="city" required>
            </div>
            <div class="checkout-input-group" id="country">
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="SE">Sweden</option>
                </select>
            </div>
            <div class="checkout-input-group" id="postalCode">
                <label for="postal-code">Postal Code</label>
                <input type="text" id="postal-code" name="postal-code" required>
            </div>
        `;
		form.appendChild(customerInfoSection);

		checkoutFormContainer.appendChild(checkoutFormTitle);
		checkoutFormContainer.appendChild(form);

		return checkoutFormContainer;
	};

	const checkoutContentContainer = document.createElement("div");
	checkoutContentContainer.classList.add("checkout-content-container");
	checkoutContentContainer.appendChild(createForm("Checkout Form"));

	//Payment setion
	const paymentMethodSection = document.createElement("div");
	paymentMethodSection.classList.add("checkout-payment-section");
	paymentMethodSection.innerHTML = `
        <h3 class="payment-section-title">Payment Details</h3>
        
        <div class="payment-section-options">
            <button class="creditCard-btn">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">>
                    <path d="M19 20V14M19 14L21 16M19 14L17 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M10 16H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M13 16H12.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 10L7 10M22 10L11 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>                </svg>
                <span class="creditCard-words">Credit Card</span>
                </button>
                <button class="paypal-btn">
                    <svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px" height="800px"
                        viewBox="0 0 780 501" enable-background="new 0 0 780 501" xml:space="preserve">
                        <g>
                            <path fill="#003087" d="M168.379,169.853c-8.399-5.774-19.359-8.668-32.88-8.668H83.153c-4.145,0-6.435,2.073-6.87,6.215
                                L55.018,300.883c-0.221,1.311,0.107,2.51,0.981,3.6c0.869,1.092,1.962,1.635,3.271,1.635h24.864c4.361,0,6.758-2.068,7.198-6.215
                                l5.888-35.986c0.215-1.744,0.982-3.162,2.291-4.254c1.308-1.09,2.944-1.803,4.907-2.13c1.963-0.324,3.814-0.487,5.562-0.487
                                c1.743,0,3.814,0.11,6.217,0.327c2.397,0.218,3.925,0.324,4.58,0.324c18.756,0,33.478-5.285,44.167-15.866
                                c10.684-10.577,16.032-25.243,16.032-44.004C180.976,184.96,176.774,175.636,168.379,169.853z M141.389,209.933
                                c-1.094,7.635-3.926,12.649-8.506,15.049c-4.581,2.403-11.124,3.598-19.629,3.598l-10.797,0.327l5.563-35.007
                                c0.434-2.397,1.851-3.597,4.252-3.597h6.218c8.72,0,15.049,1.257,18.975,3.761C141.389,196.574,142.698,201.865,141.389,209.933z"
                                />
                            <path fill="#009CDE" d="M720.794,161.185h-24.208c-2.405,0-3.821,1.2-4.253,3.6l-21.267,136.099l-0.328,0.654
                                c0,1.096,0.437,2.127,1.311,3.109c0.868,0.98,1.963,1.471,3.27,1.471h21.595c4.138,0,6.429-2.068,6.871-6.215l21.265-133.813
                                v-0.325C725.049,162.712,723.627,161.185,720.794,161.185z"/>
                            <path fill="#003087" d="M428.31,213.856c0-1.088-0.439-2.126-1.306-3.106c-0.875-0.981-1.858-1.474-2.945-1.474h-25.192
                                c-2.404,0-4.366,1.096-5.889,3.271l-34.679,51.04l-14.395-49.075c-1.095-3.487-3.492-5.236-7.197-5.236h-24.541
                                c-1.093,0-2.074,0.492-2.941,1.474c-0.875,0.98-1.309,2.019-1.309,3.106c0,0.44,2.127,6.871,6.379,19.303
                                c4.252,12.435,8.832,25.849,13.74,40.245c4.908,14.393,7.469,22.031,7.688,22.898c-17.886,24.43-26.826,37.517-26.826,39.259
                                c0,2.838,1.416,4.254,4.253,4.254h25.192c2.398,0,4.36-1.088,5.889-3.27l83.427-120.399
                                C428.092,215.713,428.31,214.953,428.31,213.856z"/>
                            <path fill="#009CDE" d="M662.887,209.276h-24.866c-3.055,0-4.904,3.6-5.558,10.798c-5.677-8.721-16.031-13.088-31.083-13.088
                                c-15.704,0-29.066,5.89-40.077,17.668c-11.016,11.778-16.521,25.631-16.521,41.551c0,12.871,3.761,23.121,11.285,30.752
                                c7.525,7.639,17.612,11.451,30.266,11.451c6.323,0,12.757-1.311,19.3-3.926c6.544-2.617,11.665-6.105,15.379-10.469
                                c0,0.219-0.222,1.199-0.655,2.943c-0.44,1.748-0.655,3.059-0.655,3.926c0,3.494,1.414,5.234,4.254,5.234h22.576
                                c4.138,0,6.541-2.068,7.194-6.215l13.415-85.39c0.215-1.309-0.112-2.507-0.982-3.599
                                C665.284,209.823,664.196,209.276,662.887,209.276z M620.193,273.729c-5.562,5.453-12.268,8.178-20.12,8.178
                                c-6.328,0-11.449-1.742-15.377-5.234c-3.927-3.484-5.89-8.283-5.89-14.395c0-8.065,2.726-14.886,8.18-20.447
                                c5.447-5.562,12.214-8.343,20.285-8.343c6.101,0,11.173,1.8,15.212,5.397c4.032,3.6,6.054,8.563,6.054,14.889
                                C628.536,261.625,625.754,268.279,620.193,273.729z"/>
                            <path fill="#003087" d="M291.231,209.276h-24.865c-3.058,0-4.908,3.6-5.563,10.798c-5.889-8.721-16.25-13.088-31.081-13.088
                                c-15.704,0-29.065,5.89-40.078,17.668c-11.016,11.778-16.521,25.631-16.521,41.551c0,12.871,3.763,23.121,11.288,30.752
                                c7.525,7.639,17.61,11.451,30.262,11.451c6.104,0,12.433-1.311,18.975-3.926c6.543-2.617,11.778-6.105,15.704-10.469
                                c-0.875,2.617-1.309,4.908-1.309,6.869c0,3.494,1.417,5.234,4.253,5.234h22.574c4.141,0,6.543-2.068,7.198-6.215l13.413-85.39
                                c0.215-1.309-0.111-2.507-0.981-3.599C293.627,209.823,292.537,209.276,291.231,209.276z M248.535,273.891
                                c-5.563,5.35-12.382,8.016-20.447,8.016c-6.329,0-11.4-1.742-15.214-5.234c-3.819-3.484-5.726-8.283-5.726-14.395
                                c0-8.065,2.725-14.886,8.18-20.447c5.449-5.562,12.211-8.343,20.284-8.343c6.104,0,11.175,1.8,15.214,5.397
                                c4.032,3.6,6.052,8.563,6.052,14.889C256.878,261.844,254.097,268.553,248.535,273.891z"/>
                            <path fill="#009CDE" d="M540.036,169.853c-8.398-5.774-19.356-8.668-32.879-8.668h-52.019c-4.365,0-6.765,2.073-7.198,6.215
                                l-21.265,133.483c-0.221,1.311,0.106,2.51,0.981,3.6c0.866,1.092,1.962,1.635,3.271,1.635h26.826c2.617,0,4.361-1.416,5.235-4.252
                                l5.89-37.949c0.216-1.744,0.98-3.162,2.29-4.254c1.309-1.09,2.943-1.803,4.908-2.13c1.962-0.324,3.813-0.487,5.562-0.487
                                c1.743,0,3.814,0.11,6.214,0.327c2.399,0.218,3.93,0.324,4.58,0.324c18.759,0,33.479-5.285,44.168-15.866
                                c10.687-10.577,16.031-25.243,16.031-44.004C552.632,184.96,548.431,175.636,540.036,169.853z M506.502,223.673
                                c-4.799,3.271-11.997,4.906-21.592,4.906l-10.47,0.327l5.563-35.007c0.432-2.397,1.849-3.597,4.252-3.597h5.887
                                c4.797,0,8.614,0.218,11.454,0.653c2.831,0.439,5.561,1.799,8.178,4.089c2.619,2.29,3.926,5.618,3.926,9.979
                                C513.7,214.185,511.298,220.399,506.502,223.673z"/>
                        </g>
                    </svg>
                    <span class="paypal-words">PayPal</span>
            </button>
        </div>
        <div class="input-group" id="checkout-cardnumber">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" name="card-number' placeholder="1234 5678 9012 3456" required>
        </div> 
        <div class="input-group" id="expiry-date">
            <label for="expiry-date">Expiry-Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
        </div>
        <div class="input-group" id="cvc">
            <label for="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" placeholder="123" required>
        </div>
    `;
	checkoutContentContainer.appendChild(paymentMethodSection);

	document.addEventListener("DOMContentLoaded", () => {
		const defalutButtonColor = "var(--defalut-button-color)";
		//click the paypal button to remove the card number, expiry date, and cvc
		const changeButton = document.querySelector(".paypal-btn");
		const removeCardNumber = document.querySelector("#checkout-cardnumber");
		const removeExpiryDate = document.querySelector("#expiry-date");
		const removeCvc = document.querySelector("#cvc");
		const creditCardBtn = document.querySelector(".creditCard-btn");

		if (changeButton) {
			changeButton.addEventListener("click", () => {
				changeButton.style.backgroundColor = "var(--main-yellow)";
				creditCardBtn.style.backgroundColor = defalutButtonColor;
				removeCardNumber.style.display = "none";
				removeExpiryDate.style.display = "none";
				removeCvc.style.display = "none";
			});
		} else {
			console.error("One or more elements could not be found.");
		}

		//click the credit card button to show the card number, expiry date, and cvc
		if (creditCardBtn) {
			creditCardBtn.addEventListener("click", () => {
				creditCardBtn.style.backgroundColor = "var(--main-yellow)";
				changeButton.style.backgroundColor = defalutButtonColor;
				removeCardNumber.style.display = "block";
				removeExpiryDate.style.display = "block";
				removeCvc.style.display = "block";
			});
		}
	});

	//Order Summary
	const checkoutOrderSummarySection = document.createElement("div");
	checkoutOrderSummarySection.classList.add("checkout-order-summary-section");
	// math logic of price summary
	let subtotal = 0;
	cart.forEach((item) => {
		const { id, title, price, quantity, image } = item;
		subtotal += price * quantity;

		const itemElement = document.createElement("div");
		itemElement.classList.add("cart-item");

		itemElement.innerHTML = `
            <div class="item-image-container">
				<img src="${image}" alt="${title}" class="cart-item-image" />
			</div>
			<div class="cart-item-details">
				<h3>${title}</h3>
				<p class="item-meta">Size: Large</p>
				<p class="item-meta">Color: White</p>
				<p class="item-price">$${price}</p>
			</div>
            `;
		checkoutOrderSummarySection.appendChild(itemElement);
	});

	const deliveryFee = 15;
	const total = subtotal + deliveryFee;

	checkoutOrderSummarySection.innerHTML += `
            <div class="subtotal-all">
                <div class="subtotal-a">Subtotal: $${subtotal.toFixed(2)}</div>
                <div class="delivery-b">Delivery Fee: $${deliveryFee.toFixed(
									2
								)}</div>
                <div class="total-c">Total: $${total.toFixed(2)}</div>
            </div>
        `;

	checkoutElement.appendChild(checkoutOrderSummarySection);

	checkoutContentContainer.appendChild(checkoutOrderSummarySection);

	//Checkout complete button
	const checkoutCompleteBtn = document.createElement("button");
	checkoutCompleteBtn.classList.add("checkout-complete-Btn");
	checkoutCompleteBtn.textContent = "Complete Order";
	checkoutContentContainer.appendChild(checkoutCompleteBtn);

	//pop up message
	checkoutCompleteBtn.addEventListener("click", (event) => {
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
		const checkoutHomeElement = document.querySelector("#checkout-backtohome");
		checkoutHomeElement.addEventListener("click", () => {
			resetContent();
			homeReset();
		});
	}

	//append all the content to the main checkout page
	checkoutElement.appendChild(checkoutContentContainer);
}
