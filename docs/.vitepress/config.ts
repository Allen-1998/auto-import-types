import { defineConfig } from 'vitepress'

const META_URL = 'https://allen-1998.github.io/auto-import-types/'
const META_TITLE = 'Auto Import Types'
const META_DESCRIPTION = 'A vite plugin for auto import types.'

export default defineConfig({
  base: '/auto-import-types/',
  title: META_TITLE,
  description: META_DESCRIPTION,
  lang: 'en-US',
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:title', content: META_TITLE }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Github', link: 'https://github.com/Allen-1998/auto-import-types' },
    ],

    sidebar: [
      {
        text: 'Guide',
        children: [
          {
            text: 'Install',
            link: '/',
          },
          {
            text: 'Basic Usage',
            link: '/basic-usage',
          },
        ],
      },
    ],
  },
})
