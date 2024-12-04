import heroImgElement from "../images/hero-img.jpg";

export function createLandingPage() {
	document.addEventListener("DOMContentLoaded", () => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "src/assets/styles/hero.css"; // Replace with the path to your CSS file
		document.head.appendChild(link);

		// Create Hero Section
		const hero = document.createElement("div");
		hero.classList.add("hero");

		const heroLeft = document.createElement("div");
		heroLeft.classList.add("hero-left");

		const heroHeading = document.createElement("h1");
		heroHeading.innerHTML = "JAS<br/>MIZ";
		heroLeft.appendChild(heroHeading);

		const heroLink = document.createElement("a");
		heroLink.href = "#";
		heroLink.textContent = "SHOP ALL";
		heroLeft.appendChild(heroLink);

		const heroRight = document.createElement("div");
		heroRight.classList.add("hero-right");

		const heroImg = document.createElement("img");
		heroImg.src = heroImgElement;

		heroRight.appendChild(heroImg);

		const heroSubheading = document.createElement("h3");
		heroSubheading.innerHTML = "NEW YEAR<br />NEW SWAG";
		heroRight.appendChild(heroSubheading);

		hero.appendChild(heroLeft);
		hero.appendChild(heroRight);

		// Create Hero Banner Section
		const heroBanner = document.createElement("div");
		heroBanner.classList.add("hero-banner");

		const bannerText = document.createElement("h3");
		bannerText.textContent = "BLACK FRIDAY SALE";
		heroBanner.appendChild(bannerText);

		const heroLogo = document.createElement("div");
		heroLogo.classList.add("hero-logo");

		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("id", "Lager_1");
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttribute("viewBox", "0 0 1004.38 1006.11");
		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "M972.25,266.83c..."); // Abbreviated for brevity
		svg.appendChild(path);

		heroLogo.appendChild(svg);
		heroBanner.appendChild(heroLogo);

		// Append Hero and Hero Banner to the Body
		document.body.appendChild(hero);
		document.body.appendChild(heroBanner);
	});
}
