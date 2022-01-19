const base = process.env.BASE || '/';

module.exports = {
  base,
  title: 'Maksim Kostromin',
  description: 'I\'m doing software engineering, love and peace (;',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
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
