import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import { DetailsJob } from '@/features/careers';

import type { GetServerSideProps } from 'next';

const CareerDetails = (): JSX.Element => (
    <Layout>
        <DetailsJob />
    </Layout>
);

export default CareerDetails;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string)),
    },
});
