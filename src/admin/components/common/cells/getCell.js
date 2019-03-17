import React from 'react';

import Input from './InputCell';
import Textarea from './TextareaCell';

export default function getCell(props) {
    const { header } = props;
    switch (header.type) {
        case 'INPUT': {
            return <Input {...props}/>
        }
        case 'TEXTAREA': {
            return <Textarea {...props}/>
        }
        default: {
            throw new Error('Unavailable cell type');
        }
    }
}
