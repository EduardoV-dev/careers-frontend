import { fetcher } from '@/lib/fetcher';

import {
    CareerOpeningResponse,
    CareerRoleResponse,
    CareersPageDataResponse,
} from '../types/career';

export const getCareersPageData = async (locale: string): Promise<CareersPageDataResponse> => {
    const [roles, careerOpenings] = await Promise.all<
        [Promise<CareerRoleResponse>, Promise<CareerOpeningResponse>]
    >([fetcher('/career-roles', locale), fetcher('/careers', locale)]);

    return { roles, careerOpenings };
};
