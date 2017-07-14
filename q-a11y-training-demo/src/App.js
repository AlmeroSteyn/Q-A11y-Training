import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PersonalDetails from './components/person/details/PersonalDetails';
import Achievements from './components/person/achievements/Achievements';
import Home from './components/home/Home';
import LiveRouterMessage from './components/react-router-aria-live/LiveRouterMessage';
import LiveRouterAnnouncer from './components/react-router-aria-live/LiveRouterAnnouncer';
import LiveMessage from './components/react-aria-live/LiveMessage';
import LiveAnnouncer from './components/react-aria-live/LiveAnnouncer';

class App extends Component {
  state = {
    a11yMessage: '',
  };

  render() {
    return (
      <div className="container">
        <LiveAnnouncer>
          <Router history={createBrowserHistory()}>
            <div>
              <LiveRouterAnnouncer />
              <Link
                to={{
                  pathname: '/',
                  state: { a11yMessage: 'Navigated to home' },
                }}>
                Home
              </Link>
              <Link
                to={{
                  pathname: '/person/details',
                  state: {
                    a11yMessage: 'Navigated to persoonsgegevens',
                  },
                }}>
                Personal details
              </Link>

              <Link
                to={{
                  pathname: '/person/achievements',
                  state: {
                    a11yMessage: 'Navigatred to verdiensten',
                  },
                }}>
                Achievements
              </Link>
              <LiveMessage
                message={this.state.a11yMessage}
                aria-live="polite"
              />
              <button
                onClick={() => {
                  this.setState({ a11yMessage: 'Test3' });
                }}>
                Say Hello
              </button>
              <button
                onClick={() => {
                  this.setState({ a11yMessage: 'Test2' });
                }}>
                Say Bye
              </button>
              <div className="well">
                <Route
                  path="/"
                  alertText="Home page loaded"
                  exact
                  component={Home}
                />
                <Route
                  path="/person/details"
                  alertText="Personal detail page loaded"
                  component={PersonalDetails}
                />
                <Route
                  path="/person/achievements"
                  alertText="Achievements page loaded"
                  component={Achievements}
                />
              </div>
            </div>
          </Router>
        </LiveAnnouncer>
      </div>
    );
  }
}

export default App;
