import React, { useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import styles from './UserView.module.scss';
import commonStyles from './CommonUserView.module.scss';

import Image from '../../common/Image';
import { logout } from '../../../actions/auth/actions'

const mapStateToProps = (state) => ({
    auth: state.auth
});

const UserView = ({ auth, dispatch }) => {
    const [isOpenNavbar, toggleNavbar] = useState(false);
    const logoutUser = () => {
        dispatch(logout());
    };

    return (
        <div className={styles.UserView}>
            <div className={styles.UserView__header}>
                <div className={styles.UserView__img}>
                    <Image src={auth.logo} alt="User Photo" fallbackSrc={require('../../../../img/no-user.png')}/>
                </div>
                <div className={styles.UserView__description}>
                    <div className={styles.UserView__greeting}>
                        Добро пожаловать,
                    </div>
                    <div className={styles.UserView__name}>
                        {`${auth.firstName} ${auth.lastName}`}
                    </div>
                </div>
                <div className={styles.UserView__chevron}>
                    <i className={cn('fa', { 'fa-chevron-right': !isOpenNavbar, 'fa-chevron-down': isOpenNavbar })}
                       onClick={() => toggleNavbar(!isOpenNavbar)}>
                    </i>
                </div>
            </div>
            <div className={cn(styles.UserView__navbar, { [styles.UserView__navbar_open]: isOpenNavbar })}>
                <ul className={commonStyles.navbar}>
                    <li className={commonStyles.navbar__item}>
                        <a href="#"
                           className={commonStyles.navbar__link}
                           onClick={logoutUser}>
                            <i className={cn(commonStyles.navbar__icon, 'fas fa-sign-out-alt')}></i>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(UserView);

