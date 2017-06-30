import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import A11yRoute from './components/common/A11yRoute';
import PersonalDetails from './components/person/details/PersonalDetails';
import Achievements from './components/person/achievements/Achievements';
import Home from './components/home/Home';

class App extends Component {
    render() {
        return (
            <div className="container">

                <Router history={createBrowserHistory()}>
                    <div>
                        <Link
                            to={{
                                pathname: '/',
                                state: { a11yMessage: 'Home' }
                            }}>
                            Home
                        </Link>
                        <Link
                            to={{
                                pathname: '/person/details',
                                state: {
                                    a11yMessage: 'Persoonsgegevens'
                                }
                            }}>
                            Personal details
                        </Link>
                        <Link
                            to={{
                                pathname: '/person/achievements',
                                state: {
                                    a11yMessage: 'Verdiensten'
                                }
                            }}>
                            Achievements
                        </Link>

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
            </div>
        );
    }
}

export default App;
