import { STRAPI_BASE_URL } from '@/config/env';

const HEADERS = {
    'Content-Type': 'application/json',
};

interface FetcherParams {
    locale?: string;
    options?: RequestInit;
    url: string;
}

/**
 * This function is a custom fetcher that extends capabilities of traditional `fetch` api,
 * this fetch implements internationalization and populates all of the relations within an
 * entity in strapi server (?populate=*). If locale is undefined, will fetch resources from
 * all supported locales withing strapi server.
 *
 * @param config Configuration object for fetcher
 * @param config.locale Current locale to fetch data
 * @param config.options `Fetch` object options
 * @param config.url Url from where data will be fetched
 *
 * @throws Resource not found error (404)
 * @returns fetched data
 */
export const fetcher = async ({ locale, options, url }: FetcherParams): Promise<any> => {
    const localeQueryString: string = `locale=${locale ?? 'all'}`;
    const urlToFetchFrom: string = `${STRAPI_BASE_URL}${url}?${localeQueryString}&populate=*`;
    const response: Response = await fetch(urlToFetchFrom, {
        headers: HEADERS,
        ...options,
    });

    if (response.status === 404) throw new Error('404');

    return response.json();
};

/**
 * This function implements fetch to POST any data through an API endpoint
 *
 * @param url URL where the data will be posted to
 * @param data any Data that will be posted
 * @return Response object
 */
export const poster = async (url: string, data: any): Promise<any> => {
    const urlToPushTo: string = STRAPI_BASE_URL + url;
    const response: Response = await fetch(urlToPushTo, {
        body: JSON.stringify(data),
        headers: HEADERS,
        method: 'POST',
    });

    return response.json();
};
