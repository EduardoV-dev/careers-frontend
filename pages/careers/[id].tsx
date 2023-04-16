import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import { CareerDetailsPageResponse, DetailsJob, getCareerById } from '@/features/careers';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const CareerDetails: NextPage<{ career: CareerDetailsPageResponse }> = ({
    career,
}): JSX.Element => (
    <Layout>
        <DetailsJob {...{ career }} />
    </Layout>
);

export default CareerDetails;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const career = await getCareerById(Number(params?.id || 0), locale as string);

    return {
        props: {
            ...(await serverSideTranslations(locale as string)),
            career,
            revalidate: 10,
        },
    };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking', // indicates the type of fallback
});
