import React from 'react';
import cn from 'classnames';

import {getPropertyValue} from '../../../utilities/properties'
import styles from './AboutUs.module.scss';

export default ({properties}) => {
    const aboutUs = getPropertyValue(properties, 'aboutUs');
    const workFromYear = getPropertyValue(properties, 'workFromYear');
    const completedProjects = getPropertyValue(properties, 'completedProjects');
    return (
        <div className={styles.AboutUs}>
            <div className={cn(styles.AboutUs__container, 'container')}>
                <div className="about-us__title block-title">
                    О нас
                </div>
                <div className={styles.AboutUs__content}>
                    <div className="row">
                        <div className="col-md-7">
                            <div className={styles.AboutUs__description} dangerouslySetInnerHTML={{ __html: aboutUs }}>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className={styles.AboutUs__sloganContainer}>
                                <div className={styles.AboutUs__slogan}>
                                    Работаем с
                                    <div className={styles.AboutUs__sloganHighlightWord}>{workFromYear}</div>
                                </div>
                                <div className={styles.AboutUs__slogan}>
                                    Более
                                    <div className={styles.AboutUs__sloganHighlightWord}>{completedProjects}</div>
                                    проектов
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};