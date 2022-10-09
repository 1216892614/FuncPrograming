/**
 * 函数签名: ((a, b, c, …, n) → x) → [d, e, …, n] → ((a, b, c, …) → x)
 * 函数作用: 前置参数提前
 * 函数特性: 降维
 * @param fn - 原函数
 * @returns 前置参数提前后的新函数
 */

const partialRight =
    (fn, ...laterArgs) =>
    (...presetArgs) =>
        fn(...presetArgs, ...laterArgs);

// eg.
partialRight(console.log, 789)(123, 456)