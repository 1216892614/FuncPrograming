class Container {
    static of(v) {
        return new Container(v);
    }

    constructor(v) {
        this._v = v;
    }

    map(fn) {
        return new Container(fn(this._v));
    }
}

const r = Container.of(5)
    .map((v) => v + 2)
    .map((v) => v * v);

console.log(r0);
