import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import * as api from '../../api'

import styles from './MakeOrder.module.scss';

export default (props) => {
    const [isOpen, toggleModalState] = useState(false);
    const [isSubmit, submitForm] = useState(false);

    const makeOrder = (values, formApi) => {
        api.orderCall(values)
            .then(() => {
                formApi.reset();
                submitForm(true);
            });
    };

    const toggleModal = () => {

    };

    const validate = (values) => {
        const errors = {};
        /*if (!values.lastName) {
            errors.firstName = "Required";
        }
        if (!values.phone) {
            errors.phone = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        }*/
        return errors;
    };

    return (
        <div className={styles.MakeOrder}>
            <button className={styles.MakeOrder__button}
                    onClick={() => toggleModalState(true)}>Заказать звонок
            </button>
            <Modal className={styles.MakeOrder__modal}
                   isOpen={isOpen}
                   toggle={() => toggleModalState(!isOpen)}
                   centered={true}>
                {isSubmit && (
                    <div>
                        Спасибо за интерес к нам. Мы с Вами свяжемся в ближайшее время.
                    </div>
                )}
                {!isSubmit && (
                    <Form
                        onSubmit={makeOrder}
                        validate={validate}
                        render={
                            ({ handleSubmit, form, submitting, pristine, values }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label>Фамилия</label>
                                            <Field
                                                name="firstName"
                                                component="input"
                                                type="text"
                                                placeholder="Имя"
                                            />
                                        </div>
                                        <div>
                                            <label>Телефон</label>
                                            <Field
                                                name="phone"
                                                component="input"
                                                type="text"
                                                placeholder="Телефон"
                                            />
                                        </div>
                                        <div>
                                            <Field name="email">
                                                {({ input, meta }) => (
                                                    <div>
                                                        <label>Email</label>
                                                        <input {...input} type="text" placeholder="Email"/>
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <div>
                                            <label>Комментарий</label>
                                            <Field name="clientDescriptions" component="textarea" placeholder="Notes"/>
                                        </div>
                                        <button type="submit" disabled={submitting || pristine}>
                                            Submit
                                        </button>
                                    </form>
                                );
                            }
                        }
                    />
                )}
                <button onClick={()=>toggleModalState(false)}>Закрыть</button>
            </Modal>
        </div>
    );

}