import React, { useState } from 'react';
import _ from 'lodash';
import ReactBnbGallery from 'react-bnb-gallery'
import Slider from "react-slick";


import ExtractModuleTableItem from '../../common/ExtractModuleTableItem'

import * as moduleUtilities from "../../../utilities/moduleUtils";
import moment from 'moment';

import styles from './ProjectItem.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ProjectItem = ({ row }) => {
    const [isGalleryOpened, toggleGallery] = useState(false);

    const date = moduleUtilities.findRowCellValue('date', row);
    const name = moduleUtilities.findRowCellValue('name', row);
    const description = moduleUtilities.findRowCellValue('description', row);
    const image = moduleUtilities.findRowCellValue('image', row);
    const imageGallery = moduleUtilities.findRowCellValue('imageGallery', row);

    const images = [{ photo: image }]
        .concat(_.isArray(imageGallery)
            ? imageGallery.map(img => ({
                photo: img
            }))
            : []);

    return (
        <div className={styles.ProjectItem}>
            <div className={styles.ProjectItem__name}>
                {name}
            </div>
            <div className={styles.ProjectItem__date}>
                {moment(date).format('DD/MM/YYYY')}
            </div>
            <div className={styles.ProjectItem__imageGallery}>
                <Slider {...settings}>
                    {images.map((img, i) => (
                        <div key={i}>
                                <img src={img.photo} style={{width: `500px`}}/>
                        </div>
                    ))}
                </Slider>
            </div>
            {/*}
            <div className={styles.ProjectItem__imageContainer}>
                <a href="" className={styles.ProjectItem__imageLink} onClick={(e) => {
                    e.preventDefault();
                    toggleGallery(true);
                }}>
                    <img src={image} alt="Main project photo" className={styles.ProjectItem__image}/>
                </a>
                <button onClick={() => toggleGallery(true)}>Смотреть все фото</button>
            </div>
            <div className={styles.ProjectItem__descriptionContainer}>


                <div className={styles.ProjectItem__description}
                     dangerouslySetInnerHTML={{ __html: description }}>
                </div>

                <ReactBnbGallery
                    show={isGalleryOpened}
                    showThumbnails={false}
                    photos={images}
                    onClose={() => toggleGallery(!isGalleryOpened)}/>
            </div> */}
        </div>
    );
};


function getRowIdFromProps(props) {
    return props.match.params.projectId;
};

export default ExtractModuleTableItem('projects', getRowIdFromProps)(ProjectItem);