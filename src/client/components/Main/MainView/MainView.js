import React from 'react';
import Navigation from "../Navigation/Navigation";
import MakeOrder from "../../MakeOrder/MakeOrder";
import styles from './MainView.module.scss';

export default (props) => {
    return (
        <div className="content">
            <div className={styles.MainView}>
                <div className={styles.MainView__header}>
                    <Navigation {...props}/>
                    <div className={styles.MainSlider}>
                        <div className={styles.MainSlider__content}>
                            <div className={styles.MainDescription}>
                                <div className={styles.MainDescription__title}>
                                    Все для вашей дачи
                                </div>
                                <div className={styles.MainDescription__content}>
                                    <div className={styles.MainDescription__item}>Дома, бани (брус, каркас,
                                        газобетон)
                                    </div>
                                    <div className={styles.MainDescription__item}>Веранды, беседки, хозпостройки</div>
                                    <div className={styles.MainDescription__item}>Фудаменты, кровля, заборы</div>
                                    <div className={styles.MainDescription__item}>Ремонт, отделочные работы</div>
                                </div>
                                <div className={styles.MainDescription__bar}>
                                    <MakeOrder/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
