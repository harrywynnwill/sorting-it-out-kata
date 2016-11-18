#ES2015 Notes

#### References

[REPL](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code=)

https://babeljs.io/docs/learn-es2015/

https://github.com/ericdouglas/ES6-Learning



`=>` Arrows syntax. Support both expression and statement bodies. unlike functions arrows have the same lexical this ad their surrounding code. if an arrow is inside another function it shares the arguements of the parent function.

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

`var odds = evens.map(v => v + 1);`

`let` is the new var. `const` is single assigned.

String interpolation

```
let name = "Bob", time = "today";
Hello ${name}, how are you ${time}?
```

for..in

```
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
```
