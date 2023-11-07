const filterName = require("../input");

describe("checking for name validation", () => {
    test("if user did not type the name", () => {
        expect(filterName()).toBe("unknown")
    })

    test("if user inserts space in the beggening or the end", () => {
        expect(filterName(" Obito ")).toBe("Obito")
    })

    test("if name not start with underscore", () => {
        expect(filterName("_Obito")).toBe("Obito")
    })

    test("if name starts with number", () => {
        expect(filterName("233Obito")).toBe("Obito")
    })
})