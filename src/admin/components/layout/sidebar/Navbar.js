import React from 'react';

import styles from './Navbar.module.scss';
import commonStyles from './CommonUserView.module.scss'
import NavbarItem from './NavbarItem';
import {ADMIN_URL, ADMIN_TABLE_MODULE_URL} from '../../../constants';

const links = [
    {
        iconClassName: 'fas fa-chart-pie link__icon',
        title: 'Аналитика',
        href: '/admin/analitics'
    },
    {
        iconClassName: 'fas fa-info-circle link__icon',
        title: 'Общая информация',
        href: `/${ADMIN_URL}/properties`
    },
    {
        iconClassName: 'fas fa-phone link__icon',
        title: 'Заказанные звонки',
        href: `/${ADMIN_URL}/orderedCalls`
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Таблицы',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Реализованные проекты',
                href: `/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/projects`
            },
            {
                iconClassName: 'far fa-comment-lines link__icon',
                title: 'Отзывы',
                href: `/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/feedbacks`
            }
        ]
    }
];

export default () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__title}>Основное меню</div>
            <div className={styles.MainNavbar__menu}>
                <ul className={commonStyles.navbar}>
                    {links.map((item, i) => {
                        return <NavbarItem item={item} key={i}/>
                    })}
                </ul>
            </div>
        </div>
    );
};