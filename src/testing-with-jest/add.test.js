const add = require("./add");

test("add two numbers", () => {
	const reslut = add(1, 4);
	expect(reslut).toEqual(5);
});
