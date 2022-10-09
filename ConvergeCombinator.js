/**
 * 函数签名: ((x1, x2, …) → z) → [((a, b, …) → x1), ((a, b, …) → x2), …] → (a → b → … → z)
 * 函数作用: 将输入值fork到各个forker函数中运行，并将结果集聚集到join函数中运行，返回最终结果
 * 函数特性: fork-join
 * @param {Function} join 聚集函数
 * @param {...Function} forkers 分捡函数列表
 * @returns join函数的返回值
 */

const converge = (join, forkers) => (val) =>
    join(...forkers.map((forker) => forker(val)));

// eg.
var len = (arr) => arr.length;
var sum = (arr) => arr.reduce((init, item) => init + item, 0);
var div = (sum, len) => sum / len;

var avg = converge(div, [sum, len]);

console.log(avg([1, 2, 3, 4, 5]));
