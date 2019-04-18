import React, { Component } from 'react';
import cn from 'classnames';
import { Switch, Route } from 'react-router-dom';

import Feedbacks from '../Feedbacks/Feedbacks';
import MakeOrder from '../MakeOrder/MakeOrder';
import ProjectsRouter from '../Projects/Router';

import Navigation from '../Main/Navigation/Navigation';
import Footer from '../Main/Footer/Footer';
import { getProperties } from "../../reducers/properties";
import { connect } from 'react-redux';
import { fetchProperties } from "../../actions/properties";


import styles from './Layout.module.scss';
import MainView from '../Main/MainView/MainView';


class Layout extends Component {
    state = {
        scrollWrapper: true
    };

    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        return (
            <div className={cn(styles.Layout, { [styles.Layout_noScroll]: !this.state.scrollWrapper })}>
                <div className={styles.Layout__contentContainer}>
                    <Navigation {...this.props}
                                isSecondary={true}
                                toggleWrapperScroll={(newState) => {
                                    this.setState({scrollWrapper: newState})
                                }}
                    />
                    <div className={cn(styles.Layout__content)}>
                        <div className={cn(styles.Layout__leftSidebar)}>
                            <MakeOrder/>
                        </div>
                        <div className={styles.Layout__page}>
                            <Switch>
                                <Route path="/feedbacks" component={Feedbacks}/>
                            </Switch>
                            <ProjectsRouter/>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Layout);
