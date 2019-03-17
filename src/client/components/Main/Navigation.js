import React from 'react';
import {getPropertyValue} from '../../utilities/properties'


export default function ({properties}) {
    const phone = getPropertyValue(properties, 'phone');
    const mail = getPropertyValue(properties, 'mail');
    return (
        <div className="navigation">
            <div className="navigation__container">
                <div className="navigation__logo">
                    <img alt="logo" src={require('../../../img/logo.png')} className="logo"/>
                </div>

                <div className="navigation__bar">
                    <ul className="main-navbar">
                        <li className="main-navbar__item">
                            <a href="#" className="main-navbar__link">О нас</a>
                        </li>
                        <li className="main-navbar__item">
                            <a href="#" className="main-navbar__link">Проекты</a>
                        </li>
                        <li className="main-navbar__item">
                            <a href="#" className="main-navbar__link">Отзывы</a>
                        </li>
                        <li className="main-navbar__item">
                            <a href="#" className="main-navbar__link">Контакты</a>
                        </li>
                    </ul>
                </div>

                <div className="navigation__contact">
                    <div className="navbar-contact">
                        <div className="navbar-contact__label">
                            <div className="fa fa-phone navbar-contact__icon"></div>
                        </div>
                        <div className="navbar-contact__description">
                            <div className="navbar-contact__description-item">{phone}</div>
                            <div className="navbar-contact__description-item">{mail}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}