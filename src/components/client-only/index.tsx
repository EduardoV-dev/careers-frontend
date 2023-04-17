import React from 'react';

/**
 * Custom wrapper that renders a component only in the client side, skipping server side
 *
 * @example
 * <ClientOnly>
 *    <Component />
 * </ClientOnly>
 */
export const ClientOnly = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);

        return () => setHasMounted(false);
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return hasMounted ? <>{children}</> : null;
};
