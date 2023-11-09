<style>h1,h2,h3,h4 { border-bottom: 0; color: white; font-size: 35px } </style>
<h1>Setting Environment</h1>

<br>
<br>


اولا كتقاد ملف كيهز المشروع وكدير فيه <i>npm init</i>

من بعد كتيليشارجي ال jest framework

```
    npm i jest --save-dev
```

ال <i>--save</i> وحدها كتعني ان هاد ال package من ضمن المشروع يعني ضرورية باش المشروع يخدم 

اما ال <i>--save-dev</i> ف كتعني ان هاد ال package معمولة لل development بوحدو, اي ماشي ضروري للمشروع

<br>
<br>

<h1>Test Driven Development & first test</h1>

<br>
<br>

Testing Rules:

[1] Get the function to test  
[2] Give input to the function  
[3] Define what is the output  
[4] Check for the output  

TDD => Test Driven Development:

[1] Think about what your code will do  
[2] Write the code  
[3] Test the code

<br>

دبا عندي ملف js فيه function سميتها sayHello ولي كترجع رسالة 

باش ندير test ليها خاصني export function و ندير import فملف ال test

مدير ملف js بنفس سمية الملف اللول لي غدير ليه test 

كمثال sayHi.test.js و كتحطو يما حداه يما فداخل مجلد سميتو \_\_tests\_\_

```js
/* sayHi.js */

function sayHello() {
    return "hello world"
}

module.exports = sayHello;


/* __tests__/sayHi.test.js */

const sayHello = require("../sayHi");

test("say hello world message", () => {
    expect(sayHello()).toBe("hello world")
})


// after running npm test in cli

> jest@1.0.0 test
> jest

 PASS  __tests__/sayHi.test.js
  √ say hello world message (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.239 s
Ran all test suites.
```

وبالنسبة لقضية ال watch يعني اي تعديل ديرو فملف ال test يمشي يدير auto test in cli  
فراه كتمشي لل package.json - scripts - test وكضيف قدام jest امر wachAll--

بالنسبة للداكشي لي مكتوب فال sayHi.test.js

```js
test("test description", () => {
    expect(func()).toBe("output")
})
```


<br>
<br>

<h1>Jest global methods - Test part 1</h1>

<br>
<br>

فهاد الدرس درنا function بسيطة ولي هي sum  
ال test الي درنا عليها انها تقد تستقبل غاع الاحتمال  
يعني يقدر المستدخل ميدخل والو وغترجع ليه 0 و يقدر يدخل رقم واحد وترجع ليه داك الرقم لي دخل و يقدر يدخل جوج اولا تلاتة وترجع ليه المجموع تاعهم

```js
// New Info
test("name || description", function(), timeout)
```

```js
/* sum.js */

function sum(num1, num2, num3) {
    return (num1 || 0) + (num2 || null) + (num3 || null)
}
module.exports = sum;
```

```js
/* sum.test.js */

const sum = require("../sum");

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

/* test لل elias هي it بالنسبة لل */
```


<br>
<br>

<h1>Jest global methods - Test part 2</h1>

<br>
<br>

عملية انك دير test و يطلع فاشل وترجع تقاد فال function كتسما <i>Refactoring</i>

```js
// New Info
test("name || description", function(), timeout)
```

```js
/* sum2.js */

function sum2(...numbers) {
    return numbers.reduce((pv, cv) => pv + cv, 0)
}
module.exports = sum;
```

```js
/* sum2.test.js */

const sum = require("../sum2");

/*
    // غينجحو tests فراه غا ال spread syntax بالنسبة للحالة ديال ال
    // الا فحالة وحدة لي مغينجحش فيها اللول
    // غيرجع هو input التيست لول غيفشل حيت خاصك تحطو باش فحالة مكانش ا reduce فال initial value حيت الا محطيتيش
*/

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

it("returning num1 + num2 + num3", () => {
    expect(sum(10, 20, 40, 40, 100)).toBe(210);
})

/* test لل elias هي it بالنسبة لل */
```

<br>
<br>

<h1>Jest global methods - Describe</h1>

<br>
<br>

ال <i>describe</i> هو فقط عبارة عن تنظيم لل test block only. يعني هو ماشي require باش تكتبو

