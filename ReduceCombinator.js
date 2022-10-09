/**
 * 函数签名: ((a, b) → a) → a → [b] → a
 * 函数作用: 将初始值代入`reducer`的第一参数，输入系列映射为`reducer`的第二参数，并将`reducer`的返回值迭代到下次`reducer`的第一参数中，将最终返回值构成新的系列
 * 函数特性: reduce
 * @param {Function} reducer 规约函数
 * @param {*} init 初始数
 */

// Eg.
console.log([1, 2, 3].reduce((v, i) => v + i, 0));
