import React, { useState, useEffect } from 'react';
import NavigationLink from './NavigationLink';
import cn from 'classnames';
import { getPropertyValue } from '../../../utilities/properties'
import styles from './Navigation.module.scss';

export default function ({ properties, isSecondary, toggleWrapperScroll }) {

    const [isOpen, toggleNavigation] = useState(false);

    const toggleScroll = (media) => {
        if (!media.matches) {
            toggleWrapperScroll(true);
            toggleNavigation(false);
        }
    };

    useEffect(() => {
        const mediaQueryListener = window.matchMedia("(max-width: 900px)");
        mediaQueryListener.addListener(toggleScroll);
    }, []);

    const returnDefaultNavigationState = () => {
        toggleNavigation(false);
        toggleWrapperScroll(true);
    };

    const phone1 = getPropertyValue(properties, 'phone1');
    const phone2 = getPropertyValue(properties, 'phone2');

    return (
        <div className={cn(styles.Navigation, {
            [styles.Navigation_secondary]: isSecondary,
            [styles.Navigation_open]: isOpen
        })}>
            <div className={styles.Navigation__container}>
                <div className={styles.Navigation__logoContainer}>
                    <a className={styles.Navigation__logo} href="/">
                        <img alt="logo" src={require('../../../../img/logo.png')} className={styles.Logo}/>
                    </a>
                    <div className={styles.Navigation__toggleButtonContainer}>
                        <button className={styles.Navigation__toggleButton}
                                onClick={() => {
                                    toggleNavigation(!isOpen);
                                    toggleWrapperScroll(isOpen);
                                }}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                <div className={styles.Navigation__togglePart}>
                    <div className={styles.Navigation__bar}>
                        <ul className={styles.MainNavbar}>
                            <li className={styles.MainNavbar__item}>
                                <NavigationLink
                                    to="/projects"
                                    className={styles.MainNavbar__link}
                                    callBackAfterClick={returnDefaultNavigationState}
                                >
                                    Проекты
                                </NavigationLink>
                            </li>
                            <li className={styles.MainNavbar__item}>
                                <NavigationLink
                                    to="/feedbacks"
                                    className={styles.MainNavbar__link}
                                    callBackAfterClick={returnDefaultNavigationState}
                                >
                                    Отзывы
                                </NavigationLink>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.Navigation__contact}>
                        <div className={styles.NavbarContact}>
                            <div className={styles.NavbarContact__label}>
                                <div className={cn(styles.NavbarContact__icon, 'fa', 'fa-phone')}></div>
                            </div>
                            <div className={styles.NavbarContact__description}>
                                <div className={styles.NavbarContact__descriptionItem}>
                                    <img src={require('../../../../img/mts.png')}
                                         alt="mts"
                                         className={styles.NavbarContact__descriptionIcon}
                                    />
                                    {phone1}
                                </div>
                                <div className={styles.NavbarContact__descriptionItem}>
                                    <img src={require('../../../../img/megaphone.png')}
                                         alt="megaphone"
                                         className={styles.NavbarContact__descriptionIcon}
                                    />
                                    {phone2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
