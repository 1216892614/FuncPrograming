class Maybe {
    static of(v) {
        return new Maybe(v);
    }

    constructor(v) {
        this._v = v;
    }

    map(fn) {
        return this.valid() ? Maybe.of(fn(this._v)) : Maybe.of(null);
    }

    valid() {
        return this._v != null || this._v != undefined;
    }
}

// 测试：不是空值时
const r0 = Maybe.of("Hello World").map((x) => x.toUpperCase());
console.log(r0);

// 测试：是空值时
const r1 = Maybe.of(null).map((x) => x.toUpperCase());
console.log(r1);
