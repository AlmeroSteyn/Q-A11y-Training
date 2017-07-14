import React, { Component } from 'react';
import PoliteMessage from '../react-aria-live/PoliteMessage';

class A11yAnnouncer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPoliteMessage1: '',
      currentPoliteMessage2: '',
    };

    this.setAlternate = false;
  }

  componentWillReceiveProps(nextProps) {
    const { message } = nextProps;
    if (message !== this.props.message) {
      if (this.setAlternate) {
        this.setAlternate = false;
        this.setState({ currentPoliteMessage1: '' }, () => {
          this.setState({
            currentPoliteMessage2: message,
          });
        });
      } else {
        this.setAlternate = true;
        this.setState({ currentPoliteMessage2: '' }, () => {
          this.setState({
            currentPoliteMessage1: message,
          });
        });
      }
    }
  }

  render() {
    const { currentPoliteMessage1, currentPoliteMessage2 } = this.state;
    return (
      <div>
        <PoliteMessage
          message={currentPoliteMessage1 ? currentPoliteMessage1 : ''}
        />
        <PoliteMessage
          message={currentPoliteMessage2 ? currentPoliteMessage2 : ''}
        />
      </div>
    );
  }
}

export default A11yAnnouncer;
