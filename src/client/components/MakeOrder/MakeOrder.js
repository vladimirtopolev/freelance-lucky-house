import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import styles from './MakeOrder.module.scss';

export default (props) => {
    const [isOpen, toggle] = useState(false);


    return (
        <div className={styles.MakeOrder}>
            <button className={styles.MakeOrder__button}
                    onClick={() => toggle(true)}>Заказать звонок
            </button>
            <Modal className={styles.MakeOrder__modal}
                   isOpen={isOpen}
                   toggle={() => toggle(!isOpen)}
                   centered={true}>
                TEST
            </Modal>
        </div>
    );

}