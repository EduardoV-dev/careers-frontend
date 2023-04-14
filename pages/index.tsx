import { Layout } from '@/components/layout';
import { CareersHero } from '@/features/careers';

import type { NextPage } from 'next';

const Home: NextPage = () => (
    <Layout>
        <CareersHero />
    </Layout>
);

export default Home;
