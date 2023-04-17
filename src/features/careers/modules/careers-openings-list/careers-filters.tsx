import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { FormControl } from '@/components/form-control';

import { CareerCountryResponse, CareerRoleResponse } from '../../types/career-responses';

import styles from './index.module.scss';

interface FilterItem {
    label: string;
    value: string;
}

interface Props {
    countries: CareerCountryResponse;
    roles: CareerRoleResponse;
}

export const CareersFilters = ({ countries, roles }: Props): JSX.Element => {
    const { t } = useTranslation('careers');
    const router = useRouter();

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        // If role has changed use the new value, else keep the previous one
        const roleQueryValue: string =
            event.target.name === 'role'
                ? event.target.value
                : (router.query?.role as string) || '';

        // If country has changed use the new value, else keep the previous one
        const countryQueryValue: string =
            event.target.name === 'country'
                ? event.target.value
                : (router.query?.country as string) || '';

        const queryString: string = `?country=${countryQueryValue}&role=${roleQueryValue}#openings`;
        router.push(queryString);
    };

    /* React Render */

    const selectedRole: string = (router.query?.role as string) || '';
    const selectedCountry: string = (router.query?.country as string) || '';

    const roleBasedFilterOptions: FilterItem[] =
        roles.data?.map((role) => ({
            label: role.attributes.label,
            value: role.attributes.value,
        })) || [];

    const countryBasedFilterOptions: FilterItem[] =
        countries.data?.map((country) => ({
            label: country.attributes.label,
            value: country.attributes.country,
        })) || [];

    return (
        <nav className={styles.content__filters}>
            <FormControl label={t('openings-filter-countries-title')} id="country">
                <select
                    id="country"
                    name="country"
                    onChange={onFilterChange}
                    value={selectedCountry}
                >
                    <option value="">{t('openings-filter-countries-placeholder')}</option>

                    {countryBasedFilterOptions.map((filter) => (
                        <option key={filter.label + filter.value} value={filter.value}>
                            {filter.label}
                        </option>
                    ))}
                </select>
            </FormControl>

            <FormControl label={t('openings-filter-roles-title')} id="role">
                <select id="role" name="role" onChange={onFilterChange} value={selectedRole}>
                    <option value="">{t('openings-filter-roles-placeholder')}</option>

                    {roleBasedFilterOptions.map((filter) => (
                        <option key={filter.label + filter.value} value={filter.value}>
                            {filter.label}
                        </option>
                    ))}
                </select>
            </FormControl>
        </nav>
    );
};
