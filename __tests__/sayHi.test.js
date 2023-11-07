const sayHello = require("../sayHi");

test("say hello world message", () => {
    expect(sayHello()).toBe("hello world")
})