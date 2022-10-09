# Y Combinator

![](https://pic3.zhimg.com/80/8dbacd74ddd07b9e5856e0a0ac74f6d2_720w.webp)

## Don't Panic!

-   阶乘

```javascript
const fact = (n) => (n == 1 ? 1 : n * fact(n - 1));
fact(5); //=> 120
```

-   不能省略的名字

```javascript
((n) => (n == 1 ? 1 : n * fact(n - 1)))(5); //=> Error!!
```

## Y 组合子, 但是凑合凑合得了

-   参数化

```javascript
const fact = (f, n) => (n == 1 ? 1 : n * f(f, n - 1));
fact(fact, 5); //=> 120
```

-   柯里化

```javascript
const fact = (f) => (n) => n == 1 ? 1 : n * f(f)(n - 1);
fact(fact)(5); //=> 120
```

-   土办法, 代入

```javascript
(
    (f) => (n) =>
        n == 1 ? 1 : n * f(f)(n - 1)
)((f) => (n) => n == 1 ? 1 : n * f(f)(n - 1))(5);
```

## 名为理想的 feature

```javascript
Y((f) => (n) => n == 1 ? 1 : n * f(n - 1))(5);
```

## 阶段性胜利

-   提出那个 w

```javascript
w = (f) => f(f);
w((f) => (n) => n == 1 ? 1 : n * f(f)(n - 1))(5);
```

-   抬头

```javascript
w((f) => (n) => n == 1 ? 1 : n * f(f)(n - 1))(5);
Y((f) => (n) => n == 1 ? 1 : n * f(n - 1))(5);
```

-   提出 f(f)

```javascript
(f) => (n) => n == 1 ? 1 : n * g(n - 1);
```

```javascript
(f) => (n) => {
    let g = f(f);
    return n == 1 ? 1 : n * g(n - 1);
};
```

```javascript
(f) => (n) => ((g) => (n == 1 ? 1 : n * g(n - 1)))(f(f));
```

-   改名部动工

```javascript
(x) => (n) => ((f) => (n == 1 ? 1 : n * f(n - 1)))(x(x));
```

## 死也优雅

-   近在咫尺

```javascript
w((x) =>
    (
        (f) => (n) =>
            n == 1 ? 1 : n * f(n - 1)
    )(x(x))
)(5);

Y((f) => (n) => n == 1 ? 1 : n * f(n - 1))(5);
```

-   但是不行...
    [Midway >](./YCombinator_midway.js)

-   η 化

```javascript
(x) =>
    (
        (f) => (n) =>
            n == 1 ? 1 : n * f(n - 1)
    )((v) => x(x)(v));
```

## 再见, 感谢所有的鱼

-   重要的人, 不能忘记的人...

```javascript
fact = (f) => (n) => n == 1 ? 1 : n * f(n - 1);
w((x) => fact((v) => x(x)(v)))(5);
```

-   提出 fact

```javascript
w(
    (
        (f) => (x) =>
            f((v) => x(x)(v))
    )(fact)
)(5);
```

-   逃离 w

```javascript
((f) => w((x) => f((v) => x(x)(v))))(fact)(5);
```

-   42!

```javascript
Y = (f) => w((x) => f((v) => x(x)(v)));
Y(fact)(5);
```

```javascript
Y = (f) => ((x) => f((v) => x(x)(v)))((x) => f((v) => x(x)(v)));
Y(fact)(5);
```

[Final >](./YCombinator.js)

[< Return](./README.md)
