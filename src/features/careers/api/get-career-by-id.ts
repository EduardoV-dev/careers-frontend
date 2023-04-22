import { fetcher } from '@/lib/fetcher';

import { CareerDetailsPageResponse } from '../types/career-responses';

export const getCareerById = async (
    id: number,
    locale: string,
): Promise<CareerDetailsPageResponse> => {
    try {
        return await fetcher({ url: `/careers/${id}`, locale });
    } catch (error) {
        return null;
    }
};
