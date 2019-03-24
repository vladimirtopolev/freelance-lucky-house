import React from 'react';

import Input from './InputCell';
import Textarea from './TextareaCell';
import Date from './DateCell';
import SingleImage from './SingleImage';
import ImageGallery from './ImageGallery';

export default function getCell(props) {
    const { header } = props;
    switch (header.type) {
        case 'INPUT': {
            return <Input {...props}/>
        }
        case 'TEXTAREA': {
            return <Textarea {...props}/>
        }
        case 'DATE' : {
            return <Date {...props}/>
        }
        case 'IMAGE': {
            return <SingleImage {...props}/>
        }
        case 'IMAGE_GALLERY': {
            return <ImageGallery {...props}/>
        }
        default: {
            throw new Error(`Unavailable cell type: ${header.type}`);
        }
    }
}
