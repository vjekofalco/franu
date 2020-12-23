const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['de', 'en', 'hr'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'de',
        localeDetection: false
    }
}

module.exports = withPlugins([
        [optimizedImages, {
            optimizeImagesInDev: true
        }],
    ],
    nextConfig)
