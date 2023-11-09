const oldArray = require("../matchers");

/*
    expect.anyThing()


    toEqual matcher كيخدمو مع ال expect methods ال
    null & undefined ولي كتعني بلي كتقوليه توقع ايي شيء. باستثناء ال
*/

test("expect anything expect null or undefined", () => {
    expect(10).toEqual(expect.anything())
    expect("mohamed").toEqual(expect.anything())
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.anything())
})



/*
    expect.any(constructor)

    لي غنعطيك constructor جا من ال receinved فبحالا كتقوليه شوف واش ال constructor. ولي كتقبل
    غيكون هاد النوع ديال البيانات received بمعني اخر بحلا كتقوليه شوف واش ال
*/

test("expect any, constructor", () => {
    expect(10).toEqual(expect.any(Number))

    expect("hello").toEqual(expect.any(String))

    expect([1, 2, 3, 4, 5]).toEqual(expect.any(Array))

    expect({ a: 1, b: 2 }).toEqual(expect.any(Object))
})


/*
    expect.arrayContaining(array)

    array كتقبل method هاد ال
    الوظيفة ديالها انك كتعطيها مصفوفة و كتقارن واش العناصر لي فيها كاينين تا فال المصفوفة المستلمة
*/

test("expect arrayContainin(array)", () => {
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.arrayContaining([5, 6, 2]));
    expect(["a", "B", "A"]).toEqual(expect.arrayContaining(["B"]));
})