import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';

import * as moduleUtilities from "../../../utilities/moduleUtils";

import styles from './ProjectItem.module.scss';

export default ({ row }) => {
    const date = moduleUtilities.findRowCell('date', row).value;
    const name = moduleUtilities.findRowCell('name', row).value;
    const description = moduleUtilities.findRowCell('description', row).value;
    const image = moduleUtilities.findRowCell('image', row).value;

    return (
        <div className={styles.ProjectItem}>
            <div className={styles.ProjectItem__imageContainer}>
                <img src={image} alt="Project photo" className={styles.ProjectItem__image}/>
            </div>
            <div className={styles.ProjectItem__descriptionContainer}>
                <div className={styles.ProjectItem__name}>{name}</div>
                <div className={styles.ProjectItem__date}>{moment(date).format('DD/MM/YYYY')}</div>
                <div className={styles.ProjectItem__description}
                     dangerouslySetInnerHTML={{ __html: description }}>
                </div>
                <div className={styles.ProjectItem__link}>
                    <Link to={`/projects/${row._id}`} className="btn btn-primary">Подробнее</Link>
                </div>
            </div>
        </div>
    );
}