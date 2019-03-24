import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation/Navigation';
import AboutUs from './AboutUs/AboutUs';
import Projects from './Projects/Projects';
import Feedbacks from './Feedbacks/Feedbacks';
import Footer from './Footer/Footer';

import './Main.scss';

import { fetchProperties } from '../../actions/properties';
import { getProperties } from '../../reducers/properties';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="main-view">
                        <div className="main-view__header">

                            <Navigation {...this.props}/>
                            <div className="main-slider">
                                <div className="main-slider__content">
                                    <div className="main-descriptions">
                                        <div className="main-description__title">
                                            Все для вашей дачи
                                        </div>
                                        <div className="main-description__content">
                                            <div className="main-description__item">Дома, бани (брус, каркас,
                                                газобетон)
                                            </div>
                                            <div className="main-description__item">Веранды, беседки, хозпостройки</div>
                                            <div className="main-description__item">Фудаменты, кровля, заборы</div>
                                            <div className="main-description__item">Ремонт, отделочные работы</div>
                                        </div>
                                        <div className="main-description__bar">
                                            <button className="btn btn-primary main-description__btn">Заказать звонок
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <AboutUs {...this.props}/>


                <Projects />

                <div className="advantages">
                    <div className="advantages__container container">
                        <div className="advantages__title block-title">
                            Преимущества
                        </div>
                        <div className="advantages__content row">
                            <div className="col-4">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../../img/advantage03.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Разумные цены
                                    </div>
                                    <div className="advantage__content">
                                        Собственное лесопильное производство
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../../img/advantage01.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Качественные материалы
                                    </div>
                                    <div className="advantage__content">
                                        Закуп только у производителей
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../../img/advantage04.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Опытные строители
                                    </div>
                                    <div className="advantage__content">
                                        Опыт более 10 лет
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subscription">
                    <div className="container">
                        <div className="subscription__container">
                            <div className="subscription__title">
                                Подпишитесь на наши обновления
                            </div>
                            <div className="subscription__content">
                                <div className="subscription__input-container">
                                    <input className="subscription__input" type="text" placeholder="Email"/>
                                    <button className="subscription__btn">
                                        <i className="fab fa-telegram-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Feedbacks/>
                <Footer {...this.props}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        properties: getProperties(state)
    };
}

export default connect(mapStateToProps)(App);
