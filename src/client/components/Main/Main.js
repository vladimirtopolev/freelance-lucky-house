import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation/Navigation';
import AboutUs from './AboutUs/AboutUs';
import MakeOrder from '../MakeOrder/MakeOrder';
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
    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="main-view">
                        <div className="main-view__header">

                            <Navigation {...this.props}/>
                            <div className="main-slider">
                                <div className="main-slider__content">
                                    <div className="main-descriptions">
                                        <div className="main-description__title">
                                            Все для вашей дачи
                                        </div>
                                        <div className="main-description__content">
                                            <div className="main-description__item">Дома, бани (брус, каркас,
                                                газобетон)
                                            </div>
                                            <div className="main-description__item">Веранды, беседки, хозпостройки</div>
                                            <div className="main-description__item">Фудаменты, кровля, заборы</div>
                                            <div className="main-description__item">Ремонт, отделочные работы</div>
                                        </div>
                                        <div className="main-description__bar">
                                            <MakeOrder/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <AboutUs {...this.props}/>
                <Projects />
                <Advantages />
                <Subscriptions />
                <Workflow />
                <Feedbacks/>
                <Footer {...this.props}/>
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
