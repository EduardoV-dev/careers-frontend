import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

import { ElementNotFound404 } from '../../components/element-not-found-404';

export const PageNotFound404 = (): JSX.Element => {
    const { t } = useTranslation('not-found');
    const router = useRouter();

    return (
        <ElementNotFound404 subtitle={t('content.subtitle')} title={t('content.title')}>
            <Link href="/" locale={router.locale}>
                <Button color="reddish">{t('content.link')}</Button>
            </Link>
        </ElementNotFound404>
    );
};
