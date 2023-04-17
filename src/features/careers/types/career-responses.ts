import { CareerCountry, CareerOpening, CareerRole } from './career';

export type CareerCountryResponse = StrapiEntities.StrapiArrayResponse<CareerCountry>;
export type CareerOpeningResponse = StrapiEntities.StrapiArrayResponse<CareerOpening>;
export type CareerRoleResponse = StrapiEntities.StrapiArrayResponse<CareerRole>;

export interface CareersPageDataResponse {
    careerOpenings: CareerOpeningResponse;
    countries: CareerCountryResponse;
    roles: CareerRoleResponse;
}

export type CareerDetailsPageResponse = StrapiEntities.StrapiObjectResponse<CareerOpening> | null;
