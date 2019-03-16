import React, { Component } from 'react';
import { connect } from 'react-redux';

import {ADMIN_URL} from '../../constants';

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default (OriginComponent) => {
    class AuthenticatedUser extends Component {
        render() {
            if (this.props.auth) {
                return <OriginComponent/>
            } else {
                this.props.history.push(`/${ADMIN_URL}/signin`);
                return <div>Вы должны авторизироваться</div>
            }
        }
    }
    return connect(mapStateToProps)(AuthenticatedUser);
}