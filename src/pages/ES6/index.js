import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-fast-highlight';

import md from './body.md';

function codeBlock({ language, value = '' }) {
  language = language || 'js';
  return (
    <Highlight languages={[language]}>
        {value}
    </Highlight>
    );
}

const renderers = {
  inlineCode: ({ children }) => <code className="inline">{children}</code>,
  code: codeBlock,
};

export default class ES6Page extends Component {
  render() {
    return (
      <div className="page">
        <ReactMarkdown source={md} renderers={renderers} />
      </div>
    );
  }
}
