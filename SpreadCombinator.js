/**
 * 函数签名: ([a, b, c, …, n] → x) → (a, b, c, …, n) → x
 * 函数作用: 参数展开
 * 函数特性: 升维
 * @param fn - 原函数
 * @returns 参数展开后的新函数
 */

const spread =
    (fn) =>
    (...argsArr) =>
        fn(argsArr);

//Eg.
spread(console.log)(123, 456, 789);
