import { fetcher } from '@/lib/fetcher';

import { CareerOpeningResponse } from '../types/career-responses';

/**
 * Fetches all the career openings with the desired locale, if the locale is not passed as an argument,
 * `locale=all` will be used, this means that will fetch all the entries for all the supported locales
 * within the application
 *
 * @param locale Code for the internationalization of the career openings
 * @return Career openings based on locale
 */
export const getAllCareerOpenings = (locale?: string): Promise<CareerOpeningResponse> =>
    fetcher({ url: '/careers', locale });
