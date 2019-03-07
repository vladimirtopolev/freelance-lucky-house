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
                                                <a href="#">О нас</a>
                                            </li>
                                            <li>
                                                <a href="#">Проекты</a>
                                            </li>
                                            <li>
                                                <a href="#">Отзывы</a>
                                            </li>
                                            <li>
                                                <a href="#">Контакты</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="navigation__contact">
                                        test
                                    </div>
                                </div>
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
