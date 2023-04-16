import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import {
    CareersAbout,
    CareersBenefits,
    CareersHero,
    CareersOpeningsList,
} from '@/features/careers';
import { fetcher } from '@/lib/fetcher';

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const Locale: string = locale as string;

    const roles = await fetcher('/career-roles', Locale);
    const careerOpenings = await fetcher('/careers', Locale);

    const data = { roles, careerOpenings };

    console.log(data);

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale as string)),
        },
    };
};
