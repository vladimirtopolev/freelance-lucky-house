import React from 'react';
import moment from 'moment';
import { Draggable } from 'react-beautiful-dnd';

import { CREATED, IN_PROGRESS, COMPLETED } from './status';

import styles from './OrderedCallItem.module.scss';

export default ({ item, index }) => {
    return (
        <Draggable draggableId={item._id} index={index}>
            {(provided) => (
                <div className={styles.OrderedCallItem}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}>
                    <div className={styles.OrderedCallItem__container}>
                        <a href="#" className={styles.OrderedCallItem__deleteBtn}>
                            <i className="fas fa-times"></i>
                        </a>
                        <div className={styles.OrderedCallItem__field}>
                            <div className={styles.OrderedCallItem__fieldName}>
                                Имя
                            </div>
                            <div className={styles.OrderedCallItem__fieldValue}>
                                {item.firstName}
                            </div>
                        </div>

                        <div className={styles.OrderedCallItem__field}>
                            <div className={styles.OrderedCallItem__fieldName}>
                                Телефон
                            </div>
                            <div className={styles.OrderedCallItem__fieldValue}>
                                {item.phone}
                            </div>
                        </div>

                        <div className={styles.OrderedCallItem__field}>
                            <div className={styles.OrderedCallItem__fieldName}>
                                Email
                            </div>
                            <div className={styles.OrderedCallItem__fieldValue}>
                                {item.email}
                            </div>
                        </div>
                        <div className={styles.OrderedCallItem__field}>
                            <div className={styles.OrderedCallItem__fieldName}>
                                Комментарий
                            </div>
                            <div className={styles.OrderedCallItem__fieldValue}>
                                {item.email}
                            </div>
                        </div>
                    </div>
                    <div className={styles.OrderedCallItem__bottom}>
                        <div className={styles.OrderedCallItem__dateContainer}>
                            <div className={styles.OrderedCallItem__dateItem}>
                                <div className={styles.OrderedCallItem__dateLabel}>Cоздан:</div>
                                <div className={styles.OrderedCallItem__date}>
                                    {moment(item.statusDates[CREATED]).format('DD/MM/YYYY HH:mm')}
                                </div>
                            </div>
                            <div className={styles.OrderedCallItem__dateItem}>
                                <div className={styles.OrderedCallItem__dateLabel}>Принят в работу:</div>
                                <div className={styles.OrderedCallItem__date}>
                                    {item.status === IN_PROGRESS ||  item.status === COMPLETED?
                                        moment(item.statusDates[IN_PROGRESS]).format('DD/MM/YYYY HH:mm')
                                        : '-'}
                                </div>
                            </div>
                            <div className={styles.OrderedCallItem__dateItem}>
                                <div className={styles.OrderedCallItem__dateLabel}>Выполнен:</div>
                                <div className={styles.OrderedCallItem__date}>
                                    {item.status === COMPLETED
                                        ? moment(item.statusDates[CREATED]).format('DD/MM/YYYY HH:mm')
                                        : '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );

}