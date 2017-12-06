# ES6 - The New Javascript Syntax.

ES6 fixes up some common gotchas in javascript, and adds several conveniences.

## `let`: this works the way you thought `var` worked.

`var` scopes to the funciton scope, not the block scope, like every other language, so
```javascript
function a(){
  for (var i = 0; i < 10; i++){
    doSomeAsyncThing(function(){
      /*
        if you use i here, it has the value 9
        this is because the function runs after the loop has finished running
      */
    })
  }
}
```

Javascript rewrites your code like so:
```javascript
function a(){
  var i;
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

    if you use `let` instead of `var` it does exactly what you expected it to do.

## Arrow Functions `=>`


* Mostly these make your life easier for inline functions/callbacks

```js
  doSomeAsyncThing((arg1,arg2) => {
    // this is easier to write than function(arg1, arg2){...}
  });
```

Can also be used inline with an implicit return
```js
  doSomeAsyncThing((arg1, arg2) => arg1 + arg2);
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

* Destructuring

  This can get complicated, but the simple version is that you can do the following:

  ```js
  let object = {a : 'a', b : 'b', c : 'c'};
  let {a, b} = object;
  // now a and b are variables pulled from object that you can use.
  // it's much nicer than let a = object.a; ...
  ```

  the same also works for arrays