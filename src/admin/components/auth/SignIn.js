import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignInForm from './SignInForm';
import {signIn} from '../../actions/auth/actions';

import styles from './SignIn.module.scss';
import {ADMIN_URL} from '../../constants'

class SignIn extends Component {
    componentWillMount() {
        if (this.props.auth) {
            this.context.router.history.push(`/${ADMIN_URL}`);
        }
    }

    render() {
        return (
            <div className={styles.signin}>
                <div className={styles.signin__container}>
                    <div className={styles.signin__logo}>
                        <img src={require('../../../img/logo.png')}/>
                    </div>
                    <div className={styles.signin__form}>
                        <SignInForm signIn={this.props.signIn}/>
                    </div>
                </div>
            </div>
        );
    }
}

SignIn.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired,
    }),
};

export default connect((state) => ({auth: state.auth}), {signIn})(SignIn);