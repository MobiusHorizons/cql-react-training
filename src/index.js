import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import 'codemirror-one-dark-theme';

import './style.css';

import JSXPage from './pages/JSX';
import ES6Page from './pages/ES6';
import ClassPage from './pages/react-classes';
import StatePage from './pages/local-state';
import ReduxPage from './pages/redux';

function combine(){
  return Array.from(arguments)
    .filter(i => !!i)
    .join(' ');
}

const tabs = [
  { component: JSXPage, path: '/jsx', title: 'JSX', isDefault : true },
  { component: ES6Page, path: '/es6', title: 'ES6' },
  { component: ClassPage, path: '/react-class', title: 'React Classes' },
  { component: StatePage, path: '/local-state', title: 'Local State' },
  { component: ReduxPage, path: '/redux', title: 'Redux' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible : false,
    };
  }

  render() {
    /*
      let {} = this.props;
    */
    let { menuVisible = false } = this.state;

    return (
      <Router>
        <div className="presentation">
          <div
            className="tabs"
            onClick={() => this.setState({ menuVisible : !menuVisible })}
          >
            <div className="tab button">
              <MenuIcon/> MENU
            </div>
            {tabs.map(({ path, title }, i) => (
              <NavLink key={path} className={combine('tab', menuVisible && 'mobileVisible')} to={path}>
                {i+1}. {title}
              </NavLink>
            ))}
          </div>

          <div className="body">
            {tabs.map(({ path, component, isDefault = false }) => (
              <Route key={path} path={path} component={component} default={isDefault}/>
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

function MenuIcon() {
  return (
    <svg height="1.5em"
      style={{
        enableBackground : "new 0 0 32 32",
        marginBottom: -5,
      }}
      version="1.1"
      viewBox="0 0 32 32" >
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
    </svg>
  )
}
