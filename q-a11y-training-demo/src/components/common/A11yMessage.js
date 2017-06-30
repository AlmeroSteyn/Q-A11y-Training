import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DocumentTitle from'react-document-title';

class A11yMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentA11yMessage: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if(!this.props.location.state){
            return;
        }
        const oldLocation = this.props.location;
        const { location } = nextProps;
        if (oldLocation.state.a11yMessage !== location.state.a11yMessage) {
            setTimeout(() => {
                this.setState({
                    currentA11yMessage: location.state.a11yMessage
                });
            }, 200);
            // setTimeout(() => {
            //     this.setState({
            //         currentA11yMessage: ''
            //     });
            // }, 500);
        }
    }

    render() {
        const { currentA11yMessage } = this.state;
        return (

            <DocumentTitle title={currentA11yMessage}/>
        );
    }
}

export default withRouter(A11yMessage);
