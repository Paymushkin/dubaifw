const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            "/",
            "/home",
            "/features",
            "/gallery",
            "/request",
            "/faq",
            "/team",
            "/approved",
            "/station",
            "/visit",
            "/calendar",
            "/offer",
            "/EFW_AICONTEST",
            "/welcome",
            "/widget"
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/faq"
            },
            {
                "loc": "/team"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/offer"
            },
            {
                "loc": "/trial"
            },
            {
                "loc": "/visit"
            },
            {
                "loc": "/widget"
            },
            {
                "loc": "/gallery"
            },
            {
                "loc": "/request"
            },
            {
                "loc": "/station"
            },
            {
                "loc": "/welcome"
            },
            {
                "loc": "/approved"
            },
            {
                "loc": "/calendar"
            },
            {
                "loc": "/features"
            },
            {
                "loc": "/team_page"
            },
            {
                "loc": "/EFW_AICONTEST"
            },
            {
                "loc": "/EFW_AWARDS_2025_april"
            },
            {
                "loc": "/offer/tr"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/EFW_AWARDS_2025_april"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
