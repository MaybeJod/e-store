export function createTrendingSection() {
	const trendingHeader = document.createElement("div");
	trendingHeader.classList.add("trending-section");

	const trendingContent = document.createElement("h1");
	trendingContent.textContent = "TOP RATED";
	trendingContent.classList.add("trending");
	trendingHeader.appendChild(trendingContent);

	const trendingTop = document.createElement("div");
	trendingHeader.classList.add("trending-top");

	const trendingImgSmall = document.createElement("img");

	document.querySelector("#topRated").appendChild(trendingHeader);
	document.querySelector("#topRated").appendChild(trendingTop);

	//<div class="trending-top">
	// <div class="trending-top-left"><img src="https://placehold.co/300x300" alt="">
	// <img src="https://placehold.co/300x300" alt=""></div>
	//<div class="trending-top-right">
	//<img src="https://placehold.co/600x315" alt="">
	//</div>
	//</div>
	//<div class="trending-bot">
	//<div class="trending-bot-left">
	//<img src="https://placehold.co/600x315" alt="">
	//</div>
	//<div class="trending-bot-right">
	//<img src="https://placehold.co/300x300" alt="">
	//<img src="https://placehold.co/300x300" alt=""></div>
	//</div>
}
