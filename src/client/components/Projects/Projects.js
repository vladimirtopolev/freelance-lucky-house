import React, {Component} from 'react';
import ExtractModuleData from '../common/ExtractModuleData';
import ResetWindowScroll from '../common/ResetWindowScroll'

import ProjectItem from './ProjectItem';


const Projects = ({ rows }) => {
    return (
        <div>
            {rows.map((row, i) => <ProjectItem key={i} row={row}/>)}
        </div>
    );
}

export default ResetWindowScroll(ExtractModuleData('projects')(Projects));