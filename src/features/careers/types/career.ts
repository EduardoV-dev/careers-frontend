interface CareerRoleAttributes {
    label: string;
    value: 'doctor' | 'call-center-agent' | 'support-role';
}

interface CareerCountryAttributes {
    country: 'nicaragua' | 'colombia' | 'usa';
    label: string;
}

interface CareerOpeningAttributes {
    position_name: string;
    description: string;
    career_country: StrapiEntities.StrapiDataObject<CareerCountryAttributes>;
    career_role: StrapiEntities.StrapiDataObject<CareerRoleAttributes>;
}

export interface CareerOpening extends StrapiEntities.BaseEntity<CareerOpeningAttributes> {}
export interface CareerRole extends StrapiEntities.BaseEntity<CareerRoleAttributes> {}
