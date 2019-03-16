import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'react-form';
import { withRouter } from "react-router";

class SignInForm extends Component {

    onSubmit = (user) => {
        this.props.signIn(user)
            .then(() => {
                this.props.history.goBack();
            })
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                {(formApi) => (
                    <form onSubmit={formApi.submitForm}>
                        <div className="form-group">
                            <label>Логин</label>
                            <Text className="form-control"
                                  name="identifier"
                                  field="identifier"/>
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <Text className="form-control"
                                  name="password"
                                  field="password"
                                  type="password"/>
                        </div>
                        <button className="btn btn-primary">Авторизация</button>
                    </form>
                )}
            </Form>
        );
    }
}

SignInForm.propTypes = {
    signIn: PropTypes.func.isRequired
};


export default withRouter(SignInForm);
