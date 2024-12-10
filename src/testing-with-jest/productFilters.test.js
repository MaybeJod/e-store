// testing
const { getProductsFromApi } = require("./productFilters");

jest.mock("./productFilters");

describe("filter functions", () => {
	beforeEach(() => jest.clearAllMocks());

	const mockApiCall = (mockResponse) => {
		getProductsFromApi.get = jest.fn().mockResolvedValue(mockResponse);
	};

	test("should fetch category electronics", async () => {
		const mockResponse = { data: [{ category: "electronics" }] };
		mockApiCall(mockResponse);

		const data = await getProductsFromApi.get("/categories");
		expect(data).toEqual(mockResponse);
		expect(data.data).toEqual(mockResponse.data);
	});

	test("should fetch products filtered by price", async () => {
		const mockResponse = { data: [{ price: "all" }] };
		mockApiCall(mockResponse);

		const data = await getProductsFromApi.get("/price");
		expect(data).toEqual(mockResponse);
		expect(data.data).toEqual(mockResponse.data);
	});

	test("should fetch category jewelry", async () => {
		const mockResponse = { data: [{ category: "jewelery" }] };
		mockApiCall(mockResponse);

		const data = await getProductsFromApi.get("/categories");
		expect(data).toEqual(mockResponse);
		expect(data.data).toEqual(mockResponse.data);
	});
});
