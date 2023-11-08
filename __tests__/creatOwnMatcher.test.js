const myArray = require("../matchers");

function sum(a, b) {
    return a + b
}

// خاص بيك نتا matcher هادي هي الطريقة باش كتقاد
expect.extend({
    toBeLargerThanExtended(received, target) {
        // الجاية if لي غيتستعمل فال boolean فهو لي كياخد ال pass بالنسبة لهاد ال
        // ديالك matcher فين كدير اللوجيك ديال ال pass فهاد ال
        const pass = received > target;

        // داز ولا لا test في رسالة وفيه واش ال obj فراه كتجع false اولا true الا كان pass ال
        // test passed or failed لتحت هي لي كتحكم واش تطلع بلي ال pass يعني ال
        if (pass) {
            return {
                message: () => `Test Is Good`,
                pass: true,
            }
        } else {
            return {
                message: () => `Test is faild`,
                pass: false,
            }
        }
    }
})

test("testing my own matcher", () => {
    expect(sum(10, 20)).toBeLargerThanExtended(15)
})



/* ------------------------------------------------------ */


expect.extend({
    toBeInRange(received, target) {
        let { min, max } = target;
        const pass = received >= min && received <= max;

        if (pass) {
            return {
                message: () => `Test is passed`,
                pass: true,
            }
        } else {
            return {
                message: () => `Error: Test is faild`,
                pass: false,
            }
        }
    }
})

test("testing my toBeInRange matcher", () => {
    expect(20).toBeInRange({ min: 10, max: 50 })
})