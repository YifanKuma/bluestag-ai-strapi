export default [
    'strapi::logger',
    'strapi::errors',

    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "default-src": ["'self'"],

                    "connect-src": [
                        "'self'",
                        "https:",
                        "http:",
                        "https://*.vercel.app",     // allow all Vercel frontends
                        "https://bluestag-ai-strapi.onrender.com"
                    ],

                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "https:",
                        "http:",
                        "https://bluestag-ai-strapi.onrender.com"
                    ],

                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "https:",
                        "http:",
                        "https://bluestag-ai-strapi.onrender.com"
                    ],

                    upgradeInsecureRequests: null,
                },
            },
        },
    },

    {
        name: 'strapi::cors',
        config: {
            headers: '*',
            origin: [
                "http://localhost:3000",
                "https://*.vercel.app",                      // allow all Vercel deploys
                "https://bluestag-ai-strapi.onrender.com",  // backend
            ],
        },
    },

    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
