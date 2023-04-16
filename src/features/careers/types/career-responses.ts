import { CareerOpening, CareerRole } from './career';

export type CareerOpeningResponse = StrapiEntities.StrapiArrayResponse<CareerOpening>;
export type CareerRoleResponse = StrapiEntities.StrapiArrayResponse<CareerRole>;

export interface CareersPageDataResponse {
    roles: CareerRoleResponse;
    careerOpenings: CareerOpeningResponse;
}

export type CareerDetailsPageResponse = StrapiEntities.StrapiObjectResponse<CareerOpening> | null;
