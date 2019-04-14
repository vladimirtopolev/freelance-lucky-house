import styles from './Spinner.module.scss';
import React from "react";

export default () => {
    return (
        <div className={styles.Spinner}>
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
