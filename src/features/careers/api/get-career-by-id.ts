import { fetcher } from '@/lib/fetcher';

import { CareerDetailsPageResponse } from '../types/career-responses';

export const getCareerById = async (
    id: number,
    locale: string,
): Promise<CareerDetailsPageResponse> => {
    try {
        const career = await fetcher(`/careers/${id}`, locale);
        return career;
    } catch (error) {
        return null;
    }
};
