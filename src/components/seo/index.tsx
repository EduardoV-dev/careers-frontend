import Head from 'next/head';
import React from 'react';

import { SEO_BANNER, SEO_DESCRIPTION, SEO_DOMAIN, SEO_TITLE } from '@/config/env';

export interface Props {
    /** Banner should be a remote source (http) */
    banner?: string;
    /** Description for the visited page */
    description?: string;
    /** Title for the visited page */
    title?: string;
}

/**
 * This component provides SEO support, will inject meta tags into each page
 * where this component is used. The rest of SEO tags are in _app.tsx file.
 * It's recommended to implement this component within to a layout component,
 * so that title is applied correctly, if title is not applied correctly, attemp
 * using the mentioned approach.
 *.
 * @example
 * <SEO
 *    banner="https://domain.com/banner/nexos.png"
 *    description="Description for SEO"
 *    title="Title for SEO"
 * />
 */
export const SEO = ({ banner, description, title }: Props): JSX.Element => {
    const seo: Props = {
        banner: banner || SEO_DOMAIN + SEO_BANNER,
        description: description || SEO_DESCRIPTION,
        title: `${title || SEO_DESCRIPTION} | ${SEO_TITLE}`,
    };

    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:image" content={seo.banner} />
            <meta property="og:image:alt" content={seo.title} />

            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
        </Head>
    );
};
