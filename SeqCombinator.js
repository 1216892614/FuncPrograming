/**
 * 函数签名: (a → x, b → y, …,) → val → undefined
 * 函数作用: 对输入值执行给定的所有函数
 * 函数特性: fork
 */

const seq =
    (...fns) =>
    (val) =>
        fns.forEach((fn) => fn(val));

//Eg.
seq(console.log, console.log, console.log)(123);
