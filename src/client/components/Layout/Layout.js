import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Feedbacks from '../Feedbacks/Feedbacks';
import ProjectsRouter from '../Projects/Router';

import Navigation from '../Main/Navigation/Navigation';
import Footer from '../Main/Footer/Footer';
import { getProperties } from "../../reducers/properties";
import { connect } from 'react-redux';
import { fetchProperties } from "../../actions/properties";


import styles from './Layout.module.scss';


class Layout extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        return (
            <div className={styles.Layout}>
                <div className={styles.Layout__contentContainer}>
                    <Navigation {...this.props} isSecondary={true} className="navigation_secondary"/>
                    <div className={styles.Layout__content}>
                        <div className={styles.Layout__leftSidebar}>
                            <a href="" className="btn btn-primary layout__makeOrderBtn">Заказать звонок</a>
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
