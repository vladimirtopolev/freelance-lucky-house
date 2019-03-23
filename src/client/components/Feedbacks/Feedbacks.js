import React from 'react';
import ExtractModuleData from '../common/ExtractModuleData';
import * as moduleUtilities from '../../utilities/moduleUtils';

import FeedbackItem from './FeedbackItem';


const Feedbacks = ({ rows }) => {
    return (
        <div>
            {rows.map((row, i) => <FeedbackItem key={i} row={row}/>)}
        </div>
    );
}

export default ExtractModuleData('feedbacks')(Feedbacks);