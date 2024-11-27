// fetch the api for multiple products
export default async function fetchProduct(url) {
	try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.trace("An error occurred: ", error.message);
    }
}
