/**
 * 函数签名: (a → *) → a → a
 * 函数作用: 对输入值执行给定函数并立即返回输入值
 * 函数特性: id
 * @param {Function} fn - 原函数
 * @returns 输入值
 */

const tap = (fn) => (val) => (fn(val), val);

// eg.
console.log(tap(console.log)(123));
