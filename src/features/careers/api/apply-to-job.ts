import { poster } from '@/lib/fetcher';

import { JobApplication } from '../types/application-form';

export const applyToJob = (application: JobApplication): Promise<{ message: string }> =>
    poster('/career-application', application);
