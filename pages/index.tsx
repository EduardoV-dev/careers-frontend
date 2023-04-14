import { DummyComponent } from '@/components/dummy-component';

import type { NextPage } from 'next';

const Home: NextPage = () => (
    <main>
        <h1>Hello world</h1>
        <DummyComponent />
    </main>
);

export default Home;
