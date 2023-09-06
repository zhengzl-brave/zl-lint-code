import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  // default language use '/' as the path
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'zl-lint-code',
      description: '前端编码规范工程化',
    },
  },
  base: '/zl-lint-code/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'zl-eslint-config', link: '/npm/eslint.md' },
          { text: 'zl-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'zl-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'zl-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'zl-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'zl-code-lint', link: '/cli/zl-code-lint.md' }],
      },
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: 'HTML 编码规范',
            path: '/coding/html.md',
          },
          {
            title: 'CSS 编码规范',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript 编码规范',
            path: '/coding/javascript.md',
          },
          {
            title: 'Node 编码规范',
            path: '/coding/node.md',
          },
          {
            title: 'Typescript 编码规范',
            path: '/coding/typescript.md',
          },
        ],
      },
      {
        title: '工程规范',
        children: [
          {
            title: 'Git 规范',
            path: '/engineering/git.md',
          },
          {
            title: '文档规范',
            path: '/engineering/doc.md',
          },
          {
            title: 'CHANGELOG 规范',
            path: '/engineering/changelog.md',
          },
        ],
      },
      {
        title: 'NPM包',
        children: [
          { title: 'zl-eslint-config', path: '/npm/eslint.md' },
          { title: 'zl-stylelint-config', path: '/npm/stylelint.md' },
          { title: 'zl-commitlint-config', path: '/npm/commitlint.md' },
          { title: 'zl-markdownlint-config', path: '/npm/markdownlint.md' },
          { title: 'zl-eslint-plugin', path: '/npm/eslint-plugin.md' },
        ],
      },
      {
        title: '脚手架',
        children: [{ title: 'zl-code-lint', path: '/cli/zl-code-lint.md' }],
      },
    ],
    // logo default find the folter with public so you not need to set
    logo: '/img/logo.jpg',
    repo: 'zhengzl-brave/zl-lint-code',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'zhengzl | <a href="https://github.com/zhengzl-brave/zl-lint-code" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: 'zhengzl',
        link: 'https://github.com/zhengzl-brave/zl-lint-code',
      },
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      // this plugin is used to copy code
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      // this plugin is used to zoom image
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  // if this file change then the project will be rebuild
  extraWatchFiles: ['.vuepress/config.ts'],
});
