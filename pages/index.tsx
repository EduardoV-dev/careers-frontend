import { Layout } from '@/components/layout';
import { CareersAbout, CareersBenefits, CareersHero } from '@/features/careers';

import type { NextPage } from 'next';

const Home: NextPage = () => (
    <Layout>
        <CareersHero />
        <CareersAbout />
        <CareersBenefits />
    </Layout>
);

export default Home;
