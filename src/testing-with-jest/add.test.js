// google doc with testing notes: https://docs.google.com/document/d/15lfJR4C02sDhxuoewa9ShVzbJajPj-M-VqVZ6PYCNxE/edit?tab=t.0
const add = require("./add");

test("add two numbers", () => {
	const reslut = add(1, 4);
	expect(reslut).toEqual(5);
});
