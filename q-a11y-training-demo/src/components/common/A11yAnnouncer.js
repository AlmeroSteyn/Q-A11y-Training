import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class A11yAnnouncer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentA11yMessage1: '',
            currentA11yMessage2: ''
        };

        this.setAlternate = false;
    }

    componentWillReceiveProps(nextProps) {
        const { location } = nextProps;
        if (location.state.a11yMessage) {
            if (this.setAlternate) {
                this.setAlternate=false;
                this.setState({ currentA11yMessage1: '' }, () => {
                    this.setState({
                        currentA11yMessage2: location.state.a11yMessage
                    });

                });

            } else {
                this.setAlternate=true;
                this.setState({ currentA11yMessage2: '' }, () => {
                    this.setState({
                        currentA11yMessage1: location.state.a11yMessage
                    });
                });

            }
        }
    }

    render() {
        const { currentA11yMessage1, currentA11yMessage2 } = this.state;
        return (
            <div>
                <div
                    className="sr-only"
                    role="log"
                    aria-live="polite"
                    aria-relevant="additions"
                    aria-atomic="true">
                    {currentA11yMessage1 ? currentA11yMessage1 : ''}
                </div>
                <div
                    className="sr-only"
                    role="log"
                    aria-live="polite"
                    aria-relevant="additions"
                    aria-atomic="true">
                    {currentA11yMessage2 ? currentA11yMessage2 : ''}
                </div>
            </div>
        );
    }
}

export default withRouter(A11yAnnouncer);
