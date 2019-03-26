import React from 'react';
import * as moduleUtilities from '../../../utilities/moduleUtils';
import {Link} from 'react-router-dom';

export default ({row, i}) => {
    const name = moduleUtilities.findRowCell('name', row).value;
    const image = moduleUtilities.findRowCell('image', row).value;

    return (
        <div className="portfolio__slide project-slide">
            <Link to={`/projects/${row._id}`} className="project-slide__container">
                <div className="project-slide__img"
                     style={{ backgroundImage: `url(${image}` }}></div>
                <div className="project-slide__description-container">
                    <div className="project-slide__title">
                        {name}
                    </div>
                </div>
            </Link>
        </div>
    );
};
