import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';

import type { GetStaticProps, NextPage } from 'next';

const ServerError500 = dynamic(() =>
    import('@/features/misc').then((modules) => modules.ServerError500),
);

const ServerError: NextPage = (): JSX.Element => {
    const { t } = useTranslation('server-error');

    return (
        <Layout
            seo={{
                title: t('content.title') as string,
                description: t('content.subtitle') as string,
            }}
        >
            <ServerError500 />
        </Layout>
    );
};

export default ServerError;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string, ['common', 'server-error'])),
    },
});
