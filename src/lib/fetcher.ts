const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

const HEADERS = {
    'Content-Type': 'application/json',
};

export const fetcher = async (url: string, locale: string, options?: RequestInit): Promise<any> => {
    const query = `${BASE_URL}${url}?locale=${locale}&populate=*`;

    const response = await fetch(query, {
        headers: HEADERS,
        ...options,
    });

    if (response.status === 404) throw new Error('Resource not found');

    return response.json();
};

export const poster = async (url: string, data: any): Promise<any> => {
    const query = BASE_URL + url;
    const response = await fetch(query, {
        body: JSON.stringify(data),
        headers: HEADERS,
        method: 'POST',
    });

    return response.json();
};
