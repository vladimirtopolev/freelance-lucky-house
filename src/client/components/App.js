import React, {Component} from 'react';
import Slider from "react-slick";
import {connect} from 'react-redux';

import Navigation from './Main/Navigation';
import AboutUs from './Main/AboutUs'
import Footer from './Main/Footer';

import './App.scss';

import {fetchProperties} from '../actions/properties';
import {getProperties} from '../reducers/properties';

var settings = {
    dots: true,
    dotsClass: 'portfolio__slider-dots slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

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


                <div className="portfolio">
                    <div className="portfolio__container container">
                        <div className="portfolio__title block-title">
                            Проекты
                        </div>
                        <div className="portfolio__slider">
                            <Slider {...settings}>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img"
                                             style={{backgroundImage: `url(${require("../../img/photo1.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img"
                                             style={{backgroundImage: `url(${require("../../img/photo2.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img"
                                             style={{backgroundImage: `url(${require("../../img/photo3.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img"
                                             style={{backgroundImage: `url(${require("../../img/photo4.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img"
                                             style={{backgroundImage: `url(${require("../../img/photo5.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="portfolio__more">
                            <button className="btn btn-primary">Подробнее</button>
                        </div>
                    </div>
                </div>

                <div className="advantages">
                    <div className="advantages__container container">
                        <div className="advantages__title block-title">
                            Преимущества
                        </div>
                        <div className="advantages__content row">
                            <div className="col-4">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../img/advantage03.png')}/>
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
                                        <img className="advantage__img" src={require('../../img/advantage01.png')}/>
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
                                        <img className="advantage__img" src={require('../../img/advantage04.png')}/>
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

                <div className="feedbacks">
                    <div className="feedbacks__container container">
                        <div className="feedbacks__title block-title">
                            Отзывы
                        </div>
                        <div className="feedbacks__content row">
                            <div className="feedback col-4">
                                <div className="feedback__img">
                                    <img src={require('../../img/feedback.jpg')}/>
                                </div>
                                <div className="feedback__title">Нюппель Леонид</div>
                                <div className="feedback__content">
                                    Давно хотели построить семейный загородный семейный дом
                                    с баней. Очень рад, что сделал выбор в пользу этой компании
                                </div>
                                <div className="feedback__link">
                                    <a href="" className="btn btn-primary">Подробнее</a>
                                </div>
                            </div>
                            <div className="feedback col-4">
                                <div className="feedback__img">
                                    <img src={require('../../img/feedback.jpg')}/>
                                </div>
                                <div className="feedback__title">Нюппель Леонид</div>
                                <div className="feedback__content">
                                    Давно хотели построить семейный загородный семейный дом
                                    с баней. Очень рад, что сделал выбор в пользу этой компании
                                </div>
                                <div className="feedback__link">
                                    <a href="" className="btn btn-primary">Подробнее</a>
                                </div>
                            </div>
                            <div className="feedback col-4">
                                <div className="feedback__img">
                                    <img src={require('../../img/feedback.jpg')}/>
                                </div>
                                <div className="feedback__title">Нюппель Леонид</div>
                                <div className="feedback__content">
                                    Давно хотели построить семейный загородный семейный дом
                                    с баней. Очень рад, что сделал выбор в пользу этой компании
                                </div>
                                <div className="feedback__link">
                                    <a href="" className="btn btn-primary">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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
