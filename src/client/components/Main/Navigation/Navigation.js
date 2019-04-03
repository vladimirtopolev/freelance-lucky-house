import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { getPropertyValue } from '../../../utilities/properties'


export default function ({ properties, isSecondary }) {
    const phone1 = getPropertyValue(properties, 'phone1');
    const phone2 = getPropertyValue(properties, 'phone2');

    const mail = getPropertyValue(properties, 'mail');
    return (
        <div className={cn('navigation', { 'navigation_secondary': isSecondary })}>
            <div className="navigation__container">
                <a className="navigation__logo" href="/">
                    <img alt="logo" src={require('../../../../img/logo.png')} className="logo"/>
                </a>

                <div className="navigation__bar">
                    <ul className="main-navbar">
                        <li className="main-navbar__item">
                            <Link to="/projects" className="main-navbar__link">
                                Проекты
                            </Link>
                        </li>
                        <li className="main-navbar__item">
                            <Link to="/feedbacks" className="main-navbar__link">
                                Отзывы
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navigation__contact">
                    <div className="navbar-contact">
                        <div className="navbar-contact__label">
                            <div className="fa fa-phone navbar-contact__icon"></div>
                        </div>
                        <div className="navbar-contact__description">
                            <div className="navbar-contact__description-item">
                                <img src={require('../../../../img/mts.png')}
                                     alt="mts"
                                     className="navbar-contact__description-icon"
                                />
                                {phone1}
                            </div>
                            <div className="navbar-contact__description-item">
                                <img src={require('../../../../img/megaphone.png')}
                                     alt="megaphone"
                                     className="navbar-contact__description-icon"
                                />
                                {phone2}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}