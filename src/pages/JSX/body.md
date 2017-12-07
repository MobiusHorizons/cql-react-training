# JSX - Templating for React

For More information on JSX, take a look at [Reactjs.org](https://reactjs.org/docs/introducing-jsx.html)

## Example 1
### Using raw `React.createElement` calls:

```react
function Example (props){
  return React.createElement('div', {}, [

      React.createElement('h1', {key : 'h1'}, 'Hello World'),
      React.createElement('pre', {key : 'pre'},
          JSON.stringify(props.data, null, 4)
      ),

    ])
}

var data = {
  a : 'b',
}

// this line just displays the preview below.
ReactDom.render(
  React.createElement(Example, {data:data}),
  mountNode
);
```

## Example 2
### Using `JSX`:

```react
function Example (props){
  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(props.data, null, 4)}
      </pre>
    </div>
    );
}
var data = {
  a : 'b',
}

// this line just displays the preview below.
ReactDom.render(<Example data={data}/>, mountNode);
```
