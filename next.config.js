const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const ENVIRONMENT_CONFIGS = {
    default: {
        GA_ENABLED: false,
        NODE_ENV: process.env.NODE_ENV,
        GA_ENABLE_LOG_TO_CONSOLE: false
    },
    production: {
        GA_ENABLED: true,
        GA_TRACKING_ID: 'UA-85033665-5'
    }
}

const ENVIRONMENT = process.env.NODE_ENV
const environmentConfig = (ENVIRONMENT && ENVIRONMENT_CONFIGS[ENVIRONMENT])
    ? { ...ENVIRONMENT_CONFIGS.default, ...ENVIRONMENT_CONFIGS[ENVIRONMENT] }
    : ENVIRONMENT_CONFIGS.default

const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['de', 'en', 'hr'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'de',
        localeDetection: false
    },
    publicRuntimeConfig: environmentConfig
}

module.exports = withPlugins([
        [optimizedImages, {
            optimizeImagesInDev: true
        }],
    ],
    nextConfig)
