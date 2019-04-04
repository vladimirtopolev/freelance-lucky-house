import React from 'react';

export default () => {
    return (
        <div className="advantages">
            <div className="advantages__container container">
                <div className="advantages__title block-title">
                    Преимущества
                </div>
                <div className="advantages__content row">
                    <div className="col-4">
                        <div className="advantage">
                            <div className="advantage__label">
                                <img className="advantage__img" src={require('../../../../img/advantage03.png')}/>
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
                                <img className="advantage__img" src={require('../../../../img/advantage01.png')}/>
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
                                <img className="advantage__img" src={require('../../../../img/advantage04.png')}/>
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
    );
}