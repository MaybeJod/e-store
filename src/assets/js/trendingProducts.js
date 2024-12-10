export function createTrendingSection() {
	const trendingHeader = document.createElement("div");
	trendingHeader.classList.add("trending-section");

	const trendingContent = document.createElement("h1");
	trendingContent.textContent = "TOP RATED";
	trendingContent.classList.add("trending");
	trendingHeader.appendChild(trendingContent);

	const trendingTop = document.createElement("div");
	trendingTop.classList.add("trending-top"); // Corrected: added class to `trendingTop`

	document.querySelector("#topRated").appendChild(trendingHeader);
	document.querySelector("#topRated").appendChild(trendingTop);
}
