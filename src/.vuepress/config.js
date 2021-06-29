const base = process.env.BASE || '/';

module.exports = {
  base,
  title: 'Maksim Kostromin',
  description: 'I\'m doing software engineering, love and peace (;',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/plugin-blog', {
      directories: [{
        id: 'article',
        dirname: 'articles',
        itemPermalink: '/articles/:slug',
        pagination: {
          lengthPerPage: 2,
        },
      }],
      sitemap: {
        hostname: base === '/'
          ? 'http://localhost:8080'
          : 'https://daggerok.github.io/ablog',
      },
    }],
  ],
  themeConfig: {
    lastUpdated: false, // 'Last Updated',
    author: 'Maksim Kostromin',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
    ],
  },
};
