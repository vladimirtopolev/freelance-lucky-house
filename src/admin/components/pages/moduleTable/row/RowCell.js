import React from 'react';

import InputCell from './cells/InputCell';
import TextArea from './cells/TextAreaCell';
import SingleImage from './cells/SingleImage';

export default (props) => {
    const { header } = props;
    switch (header.type) {
        case 'IMAGE': {
            return <SingleImage {...props}/>
        }
        case 'TEXTAREA': {
            return <TextArea {...props}/>
        }
        default: {
            return <InputCell {...props}/>
        }
    }
};
