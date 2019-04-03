import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './GroupOrderedCalls.module.scss';
import OrderedCallItem from './OrderedCallItem';

export default ({ id, title, orderedCalls, deleteOrderedCall }) => {
    return (
        <div className={styles.GroupOrderedCalls}>
            <div className={styles.GroupOrderedCalls__title}>
                {title}
            </div>
            <Droppable droppableId={id}>
                {(provided) => (
                    <div className={styles.GroupOrderedCalls__content}
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                    >
                        {orderedCalls.map((call,i ) =>
                            <OrderedCallItem key={call._id}
                                             index={i}
                                             deleteOrderedCall={deleteOrderedCall}
                                             item={call}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}