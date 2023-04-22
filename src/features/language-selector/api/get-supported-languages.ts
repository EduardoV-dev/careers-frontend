import { fetcher } from '@/lib/fetcher';

import { Language } from '../types/language';

export const getSupportedLanguages = (): Promise<Language[]> => fetcher({ url: '/i18n/locales' });
