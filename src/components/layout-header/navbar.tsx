import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import ChevronDownIcon from '@/assets/svg/chevron-down.svg';
import GlobeIcon from '@/assets/svg/globe.svg';
import CloseIcon from '@/assets/svg/menu-close.svg';
import HamburgerIcon from '@/assets/svg/menu-hamburger.svg';

import styles from './index.module.scss';

const NAVIGATION_LINKS: string[] = [
    'Home',
    'About us',
    'Our business',
    'Projects',
    'Services',
    'Contact',
];

export const Navbar = (): JSX.Element => {
    const [isNavigationMenuDisplayed, setIsNavigationMenuDisplayed] =
        React.useState<boolean>(false);

    const hideNavigationMenu = (): void => setIsNavigationMenuDisplayed(false);
    const displayNavigationMenu = (): void =>
        setIsNavigationMenuDisplayed(true);

    const handleMenuVisibility = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ): void => {
        event.stopPropagation();

        if (isNavigationMenuDisplayed) hideNavigationMenu();
        else displayNavigationMenu();
    };

    React.useEffect(() => {
        if (isNavigationMenuDisplayed)
            document.addEventListener('click', hideNavigationMenu);
        else document.removeEventListener('click', hideNavigationMenu);
    }, [isNavigationMenuDisplayed]);

    /* React Render */

    const NavLinks: JSX.Element[] = NAVIGATION_LINKS.map((name) => (
        <Link href="/" key={name}>
            {name}
        </Link>
    ));

    const navigationMenuContainerClasses: string = cn(
        styles['content__navigation-menu-container'],
        {
            [styles.displayed]: isNavigationMenuDisplayed,
        },
    );

    return (
        <>
            <section className={navigationMenuContainerClasses}>
                <nav className={styles['content__navigation-menu']}>
                    {NavLinks}
                </nav>

                <div className={styles['content__language-selector']}>
                    <GlobeIcon />
                    <span>English</span>
                    <ChevronDownIcon />
                </div>
            </section>

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
