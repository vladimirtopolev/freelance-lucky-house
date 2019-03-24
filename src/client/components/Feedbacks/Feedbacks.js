import React from 'react';
import ExtractModuleData from '../common/ExtractModuleData';
import ResetWindowScroll from '../common/ResetWindowScroll'

import * as moduleUtilities from '../../utilities/moduleUtils';

import FeedbackItem from './FeedbackItem';


const Feedbacks = ({ rows }) => {
    return (
        <div>
            {rows.map((row, i) => <FeedbackItem key={i} row={row}/>)}
        </div>
    );
}

export default ResetWindowScroll(ExtractModuleData('feedbacks')(Feedbacks));