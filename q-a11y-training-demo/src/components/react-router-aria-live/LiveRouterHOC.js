import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const InnerLiveRouterHOC = InnerComponent =>
  class extends Component {
    state = {
      message: '',
    };

    componentWillReceiveProps(nextProps) {
      const { location } = nextProps;
      if (
        location.state &&
        location.state.a11yMessage &&
        location.state.a11yMessage !== this.state.message
      ) {
        this.setState({
          message: location.state.a11yMessage,
        });
      }
    }

    render() {
      return <InnerComponent message={this.state.message} {...this.props} />;
    }
  };

export default InnerComponent => withRouter(InnerLiveRouterHOC(InnerComponent));
