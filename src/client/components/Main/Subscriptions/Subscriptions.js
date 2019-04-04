import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Modal } from 'reactstrap';
import cn from 'classnames';

import './Subscriptions.scss';
import isValidEmail from '../../../utilities/isValidEmail';
import * as api from '../../../api';

export default () => {
    const [isOpen, toggleModal] = useState(false);

    const subscribe = (subscription, formApi) => {
        api.subscribe(subscription)
            .then(() => {
                toggleModal(true);
                formApi.reset();
            });
    };

    const validate = (values) => {
        return Object.assign({},
            !values.email && { email: 'Обязательное поле' },
            values.email && !isValidEmail(values.email) && { email: 'Некорректный email' }
        )
    };

    return (
        <div className="subscription">
            <div className="container">
                <div className="subscription__container">
                    <div className="subscription__title">
                        Подпишитесь на наши обновления
                    </div>
                    <div className="subscription__content">
                        <Form
                            onSubmit={subscribe}
                            validate={validate}
                            render={
                                ({ handleSubmit, submitting, pristine }) => {
                                    return (
                                        <form onSubmit={handleSubmit}
                                              className="subscription__formContainer">
                                            <Field name="email">
                                                {({ input, meta }) => (
                                                    <div className="subscription__inputContainer">
                                                        <input {...input}
                                                               type="text"
                                                               placeholder="Email"
                                                               className="subscription__input"/>
                                                        {meta.error && meta.touched
                                                        && <span className="subscription__errorMsg">{meta.error}</span>}
                                                    </div>
                                                )}
                                            </Field>
                                            <button disabled={submitting || pristine}
                                                    className={cn('subscription__btn',
                                                        { 'subscription__btn_disabled': submitting || pristine })}>
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </form>
                                    );
                                }
                            }
                        />
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered={true}>
                <div className="subscriptionModal">
                    <a href="#"
                       className="subscriptionModal__closeBtn"
                       onClick={(e) => {
                           e.preventDefault();
                           toggleModal(false);
                       }}>
                        <i className="fas fa-times"></i>
                    </a>
                    Спасибо, что подписались на наши обновления. Мы будем держать
                    Вас в курсе всех новостей.
                </div>
            </Modal>
        </div>
    );
}