import React from 'react';
import ExtractModuleTableItem from '../../common/ExtractModuleTableItem'

const ProjectItem = (props) => {
    console.log('PROPS', props);
    return 'Project'
};

export default ExtractModuleTableItem('projects')(ProjectItem);