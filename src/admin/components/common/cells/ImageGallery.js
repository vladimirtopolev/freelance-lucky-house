import React from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import _ from 'lodash';
import * as api from "../../../api";

import styles from './ImageGallery.module.scss';
import commonStyles from '../../common.module.scss';

export default function ImageGalerry({ cell, header, editMode, changeCell }) {

    const addImage = (ev) => {
        const files = Array.from(ev.target.files);
        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append(i, file)
        });

        api.uploadImage(formData)
            .then(res => {
                changeCell([...cell.value, res.data[0].url])
            });
    };

    const deleteImage = (imageSrc) => {
        console.log(imageSrc);
        console.log(cell.value.filter(image => image === imageSrc));
        changeCell(cell.value.filter(image => image !== imageSrc))
    };

    const cellValue = _.isArray(cell.value) ? cell.value : [];

    return (
        <div className={styles.ImageGallery}>
            <div className={styles.ImageGallery__imagesContainer}>
                {cellValue.map(image => {
                    return (
                        <div className={styles.ImageGallery__image}
                             style={{ backgroundImage: `url(${image})` }}>
                            {
                                editMode && (
                                    <div className={styles.ImageGallery__imageButtons}>
                                        <button className={styles.ImageGallery__imageBtn}
                                                onClick={deleteImage.bind(null, image)}>
                                            <i className={cn(styles.ImageGallery__imageIcon, 'fas', 'fa-times')}></i>
                                            Удалить
                                        </button>
                                    </div>)
                            }
                        </div>
                    )
                })}
            </div>
            {editMode && (
                <div className={commonStyles.inputFileBtn}>
                    <input type="file" onChange={addImage}/>
                    Добавить изображение
                </div>
            )}
        </div>
    );
}

ImageGalerry.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};
