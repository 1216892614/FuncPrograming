const fp = require("lodash/fp");
const fs = require("fs");

class Monad {
    static of(v) {
        return new Monad(() => v);
    }

    constructor(fn) {
        this._v = fn;
    }

    join() {
        return this._v();
    }

    map(fn) {
        return new Monad(fp.flowRight(fn, this._v));
    }

    flatMap(fn) {
        // fn供map使用
        return this.map(fn).join();
    }
}

// 使用IO函子读取文件(package.json)
const readFile = function (fileName) {
    return new Monad(function () {
        // 此处我们使用同步读取
        return fs.readFileSync(fileName, "utf-8");
    });
};

const printV = function (v) {
    return new Monad(function () {
        console.log(v);
        return v;
    });
};

const r = readFile("package.json").flatMap(printV).join(); //=> package.json内容

console.log("===================");

const upperR = readFile("package.json").map(fp.toUpper).flatMap(printV).join(); //=> 大写的package.json内容
