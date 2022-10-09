class Left {
    static of(v) {
        return new Left(v);
    }

    constructor(v) {
        this._v = v;
    }

    map(fn) {
        return this;
    }
}

class Right {
    static of(v) {
        return new Right(v);
    }

    constructor(v) {
        this._v = v;
    }

    map(fn) {
        return Right.of(fn(this._v));
    }
}

function parseJSON(str) {
    try {
        // 当没有异常时正常处理
        return Right.of(JSON.parse(str));
    } catch (e) {
        // 当出现异常时，我们使用Left函子来保存异常
        return Left.of({ error: e.message });
    }
}

// 出现异常的
const errorP = parseJSON("{ name: rh }");
console.log(errorP); // => Left { _v: { error: 'Unexpected token n in JSON at position 2' } }
// 未出现异常的
const p = parseJSON('{ "name": "rh" }');
console.log(p); // => Right { _v: { name: 'rh' } }
