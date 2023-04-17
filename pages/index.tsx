import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import {
    CareersAbout,
    CareersBenefits,
    CareersHero,
    CareersOpeningsList,
    CareersPageDataResponse,
    getCareersPageData,
} from '@/features/careers';

import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage<{ data: CareersPageDataResponse }> = ({ data }) => {
    const { t } = useTranslation('careers');

    return (
        <Layout
            seo={{
                title: t('seo-title') as string,
                description: t('seo-description') as string,
            }}
        >
            <CareersHero />
            <CareersAbout />
            <CareersBenefits />
            <CareersOpeningsList {...data} />
        </Layout>
    );
};
export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const data = await getCareersPageData(locale as string);

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale as string)),
            revalidate: 10,
        },
    };
};
