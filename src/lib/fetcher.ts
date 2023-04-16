const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export const fetcher = async (url: string, locale: string, options?: RequestInit): Promise<any> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const query = `${BASE_URL}${url}?locale=${locale}&populate=*`;

    const response = await fetch(query, {
        headers,
        ...options,
    });

    if (response.status === 404) throw new Error('Resource not found');

    return response.json();
};
