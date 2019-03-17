import React, {useState} from 'react';
import _ from 'lodash';
import cn from 'classnames';

import commonStyles from './CommonUserView.module.scss'
import {Link} from 'react-router-dom';

function NavbarItem({item}) {
    const [isOpenSubNav, toggleSubNav] = useState(false);
    const {iconClassName, title, links, href} = item;
    const existsSubNav = _.isArray(links) && links.length > 0;

    const onClickEvent = (ev) => {
        if (existsSubNav) {
            ev.preventDefault();
            toggleSubNav(!isOpenSubNav);
        }
    };

    return (
        <li className={cn(
            commonStyles.navbar__item,
            {
                [commonStyles.navbar__item_chevron]: existsSubNav,
                [commonStyles.navbar__item_open]: isOpenSubNav
            })}>
            <Link to={href} className={commonStyles.navbar__link} onClick={onClickEvent}>
                <span className={cn(commonStyles.navbar__icon, iconClassName)}></span>
                {title}
            </Link>
            {existsSubNav && (
                <ul className={cn(
                    commonStyles.navbar,
                    commonStyles.navbar_secondary,
                    {[commonStyles.navbar_open]: isOpenSubNav})}>
                    {links.map((item, i) => <NavbarItem item={item} key={i}/>)}
                </ul>
            )}
        </li>
    );
}

export default NavbarItem;