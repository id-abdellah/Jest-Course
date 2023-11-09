const sayHello = require("../mock");

test("Mock function", () => {
    const moker = jest.fn(sayHello);
    expect(moker("osama")).toBe("hello osama")
    expect(moker("ahmed")).toBe("hello ahmed")
    expect(moker("mohamed")).toBe("hello mohamed")

    expect(moker).toHaveBeenCalled(); // واش الفانكشن تم الاستدعاء ديالها اصلا
    expect(moker).toHaveBeenCalledTimes(3); // واش هاد الفانكشن تنادات هاد العدد من المرات
    expect(moker).toHaveBeenCalledWith("ahmed"); // واش الفانكشن تنادات شي مرة بحال الارغ
    expect(moker).toHaveBeenLastCalledWith("mohamed"); // واش الفانكشن اخر مرة تنادات بهاد الارغ
    expect(moker).toHaveBeenNthCalledWith(2, "ahmed"); // واش الفانكشن فاش تنادات المرة التانية واش بهاد الارغ
})