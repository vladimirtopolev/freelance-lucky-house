import { Switch, Route } from 'react-router-dom';
import Projects from './Projects/ProjectsContainer';
import ProjectItem from './ProjectItem/ProjectItem';
import React from 'react';

export default () => {
    return (
        <Switch>
            <Route path="/projects/:projectId" component={ProjectItem}/>
            <Route path="/projects" component={Projects}/>
        </Switch>
    );
}