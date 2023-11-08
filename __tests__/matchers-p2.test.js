const myArrayData = require("../matchers");


// دبا مثلا بغينا نديرو شيك واش غاع عناصر المصفوفة ارقام وفيهاش ولا حرف

// الطريقة اللولة
test("check if all number is numbers, 1st method", () => {
    for (let i = 0; i < myArrayData.length; i++) {
        expect(isNaN(myArrayData[i])).toBe(false)
    }
})

// toBeFalsy matcher الطريقة الثانية باستعمال
test("check if all number is numbers 2st method", () => {
    for (let i = 0; i < myArrayData.length; i++) {
        expect(isNaN(myArrayData[i])).toBeFalsy()
    }
})

// toBeTruthy الطريقة الثالثة باستعمال
test("check if all number is numbers 2st method", () => {
    for (let i = 0; i < myArrayData.length; i++) {
        expect(isNaN(myArrayData[i])).not.toBeTruthy()
    }
})


/*
    اخرا خاصة بمقارنة الاعداد matchers كاينة

    1 - toBeGreaterThan()
    2 - toBeGreaterThanOrEqual()
    3 - toBeLessThan()
    4 - toBeLessThanOrEqual()
*/