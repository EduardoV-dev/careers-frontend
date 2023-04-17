import { fetcher } from '@/lib/fetcher';

import {
    CareerCountryResponse,
    CareerOpeningResponse,
    CareerRoleResponse,
    CareersPageDataResponse,
} from '../types/career-responses';

export const getCareersPageData = async (locale: string): Promise<CareersPageDataResponse> => {
    const [roles, countries, careerOpenings] = await Promise.all<
        [
            Promise<CareerRoleResponse>,
            Promise<CareerCountryResponse>,
            Promise<CareerOpeningResponse>,
        ]
    >([
        fetcher('/career-roles', locale),
        fetcher('/career-countries', locale),
        fetcher('/careers', locale),
    ]);

    return { careerOpenings, countries, roles };
};
