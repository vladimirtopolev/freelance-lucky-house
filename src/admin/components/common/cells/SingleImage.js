import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image'
import * as api from "../../../api";

export default function SingleImage({ cell, header, editMode, changeCell }) {
    const onChange = (e) => {
        const files = Array.from(e.target.files);
        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append(i, file)
        });

        api.uploadImage(formData)
            .then(res => {
                changeCell(res.data[0].url)
            });
    };

    return editMode
        ? (
            <div>
                <input type="file" onChange={onChange}/>
                <Image src={cell.value} alt="Image"/>
            </div>
        )
        : <Image src={cell.value} alt="Image"/>

};

SingleImage.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.string
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};