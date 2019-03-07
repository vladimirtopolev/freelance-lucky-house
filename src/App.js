import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="main-view">
                        <div className="main-view__header">


                            <div className="navigation">
                                <div className="navigation__container">
                                    <div className="navigation__logo">
                                        <img alt="logo" src={require('./img/logo.png')}/>
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
                                                <div className="navbar-contact__description-item">+7 911 404 60 22</div>
                                                <div className="navbar-contact__description-item">nyppelli@mail.ru</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-slider">

                            </div>


                        </div>
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        );
    }
}

export default App;
