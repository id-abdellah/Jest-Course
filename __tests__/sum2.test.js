const sum = require("../sum2");

it("returning num1 + num2 + num3", () => {
    expect(sum()).toBe(0);
})

it("returning num1 + num2 + num3", () => {
    expect(sum(10)).toBe(10);
})

it("returning num1 + num2 + num3", () => {
    expect(sum(10, 20)).toBe(30);
})

it("returning num1 + num2 + num3", () => {
    expect(sum(10, 20, 40)).toBe(70);
})