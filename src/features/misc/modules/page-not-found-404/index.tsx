import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import notFoundLottie from '@/assets/lotties/not-found.json';
import { Button } from '@/components/button';
import { Feedback } from '@/components/feedback';

export const PageNotFound404 = (): JSX.Element => {
    const { t } = useTranslation('not-found');
    const router = useRouter();

    return (
        <Feedback
            lottie={notFoundLottie}
            subtitle={t('content.subtitle')}
            title={t('content.title')}
        >
            <Link href="/" locale={router.locale}>
                <Button color="reddish">{t('content.link')}</Button>
            </Link>
        </Feedback>
    );
};
