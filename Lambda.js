const o = (s) => (z) => z;
const one = (s) => (z) => s(z);
const two = (s) => (z) => s(s(z));
const three = (s) => (z) => s(s(s(z)));
//...

const next = (w) => (y) => (x) => y(w(y)(x));
const add = (x) => (y) => (s) => (z) => x(s)(y(s)(z));

const to_num = (x) => {
    const s = (x) => x[0](x);

    const z = (x) => [x[0], x[1] + 1];

    console.log(x(s)([z, 0])[1]);
};

to_num(o); //=> 0
to_num(one); //=> 1
to_num(two); //=> 2
to_num(three); //=> 3
console.log();
to_num(next(o)); //=> 1
to_num(next(one)); //=> 2
console.log();
to_num(add(two)(three)); //=> 5
