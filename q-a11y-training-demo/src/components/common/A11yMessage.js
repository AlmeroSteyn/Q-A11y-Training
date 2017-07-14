import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

class A11yMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentA11yMessage: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    if (location.state.a11yMessage) {
      this.setState({ currentA11yMessage: '' }, () => {
        this.setState({
          currentA11yMessage: location.state.a11yMessage,
        });
      });
    }
  }

  render() {
    const { currentA11yMessage } = this.state;
    return (
      <DocumentTitle title={currentA11yMessage}>
        <div
          className="sr-only"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          aria-atomic="true">
          {currentA11yMessage ? currentA11yMessage : ''}
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(A11yMessage);
