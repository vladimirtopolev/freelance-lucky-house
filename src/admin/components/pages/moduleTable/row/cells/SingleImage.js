import React, { Component } from 'react';

import Image from '../../../../common/Image'
import * as api from '../../../../../api';

export default ({ cell, header, editMode, changeCell }) => {

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

    return (
        <div>
            <div>{header.name}</div>
            <div>
                {editMode
                    ? (
                        <div>
                            <input type="file" onChange={onChange}/>
                            <Image src={cell.value} alt="Image"/>
                        </div>
                    )
                    : <Image src={cell.value} alt="Image"/>
                }
            </div>
        </div>
    )
};
