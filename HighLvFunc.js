const o = () => console.log;

o()(123);

const i = (a) => a(123);

i(console.log);

const a = (x) => x(123);
const b = (x) => x;

console.log(a(b));
