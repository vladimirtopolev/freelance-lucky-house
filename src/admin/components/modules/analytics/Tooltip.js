import React, {useState, useEffect, Fragment} from 'react';
import {Tooltip} from 'reactstrap';
import uniqid from 'uniqid';

export default ({linkContent, className, tooltipContent}) => {
    const [isOpen, toggle] = useState(false);
    const [tooltipId] = useState(`tooltip${uniqid()}`)

    return (
        <Fragment>
            <a href="#" id={tooltipId} className={className}>
                {linkContent()}
            </a>
            <Tooltip placement="right" isOpen={isOpen} target={tooltipId} toggle={()=> toggle(!isOpen)}>
                {tooltipContent()}
            </Tooltip>
        </Fragment>
    );
}