import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import CloseIcon from '@/assets/svg/menu-close.svg';
import HamburgerIcon from '@/assets/svg/menu-hamburger.svg';
import { LanguageSelector } from '@/features/language-selector';

import { Backdrop } from '../backdrop';

import styles from './index.module.scss';

export const Navbar = (): JSX.Element => {
    const { t } = useTranslation('common');
    const [isNavigationMenuDisplayed, setIsNavigationMenuDisplayed] =
        React.useState<boolean>(false);

    const hideNavigationMenu = (): void => setIsNavigationMenuDisplayed(false);
    const displayNavigationMenu = (): void => setIsNavigationMenuDisplayed(true);

    const handleMenuVisibility = (): void =>
        isNavigationMenuDisplayed ? hideNavigationMenu() : displayNavigationMenu();

    /* React Render */

    const NAVIGATION_LINKS: string[] = [
        t('navbar-home'),
        t('navbar-about-us'),
        t('navbar-our-business'),
        t('navbar-our-projects'),
        t('navbar-contact'),
    ];

    const NavLinks: JSX.Element[] = NAVIGATION_LINKS.map((name) => (
        <Link href="/" key={name}>
            {name}
        </Link>
    ));

    const navigationMenuContainerClasses: string = cn(
        'modal-transition',
        styles['content__navigation-menu-container'],
        {
            displayed: isNavigationMenuDisplayed,
        },
    );

    return (
        <>
            <section className={navigationMenuContainerClasses}>
                <nav className={styles['content__navigation-menu']}>{NavLinks}</nav>

                <LanguageSelector />
            </section>

            <Backdrop close={hideNavigationMenu} isOpen={isNavigationMenuDisplayed} />

            <button
                className={styles['content__hamburger-button']}
                onClick={handleMenuVisibility}
                type="button"
            >
                {isNavigationMenuDisplayed ? <CloseIcon /> : <HamburgerIcon />}
            </button>
        </>
    );
};
