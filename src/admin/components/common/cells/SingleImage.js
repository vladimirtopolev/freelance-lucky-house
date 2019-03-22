import React, {useState} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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

    return editMode
        ? (
            <div>
                <button onClick={()=> toggleModal(true)}>Изменить изображение</button>
                <Image src={cell.value} alt="Image"/>
                <ImageModal isOpen={isModalOpen} toggle={()=> toggleModal(!isModalOpen)} saveImage={onChange}/>
            </div>
        )
        : <Image src={cell.value}
                 styles={{maxWidth: _.get(header, 'properties.maxWidth', 'none')}}/>

};

SingleImage.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.string
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};