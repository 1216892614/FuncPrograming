/**
 * 函数签名: ((a, b, c, …, n) → x) → [a, b, c, …] → ((d, e, f, …, n) → x)
 * 函数作用: 前置参数提前
 * 函数特性: 降维
 * @param fn - 原函数
 * @returns 前置参数提前后的新函数
 */

const partial =
    (fn, ...presetArgs) =>
    (...laterArgs) =>
        fn(...presetArgs, ...laterArgs);

// eg.
partial(console.log, 123, 456)(789)
