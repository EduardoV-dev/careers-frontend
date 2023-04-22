import { useTranslation } from 'next-i18next';

import serverErrorLottie from '@/assets/lotties/server-error.json';
import { Feedback } from '@/components/feedback';

export const ServerError500 = (): JSX.Element => {
    const { t } = useTranslation('server-error');

    return (
        <Feedback
            lottie={serverErrorLottie}
            subtitle={t('content.subtitle')}
            title={t('content.title')}
        />
    );
};
