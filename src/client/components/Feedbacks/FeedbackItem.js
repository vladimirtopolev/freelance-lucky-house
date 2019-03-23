import React from 'react';
import moment from 'moment';
import * as moduleUtilities from "../../utilities/moduleUtils";
import styles from './FeedbackItem.module.scss';

export default ({ row }) => {
    const personName = moduleUtilities.findRowCell('personName', row).value;
    const image = moduleUtilities.findRowCell('image', row).value;
    const feedback = moduleUtilities.findRowCell('feedback', row).value;
    const date = moduleUtilities.findRowCell('date', row).value;

    return (
        <div className={styles.FeedbackItem}>
            <div className={styles.FeedbackItem__imageContainer}>
                <img src={image} className={styles.FeedbackItem__image}/>
            </div>
            <div className={styles.FeedbackItem__content}>
                <div className={styles.FeedbackItem__personName}>
                    {personName}
                </div>
                <div className={styles.FeedbackItem__date}>
                    {moment(date).format('DD/MM/YYYY')}
                </div>
                <div className={styles.FeedbackItem__text}
                    dangerouslySetInnerHTML={{ __html: feedback }}>
                </div>
            </div>
        </div>
    );
};
