const w = (f) => f(f);

// console.log(w((x) => (n) => ((f) => (n == 1 ? 1 : n * f(n - 1)))(x(x)))(5));

console.log(
    w((x) =>
        (
            (f) => (n) =>
                n == 1 ? 1 : n * f(n - 1)
        )(x(x))
    )(5)
);

// console.log(
//     w((x) =>
//         (
//             (f) => (n) =>
//                 n == 1 ? 1 : n * f(n - 1)
//         )((v) => x(x)(v))
//     )(5)
// );
