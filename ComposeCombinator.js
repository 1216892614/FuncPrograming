/**
 * 函数签名: ((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → ((a, b, …, n) → z)
 * 函数作用: 将输入值代入最末函数，并将结果代入上一个函数，直到所有函数全部调用完成，返回最终结果
 * 函数特性: chain
 * @param {...Function} fns - 函数列表
 * @returns 从下到上依次执行的结果
 */

const compose =
    (...fns) =>
    (val) =>
        fns.reverse().reduce((result, fn) => fn(result), val);

// Eg.
const log2Identity = (x) => {
    console.log(x);
    return x;
};

compose(console.log, identity, identity, identity)(123);
