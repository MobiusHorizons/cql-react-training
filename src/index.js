import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import 'codemirror-one-dark-theme';

import Example from './example';

import './style.css';

import JSXPage from './pages/JSX';
import ES6Page from './pages/ES6';

function Page() {
  return <div />;
}

const tabs = [
  { component: JSXPage, path: '/jsx', title: 'JSX' },
  { component: ES6Page, path: '/es6', title: 'ES6' },
  { component: Page, path: '/react-class', title: 'React Classes' },
  { component: Page, path: '/local-state', title: 'Local State' },
  { component: Page, path: '/redux', title: 'Redux' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {} = this.props;
    let {} = this.state;

    return (
      <Router>
        <div className="presentation">
          <div className="tabs">
            {tabs.map(({ path, title }) => (
              <NavLink className="tab" to={path}>
                {title}
              </NavLink>
            ))}
          </div>

          <div className="body">
            {tabs.map(({ path, component }) => (
              <Route path={path} component={component} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

/* Fetch data from Reddit to pass into our component */
/*
fetch('https://www.reddit.com/hot.json').then(r => r.json()).then(data => {
  
  render(<Example data={data}/>, document.getElementById('root'));
})
*/
