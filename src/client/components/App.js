import React, {Component} from 'react';
import Slider from "react-slick";

import './App.scss';

var settings = {
    dots: true,
    dotsClass: 'portfolio__slider-dots slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

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
                                        <img alt="logo" src={require('../../img/logo.png')} className="logo"/>
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


                <div className="about-us">
                    <div className="about-us__container container">
                        <div className="about-us__title block-title">
                            О нас
                        </div>
                        <div className="about-us__content">
                            <div className="row">
                                <div className="col-7">
                                    <div className="about-us__description">
                                        Далеко-далеко за словесными горами в стране гласных и
                                        согласных живут рыбные тексты. Вдали от всех живут они
                                        в буквенных домах на берегу Семантика большого языкового
                                        океана. Маленький ручеек Даль журчит по всей стране и
                                        обеспечивает ее всеми необходимыми правилами.
                                        Эта парадигматическая страна, в которой жаренные
                                        члены предложения залетают прямо в рот. Даже всемогущая
                                        пунктуация не имеет власти над рыбными текстами, ведущими
                                        безорфографичный образ жизни. Однажды одна маленькая
                                        строчка рыбного текста по имени Lorem ipsum решила выйти в
                                        большой мир грамматики. Великий Оксмокс предупреждал ее о
                                        злых запятых, диких знаках вопроса и коварных точках с запятой,
                                        но текст не дал сбить себя с толку. Он собрал семь свои
                                        х заглавных букв, подпоясал инициал за пояс и пустился
                                        в дорогу.
                                    </div>
                                    <button className="btn btn-primary">Подробнее</button>
                                </div>
                                <div className="col-5">
                                    <div className="about-us__slogan-container">
                                        <div className="about-us__slogan">
                                            Работаем с
                                            <div className="about-us__slogan-highlight-word">2009</div>
                                        </div>
                                        <div className="about-us__slogan">
                                            Более
                                            <div className="about-us__slogan-highlight-word">50</div>
                                            проектов
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio">
                    <div className="portfolio__container container">
                        <div className="portfolio__title block-title">
                            Проекты
                        </div>
                        <div className="portfolio__slider">
                            <Slider {...settings}>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img" style={{backgroundImage: `url(${require("../../img/photo1.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img" style={{backgroundImage: `url(${require("../../img/photo2.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img" style={{backgroundImage: `url(${require("../../img/photo3.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img" style={{backgroundImage: `url(${require("../../img/photo4.jpg")}`}}></div>
                                        <div className="project-slide__description-container">
                                            <div className="project-slide__title">
                                                Проект 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__slide project-slide">
                                    <div className="project-slide__container">
                                        <div className="project-slide__img" style={{backgroundImage: `url(${require("../../img/photo5.jpg")}`}}></div>
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
                            <div className="col-3">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../img/advantage03.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Разумные цены
                                    </div>
                                    <div className="advantage__content">
                                        Тут буквадльно пару слов про каждое преимущество
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../img/advantage01.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Качественные материалы
                                    </div>
                                    <div className="advantage__content">
                                        Тут буквадльно пару слов про каждое преимущество
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../img/advantage04.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Опытные строители
                                    </div>
                                    <div className="advantage__content">
                                        ут буквадльно пару слов про каждое преимущество
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="advantage">
                                    <div className="advantage__label">
                                        <img className="advantage__img" src={require('../../img/advantage02.png')}/>
                                    </div>
                                    <div className="advantage__title">
                                        Гарантия качества
                                    </div>
                                    <div className="advantage__content">
                                        Тут буквадльно пару слов про каждое преимущество
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
                                        <i class="fab fa-telegram-plane"></i>
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


                <div className="footer">
                    <div className="footer__container">
                        <div className="footer__header">
                            <div className="footer__logo">
                                <img alt="logo" src={require('../../img/logo-footer.png')} className="logo"/>
                            </div>
                            <div className="footer__socials">
                                <a href="" className="social social_vk"></a>
                                <a href="" className="social social_fb"></a>
                                <a href="" className="social social_instagram"></a>
                            </div>
                            <div className="footer__contacts">
                                <div className="footer__item-contact">
                                    <i class="fa fa-phone footer__item-contact-label" aria-hidden="true"></i>
                                    +7 911 404 60 23
                                </div>
                                <div className="footer__item-contact">
                                    <i class="fa fa-envelope footer__item-contact-label" aria-hidden="true"></i>
                                    mail@mail.ru
                                </div>
                            </div>
                        </div>
                        <div className="footer__copyright">
                            © 2018, Удачный дом, Карелия
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
