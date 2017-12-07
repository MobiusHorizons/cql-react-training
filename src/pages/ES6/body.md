# ES6 - The New Javascript Syntax.

ES6 fixes up some common gotchas in javascript, and adds several conveniences.

## `let`: this works the way you thought `var` worked.

`var` scopes to the funciton scope, not the block scope.
This means you will see unexpected results from `var` inside blocks of code that are not functions.
The most common examples are inside of loops as seen below:

```react
function a(){
  for (var i = 0; i < 10; i++){
    setTimeout(function(){
      /*
        if you use i here, it has the value 9
        this is because the function runs after the loop has finished running
      */
      var s = document.createElement('div');
      s.innerHTML = i;
      mountNode.appendChild(s);
    }, 10)
  }
}
a();
```

Javascript rewrites your code like so:
```javascript
function a(){
  var i; // <- your declaration moved here
  for (i = 0; i < 10; i++){
    doSomeAsyncThing(function(){
      /*
        if you use i here, it has the value 9
        this is because the function runs after the loop has finished running
      */
    })
  }
}
```

The value of `i` is wrong in this case because the loop is updating the value of `i` on each run, not creating a new variable.
You will only get messed up behavior if you then do something asynchronous with the loop value. in this case we try to use it from a callback.
By the time our callback actually runs, the loop is finished running, and it just has the last value whatever that is.

if you use `let` instead of `var` it does exactly what you expected it to do, because it creates a new variable on each iteration.

```react
function a(){
  for (let i = 0; i < 10; i++){
    setTimeout(function(){
      var s = document.createElement('div');
      s.innerHTML = i;
      mountNode.appendChild(s);
    }, 10)
  }
}
a();
```

## Arrow Functions `=>`


* Mostly these make your life easier for inline functions/callbacks

```javascript
  doSomeAsyncThing((arg1,arg2) => {
    // this is easier to write than function(arg1, arg2){...}
  });
```

Can also be used inline with an implicit return
```react
  let out = [0,1,2,3,4].map((val) => val + 1);

  // log it so we can see
  ReactDom.render(<pre>{JSON.stringify(out, null, 4)}</pre>, mountNode);
```

* Different handling of `this`.

for normal functions, the `this` argument can be set with `bind(thisArg)`,
or defaults to the function itself, but it is not the same as the parent function

this is important especially for callbacks registered inside of classes, where `this.someMethod` is useful.

* Classes

ES6 adds a class syntax similar to other languages.
the method `constructor` is called when created.
other methods are not required
allows for inheritence, in which case you call `super()` to call the method from the super class.

## Destructuring

This can get complicated, but the simple version is that you can do the following:

```javascript
let object = {a : 'a', b : 'b', c : 'c'};
let {a, b} = object;
console.log(a, b); // a, b
```

This syntax is much nicer than extracting each property individually

the same also works for arrays

```javascript
let array = [1, 2, 3];
let [first, second] = array;
console.log(first, second); // 1, 2
```
