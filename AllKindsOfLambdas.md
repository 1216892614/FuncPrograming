# All Kinds Of Lambdas

## JS

```javascript
const add = (x, y) => x + y;
// ===
const add = function (x, y) {
    return x + y;
};
```

## TS

```typescript
type Add = (x: number, y: number) => number;

let add: Add = (arg1: string, arg2: string): string => arg1 + arg2;
```

## Python

```python
add = lambda x, y: x + y;
```

## Java

```java
MathOperation addition = (int a, int b) -> a + b;
```

## Rust

```rust
let add: fn(i32, i32) -> i32 = |a, b| a+b;
```

## C++

```cpp
auto add = [=](int a, int b) -> int {return a + b;};
```

## Haskell

```haskell
let a = \x y -> x + y
```

[< Return](./README.md)
