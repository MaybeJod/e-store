/* landing page products */
import { displayCategoriesOnLandingPage } from "../productDisplay_LP";

/* landing page */
import { createLandingPage } from "../landingPage.js";
import { createTrendingSection } from "../trendingProducts.js";

/* cart */
import renderCartPage from "../cart/cartPage.js";

export default function homeReset() {
	/* hero and banner */
	createLandingPage();
	createTrendingSection();

	/* run cart function*/
	renderCartPage();

	/* landing page product categories */
	displayCategoriesOnLandingPage();
}
