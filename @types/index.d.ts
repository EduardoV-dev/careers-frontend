declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        NEXT_PUBLIC_STRAPI_BASE_URL: string;
        NEXT_PUBLIC_SEO_BANNER: string;
        NEXT_PUBLIC_SEO_TITLE: string;
        NEXT_PUBLIC_SEO_DESCRIPTION: string;
        NEXT_PUBLIC_SEO_DOMAIN: string;
    }
}

declare namespace StrapiEntities {
    export interface StrapiDataObject<T> {
        data: BaseEntity<T>;
    }

    interface StrapiDataArray<T> {
        data: BaseEntity<T>[];
    }

    export interface BaseEntity<T> {
        id: number;
        attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            locale: string;
            localizations: StrapiDataArray<T>[];
        } & T;
    }

    interface EntityMeta {
        meta: {
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
    }

    export interface StrapiArrayResponse<K> extends EntityMeta {
        data: K[];
    }

    export interface StrapiObjectResponse<K> {
        data: K;
        meta: {};
    }
}
