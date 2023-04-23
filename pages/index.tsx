import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import { CareersPageDataResponse, getCareersPageData } from '@/features/careers';

import type { GetStaticProps, NextPage } from 'next';

const CareersHero = dynamic(() =>
    import('@/features/careers').then((modules) => modules.CareersHero),
);
const CareersAbout = dynamic(() =>
    import('@/features/careers').then((modules) => modules.CareersAbout),
);
const CareersBenefits = dynamic(() =>
    import('@/features/careers').then((modules) => modules.CareersBenefits),
);
const CareersOpeningsList = dynamic(() =>
    import('@/features/careers').then((modules) => modules.CareersOpeningsList),
);

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
            ...(await serverSideTranslations(locale as string, ['common', 'careers'])),
        },
        revalidate: 10,
    };
};
