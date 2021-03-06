import React from 'react';
import cn from 'classnames';

import {getPropertyValue} from '../../../utilities/properties';
import styles from './Footer.module.scss';

export default ({properties}) => {
    const phone1 = getPropertyValue(properties, 'phone1');
    const phone2 = getPropertyValue(properties, 'phone2');

    const mail = getPropertyValue(properties, 'mail');
    const copyright = getPropertyValue(properties, 'copyright');
    const linkVK = getPropertyValue(properties, 'link_vk');
    const linkFB = getPropertyValue(properties, 'link_fb');
    const linkINST = getPropertyValue(properties, 'link_instagram');
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__container}>
                <div className={styles.Footer__header}>
                    <div className={styles.Footer__logo}>
                        <img alt="logo" src={require('../../../../img/logo-footer.png')} className="logo"/>
                    </div>
                    <div className={styles.Footer__socials}>
                        <a href={linkVK} className={cn(styles.Social, styles.Social_vk)} target="_blank"></a>
                        <a href={linkFB} className={cn(styles.Social, styles.Social_fb)} target="_blank"></a>
                        <a href={linkINST} className={cn(styles.Social, styles.Social_instagram)} target="_blank"></a>
                    </div>
                    <div className={styles.Footer__contacts}>
                        <div className={styles.Footer__itemContact}>
                            <img src={require('../../../../img/mts.png')}
                                 alt="mts"
                                 className={styles.Footer__phoneOperator}/>
                            {phone1}
                        </div>
                        <div className={styles.Footer__itemContact}>
                            <img src={require('../../../../img/megaphone.png')}
                                 alt="mts"
                                 className={styles.Footer__phoneOperator}/>
                            {phone2}
                        </div>
                        <div  className={styles.Footer__itemContact}>
                            <i className={cn('fa','fa-envelope', styles.Footer__itemContactLabel)}></i>
                            {mail}
                        </div>
                    </div>
                </div>
                <div className={styles.Footer__copyright}>
                    © {copyright}
                </div>
            </div>

        </div>

    );
}
