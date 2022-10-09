/**
 * 函数签名: ((x1, x2, …) → z) → [(a → x1), (b → x2), …] → (a → b → … → z)
 * 函数作用: 将系列输入值映射到各个transfomer函数中运行，并将结果集聚集到join函数中运行，返回最终结果
 * 函数特性: map-join
 * @param {Function} join - 聚集函数
 * @param {Function[]} transfomers - 转换器
 * @returns join函数的返回值
 */

const useWith = (join, transfomers) => (vals) =>
    join(...transfomers.map((transfomer, i) => transfomer(vals[i])));

// eg:勾股
var square = (val) => Math.pow(val, 2);
var sumSqrt = (a, b) => Math.sqrt(a + b);
var pythagoreanTriple = useWith(sumSqrt, [square, square]);
console.log(pythagoreanTriple([3, 4])); // => 5
console.log(pythagoreanTriple([5, 12])); // => 13
console.log(pythagoreanTriple([7, 24])); // => 25
