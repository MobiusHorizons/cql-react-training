var React = require('react');


/*
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
*/

/**/
function Example (props){
  return React.createElement('div', {}, [
    
      React.createElement('h1', {}, 'Hello World'),  
      React.createElement('pre', {}, 
          JSON.stringify(props.data, null, 4)
      ),
    
    ])
}
/**/

module.exports = Example;