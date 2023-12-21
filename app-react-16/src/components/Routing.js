import React from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import ReactAdapterConsumer from './ReactAdapterConsumer';
import withEventBus from './withEventBus';

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about/sub-about">Sub about</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const WithEventBusModernApp = withEventBus((props) => <ReactAdapterConsumer {...props} importer={() => import('app2/ModernApp')} />);

export default class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
          <IndexRoute component={App} />
          <Route path="profile" component={() => <div>Profile page</div>} />
          {/* <Route path="about" component={() => <div>About Page</div>} /> */}
          {/* <Route path="about" component={() => <ReactAdapterConsumer importer={() => import('app2/ModernApp')} />} /> */}
          <Route
            path="about*"
            component={WithEventBusModernApp}
          />
        </Route>
      </Router>
    );
  }
}