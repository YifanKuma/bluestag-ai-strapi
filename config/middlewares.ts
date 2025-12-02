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
                        "https://bluestag-frontend.vercel.app"
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
            enabled: true,
            headers: '*',
            origin: [
                "http://localhost:3000",
                "https://bluestag-frontend.vercel.app",
                "https://bluestag-ai-strapi.onrender.com"
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
