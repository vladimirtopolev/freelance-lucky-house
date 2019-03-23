import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import commonStyles from '../../common.module.scss';
import styles from './SingleImage.module.scss';

import ImageModal from './SingleImageModal';
import Image from '../Image'
import * as api from "../../../api";

export default function SingleImage({ cell, header, editMode, changeCell }) {
    const onChange = (targetFiles, cropOptions) => {
        const files = Array.from(targetFiles);
        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append(i, file)
        });

        api.uploadImage(formData, cropOptions)
            .then(res => {
                changeCell(res.data[0].url)
            });
    };

    const [isModalOpen, toggleModal] = useState(false);

    const imageStyles = { maxWidth: _.get(header, 'properties.maxWidth', 'none') };
    const imageAspect = _.get(header, 'properties.aspect', 1);
    return editMode
        ? (
            <div className={styles.SingleImage}>
                <Image src={cell.value} styles={imageStyles}/>
                <div className={styles.SingleImage__actionButtons}>
                    <button className={commonStyles.button}
                            onClick={() => toggleModal(true)}>
                        Изменить изображение
                    </button>
                </div>
                <ImageModal isOpen={isModalOpen}
                            toggle={() => toggleModal(!isModalOpen)}
                            imageAspect={imageAspect}
                            saveImage={onChange}/>
            </div>
        )
        : <Image src={cell.value}
                 styles={imageStyles}/>

};

SingleImage.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.string
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};