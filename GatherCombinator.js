/**
 * 函数签名： ((a, b, c, …, n) → x) → [a, b, c, …, n] → x
 * 函数作用： 参数收缩
 * 函数特性： 降维
 * @param fn - 原函数
 * @returns 参数收缩后的新函数
 */

const gather = (fn) => (argsArr) => fn(...argsArr);

//Eg.
var log = gather(console.log);
log(["标题", "log", "日志类容"]); // => 标题 log 日志类容
var max = gather(Math.max);
max([1, 2, 3]); // => 3