```js
/*
    syntax:
        describe("name || title", function())
*/
describe("parent describe", () => {

    describe("first nested describe", () => {
                
        it("returning num1 + num2 + num3", () => {
            expect(sum()).toBe(0);
        })

        it("returning num1 + num2 + num3", () => {
            expect(sum(10)).toBe(10);
        })
    })

    describe("second nested describe", () => {

        it("returning num1 + num2 + num3", () => {
            expect(sum(10, 20)).toBe(30);
        })

        it("returning num1 + num2 + num3", () => {
            expect(sum(10, 20, 40)).toBe(70);
        })

        it("returning num1 + num2 + num3", () => {
            expect(sum(10, 20, 40, 40, 100)).toBe(210);
        })
    })

})
```


<br>
<br>

<h1>Describe and Test advanced assignment + simple JSDoc</h1>

<br>
<br>

فهاد الدرس درنا غا تمرين على دالة كتقبل كبراميتر سترينغ اسم و كتجعو بناء على مجوعة شروط ك خاص الاسم ميبداش و ميكملش بمسافة, و ميبداش بالاندرسكور, و ميفوتش عشرة احرف... الخ

اما بالنسبة لل JSDoc فهو طريقة كتعبر بيها على الوظائف لي كدير الدالة ديالك

يعني انك اي test درتيه فال jest تقد ضيفو فال JSDoc

