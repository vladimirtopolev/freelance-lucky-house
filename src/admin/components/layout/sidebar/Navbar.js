import React from 'react';

import styles from './Navbar.module.scss';
import commonStyles from './CommonUserView.module.scss'
import NavbarItem from './NavbarItem';

const links = [
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Администрирование',
        href: '/admin'
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Общая информация',
        href: '/admin/navigation'
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Таблицы',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Лучшие работы',
                href: '/admin/table/bestwork'
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Партнеры',
                href: '/admin/table/partners'
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
                        return <NavbarItem item={item} key={i} />
                    })}
                </ul>
            </div>
        </div>
    );
};