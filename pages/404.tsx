import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import { PageNotFound404 } from '@/features/misc';

import type { GetStaticProps, NextPage } from 'next';

const PageNotFound: NextPage = (): JSX.Element => {
    const { t } = useTranslation('not-found');

    return (
        <Layout
            seo={{ title: t('content.title') as string, description: t('seo.subtitle') as string }}
        >
            <PageNotFound404 />
        </Layout>
    );
};

export default PageNotFound;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string)),
    },
});
