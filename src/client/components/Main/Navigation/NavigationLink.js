import React from 'react';
import { withRouter } from 'react-router-dom'

const NavigationLink = (props) => {
    const { to, children, className, history, callBackAfterClick } = props;

    const goTo = (ev) => {
        ev.preventDefault();
        callBackAfterClick && callBackAfterClick();
        history.push(to);
    };

    return (
        <a href="#" onClick={goTo} className={className}>
            {children}
        </a>
    );
};

export default withRouter(NavigationLink)