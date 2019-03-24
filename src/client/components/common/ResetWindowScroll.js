import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default WrappedComponent => {
    class ResetWindowScroll extends Component {
        componentDidUpdate = (prevProps) => {
            window.scrollTo(0, 0);
        };

        render = () => <WrappedComponent {...this.props} />
    }

    return withRouter(ResetWindowScroll);
}