const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export const fetcher = async (url: string, locale: string, options?: RequestInit): Promise<any> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const query = `${BASE_URL}${url}?locale=${locale}`;

    const response = await fetch(query, {
        headers,
        ...options,
    });

    return response.json();
};
