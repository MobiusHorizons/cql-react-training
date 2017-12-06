import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Playground from 'component-playground';

const codeText1 = 
`function Example (props){
  return React.createElement('div', {}, [
    
      React.createElement('h1', {}, 'Hello World'),  
      React.createElement('pre', {}, 
          JSON.stringify(props.data, null, 4)
      ),
    
    ])
}

var data = {
  a : 'b',
}
ReactDom.render(<Example data={data}/>, mountNode);
`;

const codeText2 = 
`function Example (props){
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
ReactDom.render(<Example data={data}/>, mountNode);
`;
export default class JSXPage extends Component {
  render(){
    return (
      <div className="page">
        <h1>JSX</h1>
        <section>
          <h1>Example 1</h1>
          <h2> 
            Using raw  <code className="inline">
            react.createElement
            </code> calls:
          </h2>
          <Playground 
            codeText={codeText1}
            collapsibleCode={true}
            scope={{React, ReactDom}}
            noRender={false}
            theme="one-dark"
          />
        </section>
        <section>
          <h1>Example 2</h1>
          <h2> 
            Using <code className="inline">
            JSX
            </code>:
          </h2>
          <Playground 
            codeText={codeText1}
            collapsibleCode={true}
            scope={{React, ReactDom}}
            noRender={false}
            theme="one-dark"
          />
        </section>
      </div>
    )
  }
}

