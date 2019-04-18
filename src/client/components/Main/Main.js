import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import MainView from './MainView/MainView';
import AboutUs from './AboutUs/AboutUs';
import Projects from './Projects/Projects';
import Workflow from './Workflow/Workflow';
import Subscriptions from './Subscriptions/Subscriptions';
import Advantages from './Advantages/Advantages';
import Feedbacks from './Feedbacks/Feedbacks';
import Footer from './Footer/Footer';

import './Main.scss';

import { fetchProperties } from '../../actions/properties';
import { getProperties } from '../../reducers/properties';


class App extends Component {
    state = {
        scrollWrapper: true
    };

    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        return (
            <div className={cn('wrapper', { ['wrapper_noScroll']: !this.state.scrollWrapper })}>
                <MainView
                    toggleWrapperScroll={(newState) => {
                        this.setState({scrollWrapper: newState})
                    }}
                    {...this.props}
                    />
                <AboutUs {...this.props}/>
                <Projects/>
                <Advantages/>
                <Subscriptions/>
                <Workflow/>
                <Feedbacks/>
                {/* <Footer {...this.props}/>*/}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        properties: getProperties(state)
    };
}

export default connect(mapStateToProps)(App);
