import React from 'react';
import _ from 'lodash';
import './Feedbacks.scss';
import {Link} from 'react-router-dom'

import ExtractModuleData from '../../common/ExtractModuleTable';
import FeedbckItem from './FeedbackItem';

const Feedbacks = ({rows}) => {
    return (
        <div className="feedbacks">
            <div className="feedbacks__container container">
                <div className="feedbacks__title block-title">
                    Отзывы
                </div>
                <div className="feedbacks__content row">
                    {_.takeRight(rows, 3)
                        .map((row, i) => <FeedbckItem row={row} key={i}/>)}
                </div>
                <div className="feedbacks__more">
                    <Link to="/feedbacks" className="btn btn-primary">Смотреть все отзывы</Link>
                </div>
            </div>
        </div>
    );
};

export default ExtractModuleData('feedbacks')(Feedbacks);