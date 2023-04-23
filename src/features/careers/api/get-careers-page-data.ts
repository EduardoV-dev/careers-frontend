import { fetcher } from '@/lib/fetcher';

import {
    CareerCountryResponse,
    CareerOpeningResponse,
    CareerRoleResponse,
    CareersPageDataResponse,
} from '../types/career-responses';

import { getAllCareerOpenings } from './get-all-career-openings';

export const getCareersPageData = async (locale: string): Promise<CareersPageDataResponse> => {
    const [roles, countries, careerOpenings] = await Promise.all<
        [
            Promise<CareerRoleResponse>,
            Promise<CareerCountryResponse>,
            Promise<CareerOpeningResponse>,
        ]
    >([
        fetcher({ url: '/career-roles', locale }),
        fetcher({ url: '/career-countries', locale }),
        getAllCareerOpenings(locale),
    ]);

    return { careerOpenings, countries, roles };
};
