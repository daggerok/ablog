const { spawnSync } = require('child_process');
const moment = require('moment');
const path = require('path');
const fs = require('fs');

function getGitLastUpdated(filePath) {
  const globbyFilter = spawnSync(
    'git',
    ['log', '-1', '--format=%at', path.basename(filePath)],
    { cwd: path.dirname(filePath) }
  );
  const readable = globbyFilter.stdout;
  const string = readable.toString('utf-8');
  const number = parseInt(string);
  const timestamp = number * 1000
  const date = new Date(timestamp);
  console.log('date', date);
  return date;
}

function getFsLastUpdated(filePath) {
  const stats = fs.statSync(filePath);
  const mtime = stats.mtime;
  console.log('mtime', mtime);
  return mtime;
}

function getLastUpdated(filePath) {
  if (!filePath || !fs.existsSync(filePath))
    /*throw `file ${filePath} doesn't exists`*/ return;
  try {
    return getGitLastUpdated(filePath);
  }
  catch (e) {
    return getFsLastUpdated(filePath);
  }
}

function dateToString(lastUpdated) {
  const res = moment(lastUpdated).locale('ru-UA')
                                 .format();
  console.log('lastUpdated', lastUpdated, 'res', res);
  return res;
}

const base = process.env.BASE || '/';

module.exports = {
  extendPageData($page) {
    const {
      _filePath,           // file's absolute path
      _computed,           // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content,            // file's raw content string
      _strippedContent,    // file's content string without frontmatter
      key,                 // page's unique hash key
      frontmatter,         // page's frontmatter object
      regularPath,         // current page's default link (follow the file hierarchy)
      path,                // current page's real link (use regularPath when permalink does not exist)
    } = $page;
    if ($page.frontmatter.date) return;
    const lastUpdated = getLastUpdated(_filePath);
    $page.frontmatter.date = dateToString(lastUpdated);
  },
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
        itemPermalink: '/articles/:year/:month/:day/:slug',
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
