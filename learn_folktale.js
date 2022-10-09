const { compose, curry } = require("folktale/core/lambda");
const { toUpper, first } = require("lodash/fp");

const f = curry(2, (x, y) => {
    return x + y;
});

// 使用curry
console.log(f(1, 2)); // => 3
console.log(f(1)(2)); // => 3

const ffp = compose(toUpper, first);

// 使用compose
console.log(ffp(["one", "two"])); // => ONE
