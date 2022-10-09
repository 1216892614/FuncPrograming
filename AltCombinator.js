/**
 * 函数签名: (a → x) -> (b → y) → v → x || y
 * 函数作用: 对输入值执行给定两个函数并返回不为空的结果
 * 函数特性: or
 * @param {Function} f1 - 原处理函数
 * @param {Function} f2 - 二次处理函数
 * @returns 不为空的结果值
 */

const nothing = () => {};

const alt =
    (f1 = nothing, f2 = nothing) =>
    (val) =>
        f1(val) || f2(val);

// eg.
const identity = (x) => x;

console.log(alt(console.log, identity)(123));