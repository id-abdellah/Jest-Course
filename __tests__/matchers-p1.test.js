const myArrayData = require("../matchers");


// toBe هو لي عطيناه اولا لا كنستخدمو array length دبا مثلا الطريقة الولة باش واش بصح
test("check length of array", () => {
    expect(myArrayData.length).toBe(6)
})

// toHaveLength سميتو matcher باش نديرو نفس الوظيفة الفوق كاين
test("check length of array", () => {
    expect(myArrayData).toHaveLength(6)
})

test("check length of array", () => {
    expect("Mohamed").toHaveLength(7)
})


/* -------------------------------------------------- */

// ومثلا بغينا نديرو تيست واش شي عنصر كاين فالمصفوفة

test("check if an element is exist", () => {
    expect(myArrayData).toContain(3)
})

test("check if an element is exist", () => {
    expect("Mohamed").toContain("M")
})

/* -------------------------------------------------- */

// matcher فهي كتنفي اي not اما بالنسبة لل


test("check if an element is not exist", () => {
    expect(myArrayData).not.toContain(100)
})

test("check if an element is not exist", () => {
    expect("Mohamed").not.toContain("G")
})


// 0 مثلا تجرب بيه واش غا عناصر المصفوفة مفيهاش loop ويمكن ليك تا دير

test("using for loop", () => {
    for (let i = 0; i < myArrayData.length; i++) {
        expect(myArrayData[i]).not.toBe(0)
    }
})