const fact = (f) => (n) => n == 1 ? 1 : n * f(n - 1);

const Y = (f) => ((x) => f((v) => x(x)(v)))((x) => f((v) => x(x)(v)));

console.log(Y(fact)(5));
