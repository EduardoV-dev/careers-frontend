import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import {
    CareersAbout,
    CareersBenefits,
    CareersHero,
    CareersOpeningsList,
} from '@/features/careers';

import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => (
    <Layout>
        <CareersHero />
        <CareersAbout />
        <CareersBenefits />
        <CareersOpeningsList />
    </Layout>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string)),
    },
});
