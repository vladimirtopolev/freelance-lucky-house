import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import cn from 'classnames';

import * as api from '../../api'
import isValidEmail from '../../utilities/isValidEmail'
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


    const closeModal = () => {
        toggleModalState(false);
        setTimeout(() => submitForm(false), 300);
    }

    const validate = (values) => {
        return Object.assign({},
            !values.firstName && { firstName: 'Обязательное поле' },
            !values.email && { email: 'Обязательное поле' },
            values.email && !isValidEmail(values.email) && { email: 'Некорректный email' },
            !values.phone && { phone: 'Обязательное поле' },
        );
    };

    return (
        <div className={styles.MakeOrder}>
            <button className={styles.MakeOrder__button}
                    onClick={(e) => {
                        e.persist();
                        e.preventDefault();
                        toggleModalState(true)
                    }}>Заказать звонок
            </button>
            <Modal className={styles.MakeOrder__modal}
                   isOpen={isOpen}
                   toggle={() => toggleModalState(!isOpen)}
                   centered={true}>
                {isSubmit && (
                    <div className={styles.MakeOrder__messageContainer}>
                        <div className={styles.MakeOrder__message}>
                            <a href="#"
                               className={styles.MakeOrder__closeMessageBtn}
                               onClick={(e) => {
                                   e.preventDefault();
                                   closeModal()
                               }}>
                                <i className="fas fa-times"></i>
                            </a>
                            Спасибо за интерес к нам. Мы с Вами свяжемся в ближайшее время.
                        </div>
                    </div>
                )}
                {!isSubmit && (
                    <Form
                        onSubmit={makeOrder}
                        validate={validate}
                        render={
                            ({ handleSubmit, form, submitting, pristine, values }) => {
                                return (
                                    <form onSubmit={handleSubmit}
                                          className={styles.MakeOrder__form}>
                                        <h1 className={styles.MakeOrder__formTitle}>
                                            Заказать звонок
                                            <a href="#"
                                               className={styles.MakeOrder__closeModalBtn}
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   closeModal();
                                               }}>
                                                <i className="fas fa-times"></i>
                                            </a>
                                        </h1>
                                        <div className={styles.MakeOrder__formContent}>
                                            <div className={styles.MakeOrder__inputBlock}>
                                                <Field name="firstName">
                                                    {({ input, meta }) => (
                                                        <div className={styles.MakeOrder__inputBlock}>
                                                            <label
                                                                className={styles.MakeOrder__inputLabel}>Имя</label>
                                                            <input {...input}
                                                                   type="text"
                                                                   placeholder="Имя"
                                                                   className={styles.MakeOrder__input}/>
                                                            {meta.error && meta.touched
                                                            && <span
                                                                className={styles.MakeOrder__inputErrorMsg}>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className={styles.MakeOrder__inputBlock}>
                                                <Field name="phone">
                                                    {({ input, meta }) => (
                                                        <div className={styles.MakeOrder__inputBlock}>
                                                            <label
                                                                className={styles.MakeOrder__inputLabel}>Номер
                                                                телефона</label>
                                                            <input {...input}
                                                                   type="text"
                                                                   placeholder="Номер телефона"
                                                                   className={styles.MakeOrder__input}/>
                                                            {meta.error && meta.touched
                                                            && <span
                                                                className={styles.MakeOrder__inputErrorMsg}>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div>
                                                <Field name="email">
                                                    {({ input, meta }) => (
                                                        <div className={styles.MakeOrder__inputBlock}>
                                                            <label
                                                                className={styles.MakeOrder__inputLabel}>Email</label>
                                                            <input {...input}
                                                                   type="text"
                                                                   placeholder="Email"
                                                                   className={styles.MakeOrder__input}/>
                                                            {meta.error && meta.touched
                                                            && <span
                                                                className={styles.MakeOrder__inputErrorMsg}>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className={styles.MakeOrder__inputBlock}>
                                                <label className={styles.MakeOrder__inputLabel}>Комментарий</label>
                                                <Field name="clientDescriptions"
                                                       component="textarea"
                                                       placeholder="Notes"
                                                       className={styles.MakeOrder__input}/>
                                            </div>
                                            <button type="submit"
                                                    disabled={submitting || pristine}
                                                    className={cn(styles.MakeOrder__formBtn,
                                                        { [styles.MakeOrder__formBtn_disable]: submitting || pristine })}>
                                                Отправить запрос
                                            </button>
                                        </div>
                                    </form>
                                );
                            }
                        }
                    />

                )}
            </Modal>
        </div>
    );

}