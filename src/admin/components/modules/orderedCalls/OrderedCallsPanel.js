import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import * as api from '../../../api/index';
import styles from './OrderedCallsPanel.module.scss';

import { COMPLETED, IN_PROGRESS, CREATED, STATUSES, STATUSES_DESCRIPTIONS } from './status';
import GroupOrderedCalls from './GroupOrderedCalls';

const INIT_STATE = {
    [CREATED]: [],
    [IN_PROGRESS]: [],
    [COMPLETED]: []
};

export default (props) => {
    const [groupsOrderedCalls, addOrderedCalls] = useState(INIT_STATE);

    const fetchOrderedCalls = () => {
        api.getOrderedCalls()
            .then((res) => {
                const groupsOrderedCalls = res.data.reduce((memo, orderedCall) => {
                    return {
                        ...memo,
                        [orderedCall.status]: memo[orderedCall.status].concat(orderedCall)
                    }
                }, INIT_STATE);
                addOrderedCalls(groupsOrderedCalls);
            })
    };

    const deleteOrderedCall = (callId) => {
        api.deleteOrderedCall(callId)
            .then(()=> {
                fetchOrderedCalls();
            });
    };

    let timer;
    useEffect(() => {
        fetchOrderedCalls();
        timer = setInterval(fetchOrderedCalls, 4000);
    }, []);

    const onDragEnd = result => {
        const { destination, source } = result;
        console.log(result);
        if (destination) {
            const sourceStatus = source.droppableId;
            const sourceIndex = source.index;
            const destinationStatus = destination.droppableId;

            const sourceItem = groupsOrderedCalls[sourceStatus][sourceIndex];
            api.changeOrderedCall(sourceItem._id, { status: destinationStatus })
                .then(fetchOrderedCalls)
        }
    };
    return (
        <div className={styles.OrderedCallsPanel}>
            <DragDropContext
                onDragEnd={onDragEnd}>
                {STATUSES
                    .map(group =>
                        <GroupOrderedCalls key={group}
                                           id={group}
                                           title={STATUSES_DESCRIPTIONS[group].title}
                                           deleteOrderedCall={deleteOrderedCall}
                                           orderedCalls={groupsOrderedCalls[group]}/>
                    )}
            </DragDropContext>
        </div>);
}