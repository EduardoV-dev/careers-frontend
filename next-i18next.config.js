const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        // When deployed, vercel has issues in some routes to find the locales, this
        // is fixed by using the next code line:
        ...(isProduction && { localePath: path.resolve('./public/locales') }),
    },
};
