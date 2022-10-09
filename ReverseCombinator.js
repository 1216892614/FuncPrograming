/**
 * 函数签名： ((a, b, c, …, n) → x) → (n, …, c, b, a) → x
 * 函数作用： 参数倒序
 * 函数特性： 换序
 * @param fn - 原函数
 * @returns 参数收缩后的新函数
 */

const reverse =
    (fn) =>
    (...argsArr) =>
        fn(...argsArr.reverse());

// eg.
reverse(console.log)(789, 456, 123)
