import React from 'react';

import Input from './InputCell';
import Textarea from './TextareaCell';
import Date from './DateCell';
import SingleImage from './SingleImage'

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
        default: {
            throw new Error('Unavailable cell type');
        }
    }
}
