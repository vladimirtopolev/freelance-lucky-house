import React, { useState, useEffect } from 'react';
import * as api from '../../../api'

export default (props) => {
    const [orderedCalls, addOrderedCalls] = useState([]);
    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            api.getOrderedCalls()
                .then((res) => {
                    addOrderedCalls(res.data);
                })
        }, 4000);
    }, []);
    console.log(orderedCalls);
    return 'TEST';
}