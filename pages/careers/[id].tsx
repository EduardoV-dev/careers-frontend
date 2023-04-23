import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import {
    CareerDetailsPageResponse,
    CareerOpeningResponse,
    getAllCareerOpenings,
    getCareerById,
} from '@/features/careers';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const DetailsJob = dynamic(() =>
    import('@/features/careers').then((modules) => modules.DetailsJob),
);

const CareerDetails: NextPage<{ career: CareerDetailsPageResponse }> = ({
    career,
}): JSX.Element => {
    const { t } = useTranslation('career-details');

    return (
        <Layout
            seo={{
                title: career?.data.attributes.position_name || (t('not-found-title') as string),
                description:
                    career?.data.attributes.position_name || (t('not-found-subtitle') as string),
            }}
        >
            <DetailsJob {...{ career }} />
        </Layout>
    );
};
export default CareerDetails;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const career = await getCareerById(Number(params?.id || 0), locale as string);

    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'career-details'])),
            career,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
    const careers: CareerOpeningResponse = await getAllCareerOpenings();
    const pathsForStaticGeneration = careers.data.map((career) => ({
        params: { id: career.id.toString() },
    }));

    return {
        paths: pathsForStaticGeneration, // indicates that no page needs be created at build time
        fallback: 'blocking', // indicates the type of fallback
    };
};
