/**
 * 函数签名: (a → b) → [a] → [b]
 * 函数作用: 将系列输入值映射到`transfomer`函数中运行，并将结果整理成新的系列
 * 函数特性: map
 * @param {Function} transfomer - 转换器
 * @returns 经过映射后的新系列
 */

// Eg.
console.log([122, 455, 788].map((i) => i + 1))