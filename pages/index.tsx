import { Layout } from '@/components/layout';
import {
    CareersAbout,
    CareersBenefits,
    CareersHero,
    CareersOpeningsList,
} from '@/features/careers';

import type { NextPage } from 'next';

const Home: NextPage = () => (
    <Layout>
        <CareersHero />
        <CareersAbout />
        <CareersBenefits />
        <CareersOpeningsList />
    </Layout>
);

export default Home;
