const fp = require("lodash/fp");

class IO {
    static of(v) {
        return new IO(() => v);
    }

    constructor(fn) {
        this._v = fn;
    }

    map(fn) {
        // 调用函数的顺序是从右往左
        return new IO(fp.flowRight(fn, this._v));
    }
}

const io = IO.of(process).map((v) => v.execPath);
console.log(io); // => IO { _v: [Function] }

const ioFn = io._v;
console.log(ioFn());
console.log(process.execPath);
