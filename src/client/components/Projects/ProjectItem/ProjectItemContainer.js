import React from 'react';
import ExtractModuleTableItem from '../../common/ExtractModuleTableItem'

import * as moduleUtilities from "../../../utilities/moduleUtils";
import moment from 'moment'

const ProjectItem = ({row}) => {
    console.log('ROW', row);
    const date = moduleUtilities.findRowCellValue('date', row);
    const name = moduleUtilities.findRowCellValue('name', row);
    const description = moduleUtilities.findRowCellValue('description', row);
    const image = moduleUtilities.findRowCellValue('image', row);
    const imageGalerry = moduleUtilities.findRowCellValue('imageGallery', row);

    return (
        <div>
            <div>
                {/*<img src={image} alt="Main project photo"/>*/}
            </div>
            <div>
                <div>{name}</div>
                <div>{date}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};


function getRowIdFromProps(props) {
    return props.match.params.projectId;
};

export default ExtractModuleTableItem('projects', getRowIdFromProps)(ProjectItem);