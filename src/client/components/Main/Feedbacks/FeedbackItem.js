import React from 'react';
import * as moduleUtilities from '../../../utilities/moduleUtils';


export default ({row}) => {
    const personName = moduleUtilities.findRowCell('personName', row).value;
    const image = moduleUtilities.findRowCell('image', row).value;
    const feedback = moduleUtilities.findRowCell('feedback', row).value;

    return (
        <div className="feedback col-md-4">
            <div className="feedback__img">
                <img src={image}/>
            </div>
            <div className="feedback__title">{personName}</div>
            <div className="feedback__content" dangerouslySetInnerHTML={{ __html: feedback }}></div>
        </div>
    )
}