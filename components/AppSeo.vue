<template></template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025'
  },
  description: {
    type: String,
    default: 'Emirates Fashion Week Dubai 2025: Beauty meets business. Join us on 8–11 November, 2025 for an exclusive fashion and beauty event in Dubai.'
  },
  image: {
    type: String,
    default: 'https://emiratesfashionweeks.com/seo-poster-wa.png?v=2'
  },
  keywords: {
    type: String,
    default: 'Emirates Fashion Week, Dubai Fashion, Beauty Services, Fashion Show 2025, Dubai Events'
  }
})

const route = useRoute()
const canonicalPath = route.path === '/'
  ? '/'
  : (route.path.endsWith('/') ? route.path : route.path + '/')

useHead({
  title: props.title,
  meta: [
    {
      name: 'description',
      content: props.description
    },
    {
      property: 'og:title',
      content: props.title
    },
    {
      property: 'og:description',
      content: props.description
    },
    {
      property: 'og:image',
      content: props.image
    },
    {
      name: 'keywords',
      content: props.keywords
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://emiratesfashionweeks.com${canonicalPath}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Emirates Fashion Week',
        url: 'https://emiratesfashionweeks.com',
        logo: 'https://emiratesfashionweeks.com/favicon-512x512.png',
        sameAs: [
          'https://www.instagram.com/emiratesfashionweek/',
          'https://www.youtube.com/@emiratesfashionweek'
        ],
        contactPoint: [{
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'team@emiratesfashionweeks.com',
          telephone: '+971569534134'
        }]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Emirates Fashion Week',
        url: 'https://emiratesfashionweeks.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.google.com/search?q=site:emiratesfashionweeks.com+{search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script> 