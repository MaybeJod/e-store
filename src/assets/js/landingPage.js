import heroImgElement from "../images/hero-img.jpg";

export function createLandingPage() {
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
	path.setAttribute("d", "M972.25,266.83c-42.11-71.45-109.03-106.81-193.51-102.24-48.92,2.64-104.09,18.43-164.47,46.94,9.38-32.12,10.73-66.57,2.71-100.18-10.07-42.15-32.66-74.24-65.34-92.8-34.71-19.71-79.17-23.74-132.15-11.99-80.96,17.96-135.26,70.67-157.03,152.43-12.61,47.34-14.65,104.69-6.2,170.94-27.65-18.85-60-30.77-94.45-33.52-43.21-3.44-80.7,8.14-108.44,33.48-29.47,26.92-47.04,67.96-52.22,121.97-7.93,82.55,25.42,150.49,96.46,196.46,41.12,26.61,95.03,46.27,160.65,58.71-26.46,20.47-47.8,47.55-61.05,79.45-16.63,40.02-17.21,79.26-1.68,113.48,16.5,36.35,50.09,65.74,99.86,87.37,28.85,12.54,57.54,18.77,85.62,18.77,45.95,0,90.27-16.7,131.02-49.81,38.02-30.89,73.38-76.09,105.48-134.66,11.29,31.5,30.44,60.16,56.69,82.64,28.81,24.67,60.85,37.46,93.43,37.46,4.65,0,9.31-.26,13.98-.78,39.67-4.46,78-27.33,113.94-67.98,54.92-62.12,67.88-136.69,37.44-215.62-17.62-45.69-49.67-93.28-95.44-141.92,33.44-1.01,66.62-10.4,96.1-28.42,36.97-22.61,60.5-54.01,68.04-90.82,8.01-39.1-1.89-82.62-29.44-129.36ZM544.3,486.36c1.53.6,3.08,1.16,4.62,1.75,2.8,1.06,5.6,2.13,8.42,3.15.37.13.74.28,1.11.42-.04.3-.07.6-.11.89-.41,3.16-.77,6.33-1.12,9.5-.15,1.38-.33,2.76-.48,4.14-.48,4.55-.9,9.12-1.27,13.71-.08,1-.13,2.01-.21,3.01-.27,3.6-.53,7.21-.74,10.83-.1,1.73-.16,3.47-.25,5.2-.14,2.9-.28,5.8-.38,8.7-.01.42-.04.83-.05,1.24-.29.05-.58.12-.87.17-3.12.59-6.25,1.23-9.37,1.87-1.36.28-2.73.53-4.09.82-4.48.95-8.95,1.96-13.43,3.02-.98.23-1.96.49-2.93.73-3.52.85-7.03,1.72-10.54,2.65-1.6.42-3.19.87-4.78,1.31-2.89.79-5.79,1.57-8.67,2.4-.39.11-.77.21-1.16.32-.13-.23-.26-.46-.39-.69-1.65-3.02-3.35-6.03-5.06-9.03-.56-.99-1.1-1.99-1.67-2.97-2.31-3.99-4.66-7.97-7.08-11.92-.42-.69-.87-1.38-1.29-2.07-1.99-3.24-4.01-6.47-6.07-9.68-.88-1.36-1.79-2.72-2.68-4.07-1.65-2.53-3.31-5.06-5.01-7.57-.22-.33-.44-.67-.66-1,.2-.21.39-.43.59-.64,2.23-2.36,4.43-4.77,6.63-7.17.89-.98,1.8-1.94,2.69-2.92,3.07-3.41,6.11-6.86,9.11-10.36.61-.71,1.2-1.44,1.8-2.15,2.39-2.81,4.76-5.63,7.1-8.49,1.06-1.29,2.09-2.61,3.13-3.91,1.86-2.32,3.73-4.64,5.56-6.99.25-.32.5-.62.75-.94.28.13.56.26.84.39,2.88,1.36,5.79,2.69,8.71,4.01,1.26.57,2.49,1.16,3.76,1.72,4.2,1.87,8.43,3.69,12.69,5.47.77.32,1.55.62,2.32.94,3.5,1.44,7.01,2.87,10.55,4.24ZM317.08,173.55c16.44-61.75,53.95-98.31,114.65-111.78,15.76-3.5,30.15-5.24,43.18-5.24,47.05,0,76.27,22.75,87.07,67.96,13.66,57.18-10.83,117.95-60.95,151.49-58.31,38.49-99.25,73.33-105.93,79.1-.08.07-.15.13-.22.19-.13.11-.23.2-.33.28-.17.15-.3.26-.36.32l-24.74,21.63,25.08,21.23c4.14,3.5,8.39,6.93,12.7,10.32,1.21.95,2.43,1.89,3.65,2.83,3.47,2.68,6.98,5.31,10.55,7.91,1.02.74,2.03,1.5,3.06,2.24,4.47,3.21,9.01,6.35,13.63,9.43,1.05.7,2.13,1.38,3.19,2.08,3.75,2.46,7.55,4.89,11.39,7.27.76.47,1.49.97,2.25,1.44-.4.5-.79,1-1.19,1.49-2.72,3.36-5.48,6.69-8.27,9.97-.36.43-.72.86-1.08,1.29-3.15,3.67-6.35,7.28-9.57,10.85-.9.99-1.8,1.96-2.71,2.94-2.47,2.68-4.96,5.33-7.47,7.95-.96,1-1.92,2.01-2.89,3-3.34,3.42-6.7,6.8-10.11,10.1h0s-.02.02-.02.02c-14.96,14.48-30.56,27.73-46.61,39.6-12.69-34.62-32.22-93.49-44.85-158.26-15.63-80.16-16.67-146.66-3.09-197.65ZM57.42,457.27c6.69-69.68,36.84-104.92,89.66-104.92,3.32,0,6.73.14,10.23.42,58.58,4.67,108.79,46.7,125.21,104.7,18.65,67.6,39.23,117.46,42.56,125.35.01.03.03.07.04.1.09.22.17.39.23.54.08.18.13.32.17.39l12.92,30.21,27.94-17.28c3.29-2.04,6.57-4.14,9.83-6.28.88-.58,1.76-1.16,2.65-1.75,2.75-1.82,5.48-3.68,8.21-5.57.56-.39,1.12-.77,1.68-1.16,3.2-2.25,6.39-4.55,9.56-6.88.78-.57,1.55-1.16,2.32-1.74,2.57-1.92,5.13-3.87,7.67-5.85.76-.59,1.52-1.18,2.28-1.77,3.12-2.46,6.22-4.95,9.3-7.5.57-.47,1.13-.95,1.69-1.42,1.63-1.36,3.27-2.72,4.89-4.11.35.53.7,1.06,1.05,1.59,2.34,3.6,4.63,7.22,6.87,10.86.32.52.66,1.04.98,1.56,2.51,4.11,4.94,8.25,7.32,12.4.69,1.2,1.36,2.4,2.03,3.61,1.76,3.12,3.48,6.26,5.17,9.4.68,1.26,1.36,2.52,2.02,3.78,2.19,4.17,4.33,8.35,6.39,12.54.03.05.05.1.08.15v.02c4.15,8.49,7.98,17.03,11.55,25.58.36.87.76,1.74,1.12,2.61.46,1.12.87,2.24,1.31,3.36,3.34,8.33,6.46,16.67,9.25,25.02-36.84,1.37-98.85,1.75-164.35-6.24-81.07-9.91-144.64-29.47-188.95-58.14-53.65-34.72-76.85-81.69-70.9-143.59ZM476.37,912.42c-49.6,40.3-101.44,47.84-158.46,23.07-68.23-29.65-91.28-72.48-68.5-127.3,21.84-52.58,74.61-86.86,132.66-86.86,1.85,0,3.71.05,5.57.12,18.76.84,36.36,1.16,52.24,1.16,45.1,0,76.29-2.57,80.82-2.96.06,0,.1,0,.15-.01.13-.01.24-.02.31-.03l32.73-2.95-7.81-31.92c-.92-3.76-1.91-7.52-2.93-11.28-.28-1.02-.56-2.04-.85-3.06-.88-3.16-1.8-6.32-2.75-9.48-.2-.67-.39-1.34-.6-2-1.14-3.73-2.34-7.45-3.58-11.18-.31-.94-.64-1.87-.95-2.81-1.02-3.02-2.08-6.03-3.17-9.04-.33-.92-.65-1.83-.99-2.75-1.37-3.73-2.78-7.45-4.25-11.17-.26-.67-.54-1.34-.81-2.01-.8-1.99-1.59-3.98-2.41-5.97.62-.17,1.24-.34,1.85-.51,4.16-1.11,8.33-2.18,12.5-3.19.57-.14,1.14-.29,1.71-.43,4.71-1.12,9.41-2.16,14.12-3.15,1.31-.27,2.61-.53,3.91-.79,3.58-.72,7.15-1.4,10.72-2.04,1.37-.24,2.73-.49,4.09-.73,4.71-.81,9.42-1.56,14.11-2.23h.03c5.14-.73,10.27-1.38,15.39-1.94,15.36-1.68,30.59-2.58,45.6-2.7-.63,2.21-1.29,4.52-1.99,6.91,0,0,0,0,0,0-10.45,35.88-28.59,91.26-54.77,147.47-34.48,74.05-72.72,128.47-113.68,161.74ZM853.2,835.52c-49.28,55.73-97.14,64.41-142.23,25.81-44.64-38.22-60.55-101.74-39.75-158.31,22.23-59.22,34.71-107.67,38.37-122.73.01-.05.02-.09.03-.14.12-.48.23-.96.33-1.37.45-1.87.71-2.99.77-3.28l7.31-32.05-32.78-2.43c-5.18-.38-10.4-.65-15.64-.86-1.57-.06-3.16-.1-4.73-.15-3.85-.12-7.71-.19-11.59-.21-.99,0-1.97-.05-2.96-.05s-1.99.02-2.98.03c-1.19,0-2.38.02-3.58.04-3.21.04-6.43.12-9.66.22-.85.03-1.7.04-2.55.08-4.01.15-8.03.35-12.05.6-.96.06-1.92.13-2.89.2-1.95.13-3.9.25-5.86.41.03-.62.06-1.25.09-1.87.23-4.35.5-8.68.84-13,.04-.54.07-1.09.11-1.64.39-4.82.85-9.62,1.37-14.4.14-1.33.31-2.65.46-3.98.42-3.62.88-7.22,1.37-10.81.19-1.38.37-2.75.57-4.12.69-4.73,1.42-9.45,2.24-14.13,3.17-18.1,7.37-35.68,12.44-52.67.67-2.25,1.31-4.54,2.01-6.77,30.61,20.55,81.02,56.7,129.31,101.67,59.76,55.67,99.69,108.86,118.67,158.09,22.99,59.62,14.14,111.25-27.05,157.83ZM904.15,438.78c-50.13,30.66-115.45,26.17-162.83-11.09-54.6-43.55-100.4-71.73-108.03-76.35-.1-.06-.19-.12-.28-.17-.14-.08-.25-.15-.36-.21-.19-.12-.35-.21-.42-.25l-28.21-16.85-12.44,30.41c-2.06,5.03-4.01,10.14-5.9,15.29-.53,1.44-1.04,2.89-1.56,4.33-1.48,4.15-2.91,8.33-4.29,12.55-.38,1.18-.79,2.34-1.16,3.53-1.67,5.26-3.27,10.58-4.78,15.95-.33,1.17-.63,2.35-.95,3.53-1.2,4.38-2.34,8.79-3.43,13.23-.21.85-.45,1.68-.66,2.53-.59-.22-1.17-.44-1.76-.66-4.06-1.56-8.09-3.16-12.1-4.81-.5-.21-1.01-.4-1.51-.61-4.46-1.86-8.88-3.78-13.26-5.75-1.24-.56-2.47-1.13-3.71-1.7-3.27-1.5-6.52-3.03-9.75-4.59-1.29-.63-2.59-1.25-3.87-1.88-4.15-2.05-8.27-4.14-12.34-6.29-.12-.07-.25-.13-.37-.19l-.07-.04c-18.37-9.75-35.75-20.48-51.97-32.06,29-22.76,78.94-59.51,136.63-91.53,71.4-39.65,134.33-61.19,187.03-64.04,63.81-3.45,110.18,20.92,141.75,74.49,37.78,64.08,31.25,112.28-19.39,143.25Z"); // Abbreviated for brevity
	svg.appendChild(path);

	heroLogo.appendChild(svg);
	heroBanner.appendChild(heroLogo);

	const bannerTextDuplicate = document.createElement("h3");
	bannerTextDuplicate.textContent = "BLACK FRIDAY SALE";
	heroBanner.appendChild(bannerTextDuplicate);

	const productsHeader = document.createElement("div");
	productsHeader.classList.add("products");

	// Append Hero and Hero Banner to the Body
	document.querySelector("#heroSection").appendChild(hero);
	document.querySelector("#heroSection").appendChild(heroBanner);
	document.querySelector("#heroSection").appendChild(productsHeader);


		// Append Hero and Hero Banner to the Body
		document.querySelector("#heroSection").appendChild(hero);
		document.querySelector("#heroSection").appendChild(heroBanner);
        document.querySelector("#heroSection").appendChild(productsHeader);

}

