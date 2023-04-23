# Internationalization

Internationalization is the application ability to change among many possible languages, this means that the web pages will be available in multiple languages. In this application, there are only 2 supported languages (English as default and, Spanish). 

Achieving full internationalization takes two parts, the first one is handling local internationalization within the project (by using some internationalization library like next-i18next) and, the second one is handling remote sources internationalization (Data that comes from an API), in this application, Strapi is being used as a server ( which has internationalization support). In this doc, only Next.js internationalization will be covered.

### Internationalization with Next.js

**NOTE**: In this docs, we will see how to implement internationalization support. If you are interested in internationalization setup with next-i18next, you can read the docs for this package [here](https://github.com/i18next/next-i18next).

#### Locales declaration

For implementing internationalization in Next.js, we will have to create a `public/locales` directory within the projects root, within the `public/locales` folder, you can set multiple folders that represent the supported languages for an application, these folders must be named after ISO Language Code (ISO 639-1), [here is a list of all the codes that you could use for your application](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). 

Folders should look like: 

```
public / 
  locales / 
    es /
    en /
```

Within the supported language folders (`es` and `en`), you can set JSON files where to define text for posterior internationalization implementing, all supported language folders must contain the same files to ensure that internationalization supports all of the pages and sections of the application.

[English file internationalization support](../public/locales/en/common.json)   
[Spanish file internationalization support](../public/locales/es/common.json)

Now you have declared internationalization files that contains text for sections in your application, now, how do you implement them?

#### Implementing Internationalization

To implement internationalization within Next.js, is required that you fetch the translations with any Rendering technique supported within Next.js (SSR | SSG), in this case, application is using SSG, so that is the technique that will be used for getting the correct translations based on the locale. You will have to import `next-i18next/serverSideTranslations` and extract `serverSideTranslations`. When returning props within `getStaticProps` (SSG), return response of `serverSideTranslations` within `props`.

e.g: 

```
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps, NextPage } from 'next';

const YourPage: NextPage = () => (
    <h1>My content</h1>
);

export default YourPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string, ['common', 'your-page'])),
    },
});
```

As you can see, inside `getStaticProps` you have to return serverSideTranslations response, serverSideTranslations takes to arguments, the first is the current locale of the application and the second, is an array of the locales files that will be used to handle internationalization within that page, in this case, the locales folders would be as it follows:

```
public / 
  locales / 
    es /
      common.json
      your-page.json
    en /
      common.json
      your-page.json
```

**Note**: The array of locale files to use in the page is optional, but it's a good practice since it will only return the files that you will require for that specific page, imagine having hundreds of translation files, without the locale array, all of them files would be loaded every time the page is requested, which is a unnecesary computational resources expense.

[Implementation example](../pages/index.tsx)

### Consuming Internationalization translations

To consume translations, you will require the `useTranslation` hook from `next-i18next`
package. Implement this hook anywhere inside your page.

```
import { useTranslation } from 'next-i18next';

export const YourComponentToConsumeTranslations = (): JSX.Element => {
    const { t } = useTranslation('your-page');

    return (
        <section>
           <h1>{t("page-title")}</h1>
        </section>
    );
};
```

As you can see in the upon this text, `useTranslation` needs an argument, this argument is the file name for the translation file that you will be retrieving translations from.

[Consuming translations example](../src/features/careers/modules/careers-hero/index.tsx)
