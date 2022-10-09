/**
 * 函数签名: (* → a) → (* → a)
 * 函数作用: 逐个参数提前
 * 函数特性: 降维
 * @param {Function} fn 原函数
 * @param {Number} arity 原函数的参数个数， 默认值: 原函数的参数个数
 * @returns 柯里化后的下一个`一元`函数
 */

const curry = (fn, arity = fn.length) => {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            let args = prevArgs.concat(nextArg);
            return args.length >= arity ? fn(...args) : nextCurried(args);
        };
    })([]);
};

// eg.
curry(console.log, 3)(123)(456)(789)
