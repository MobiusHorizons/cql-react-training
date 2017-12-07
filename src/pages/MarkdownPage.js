import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-fast-highlight';
import Playground from 'component-playground';

function codeBlock({ language, value = '' }) {
  language = language || 'js';
  switch (language){
    case 'console':
      return (
          <Playground
            codeText={value}
            collapsibleCode={true}
            scope={{setTimeout: (a,b) => setTimeout(a, b)}}
            noRender={false}
            es6Console={true}
            theme="one-dark"
          />
      );
    case 'react':
      return (
          <Playground
            codeText={value}
            collapsibleCode={true}
            scope={{React, ReactDom}}
            noRender={false}
            theme="one-dark"
          />
      );
    default:
      return (
        <Highlight languages={[language]}>
          {value}
        </Highlight>
      );
  }
}

const renderers = {
  inlineCode: ({ children }) => <code className="inline">{children}</code>,
  code: codeBlock,
};

export default function MarkdownPage(file){
  return class MarkdownPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        body : '',
      };
    }

    componentDidMount(){
      fetch(file).then(r => r.text()).then(body => {
        this.setState({body : body});
      })
    }

    render() {
      return (
        <div className="page">
          <ReactMarkdown source={this.state.body} renderers={renderers} />
        </div>
      );
    }
  }
}