[السيت الرسمي ل JSDoc](https://jsdoc.app/)

انا ستعاملت JSDoc بسيطة وعادية, حيت الحاجة الاحترافية خاصها الوقت للتعلم, من بعد ان شاء الله

```js
/* input.js */

/**
 * filterName function
 * [1] if no name inserted will return unknown
 * [2] if the name starts or ends with space, the space will be trimed
 * [3] if the name starts with underscore, the underscore will be trimed
 * [4] if the name start with number, all the numbers that are in the begginin of the name will be trimed
 */
function filterName(name = "unknown") {
    if (name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim();
    }
    if (name.startsWith("_")) {
        name = name.slice(1);
    }
    if (typeof +name[0] == "number") {
        let indexOfFirstLetter;
        for (let i = 0; i < name.length; i++) {
            if (isNaN(+name[i])) {
                indexOfFirstLetter = i;
                break;
            }
        }
        name = name.slice(indexOfFirstLetter);
    }
    return name;
}
module.exports = filterName;
```

```js
/* input.test.js */
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
```


<br>
<br>

<h1>Jest global methods - Test only and skip</h1>

<br>
<br>

مثلا عندك فايل عاامر مئاات ال tests
وفكل test جديد كتأكد منو كيعاود يدير تأكيد لغاع ال tests لي عندك. وبطبيعة الحالة هادشي غيدي وقت كتيير

هنا فين كاين الحل ديال ال <i>skip & only</i>

ال <i>only</i> كيمكن ليك ديرها لل test or describe. ولي الا درتيها ليهم كيدير test غار لهادوك لي فيهم only و كيتجاهل لوخرين. ويمكن ليك ايضا دير ال only على شحال من block ماشي غا واحد

العكس هو ال <i>skip</i> ولي تاهي كدار لل test or describe غار هادي كدير test لغااع ال blocks لوخرين وكتجاهل لي درتي ليهم skip

```js
// a
/* هاد الديسكرايب بوحدو لي غيدار ليه التيست */
describe.only("first nested describe", () => {
    
    it.skip("returning num1 + num2 + num3", () => {
        expect(sum()).toBe(0);
    })
    /* هاد البلوك بوحدها لي غيدار ليهم تيست اما الفوقانية غيتم التجاهل ديالها */
    it("returning num1 + num2 + num3", () => {
        expect(sum(10)).toBe(10);
    })
})
```

<br>
<br>

<h1>Jest global methods - beforeAll & afterAll</h1>

<br>
<br>

```js
/*
    beforeAll(fnc, timeout)
    beforeEach(fnc, timeout)

    afterAll(fnc, timeout)
    afterAll(fnc, timeout)
*/

/*
    beforeAll

    كدير هاد المسايل tests الغرض منها انها قبل غاع ال

    beforeEach

    ... كيدير هاد المسايل test اما هادي ف قبل كل

    
    afterAll & afterEach نفس الحاجة غار هو العكس بالنسبة لل

*/

beforeAll(() => {
    // Connect to database
    // Empty testing table
    // Add dummy data for testing
    // Prepare Everything before testing
})

beforeEach(() => {
    // Connect to database
    // Empty testing table
    // Add dummy data for testing
    // Prepare Everything before testing
})

afterAll(() => {
    // Clean database
    // Clean cash
})
```

<br>
<br>

<h1>Jest Matchers</h1>

<br>
<br>

بالنسبة لل matchers ف هوما لي كيكونو مورا ال expect 

ودبا حنا من لول عارفين غا toBe ولي هو matcher

فهاد الدرس شفنا تقريبا شي جوج matchers جداد لي هوما toHaveLength, toContain وشفنا تا كيفاش ننفيو ال matchers باستخدام ال not

```js
/* matchers.js */
const myData = [5, 2, 3, 4, 5, 5];
module.exports = myData;
```

```js
/* matchers-p1.test.js */

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


test("check if an element is exist", () => {
    expect(myArrayData).not.toContain(100)
})

test("check if an element is exist", () => {
    expect("Mohamed").not.toContain("G")
})

// 0 مثلا تجرب بيه واش غا عناصر المصفوفة مفيهاش loop ويمكن ليك تا دير

test("using for loop", () => {
    for (let i = 0; i < myArrayData.length; i++) {
        expect(myArrayData[i]).not.toBe(0)
    }
})
```

الدرس الثاني شفنا فيه شي matchers اخرين كيتلخصو فيما يلي

```js
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
```

الدرس الثالث شفنا فيه شوية matchers اخرين ولي هوما كالتالي

```js
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
```

طبعا كاينين matchers اخرين كتار


<br>
<br>

<h1>Creat your own matcher</h1>

<br>
<br>

```js
/* Syntax */

expect.extend({
    toBeNameHere(received, target) {
        const pass = condition;

        if (pass) {
            return {
                message: () => `passed msg her`,
                pass: true,
            }
        } else {
            return {
                message: () => `failed msg her`,
                pass: false,
            }
        }
    }
})
```

```js
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
```


<br>
<br>

<h1>Expect.anyThing - any - arrayContaining</h1>

<br>
<br>

فهاد الدرس شفنا شوية methods خاصة بال expect ولي كيخدمو مع ال toEqual matcher

اللول هو expect.anyThing ولي كتوقع اي شي من ال received من غير ال undefined and null

الثاني هو expect.any(constructor) ولي بحالا كتقوليه بلي توقع بلي ال received غيكون هاد النوع ديال البيانات, و كتعطيها ال constructor data ك argument

الثالث هو expect.arrayContaining(array) ولي كتشوف واش العناصر لي فالمصفوفة لي عطيتيها كاينين فالمصفوفة المستلمة

```js
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
```


<br>
<br>

<h1>Code Coverage</h1>

<br>
<br>

دبا مثلا عند function ديرتي لي شي tests من قبل 

و جيتي دبا ومشيتي لديك ال function وزدتي فيها condition جديد. فملي كدير تيست, كيديرو على على داكشي لي عطيتي ليه فلول اما داكشي الجديد مكينبهكش عليه

لهذا كاينة خاصية ال code coverage ولي فاش كدير تيست كينشء ليك ملف فيه رابور من ضمنو داكشي لي مدرتيش ليه تغطية, بحال شي condition جديد


الطريقة اليدوية هي انك فكل مرة خاص دير هاد الكود فال terminal

```
npm test -- --coverage
```

اما الطريقة الناضية ولي كيدير ليه تغطية للكود كل مرة دير npm test. وهي انك ضيف هاد الخصائص فال package.json

```json
"jest": {
    "collectCoverage": true
}
```


<br>
<br>

<h1>Mock functions</h1>

<br>
<br>

صراحة هادا موضوع شوية معقد غنخليه تالمنبعد ونتعمق فيه

ولكن يكفي تشوف الكود التحت باش تاخد فكرة

```js
/* mock.js */
function sayHello(name) {
    return `hello ${name}`
}

/* mock.test.js */
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
```