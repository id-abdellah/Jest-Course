const arrayData = require("../matchers");

// check fo undefined
test("check of undefined", () => {
    let a;
    expect(a).toBeUndefined()
})


// match RegEx
test("regex", () => {
    let msg = "i am moha an iam moroccan";
    expect(msg).toMatch(/moha/)
})


// check for obj property
test("regex", () => {
    let obj = {
        theName: "mohamed",
        age: 200,
    };
    expect(obj).toHaveProperty("age", 200)
})