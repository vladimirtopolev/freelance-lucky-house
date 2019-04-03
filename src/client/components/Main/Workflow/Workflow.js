import React from 'react';
import './Workflow.scss';

export default () => {
    return (
        <div className="workflow">
            <div className="workflow__container container">
                <div className="workflow__title block-title">
                    Как мы работаем
                </div>
                <div className="workflow__content">
                    <div className="workflow__item">
                        <div className="workflow__itemOrder">01.</div>
                        <div className="workflow__itemTitle">Встреча</div>
                        <div className="workflow__itemLine"></div>
                        <div className="workflow__itemDescription"></div>
                    </div>
                    <div className="workflow__item">
                        <div className="workflow__itemOrder">02.</div>
                        <div className="workflow__itemTitle">Проект, смета</div>
                        <div className="workflow__itemLine"></div>
                        <div className="workflow__itemDescription"></div>
                    </div>
                    <div className="workflow__item">
                        <div className="workflow__itemOrder">03.</div>
                        <div className="workflow__itemTitle">Закуп</div>
                        <div className="workflow__itemLine"></div>
                        <div className="workflow__itemDescription"></div>
                    </div>
                    <div className="workflow__item">
                        <div className="workflow__itemOrder">04.</div>
                        <div className="workflow__itemTitle">Строительство</div>
                        <div className="workflow__itemLine"></div>
                        <div className="workflow__itemDescription"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}