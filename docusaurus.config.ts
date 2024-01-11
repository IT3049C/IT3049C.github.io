// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IT3049C - Web Game Development',
  tagline: 'Yahya Gilany',
  url: 'https://it3049c.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'IT3049C', // Usually your GitHub org/user name.
  projectName: 'IT3049C.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'docs/ta/sidebarsTA.ts',
          // Please change this to your repo.
          path: 'docs/ta',
          routeBasePath: 'ta',
          editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
          remarkPlugins: [require('mdx-mermaid')],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      'content-docs',
      ({
        id: 'course-notes',
        path: 'content/course-notes',
        routeBasePath: 'course-notes',
        editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        editCurrentVersion: true,
        sidebarPath: 'content/course-notes/sidebars.ts',
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      ({
        id: 'assignments',
        path: 'content/assignments',
        routeBasePath: 'assignments',
        editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        editCurrentVersion: true,
        sidebarPath: 'content/assignments/sidebars.ts',
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      ({
        id: 'syllabus',
        path: 'content/syllabus',
        routeBasePath: 'syllabus',
        editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        editCurrentVersion: true,
        sidebarPath: 'content/syllabus/sidebarsSyllabus.ts',
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      ({
        id: 'other',
        path: 'content/other',
        routeBasePath: '/',
        editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        editCurrentVersion: true,
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css",
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      announcementBar: {
        id: 'welcome-bar',
        content:
          '<b>Welcome to Spring 2024! 🎉🎉🎉</b>',
        backgroundColor: '#880000',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        title: 'IT3049C - Gilany',
        logo: {
          alt: 'My Site Logo',
          src: 'img/javascript.svg',
        },
        items: [
          {
            to: '/syllabus/info',
            label: "📚 Syllabus",
          },
          {
            to: "/course-notes",
            label: "📝 Course Notes",
          },
          {
            to: "/assignments",
            label: "💯 Assignments",
          },
          {
            to: '/blog',
            label: "🌐 Blog",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site map',
            items: [
              {
                label: 'Syllabus',
                to: '/syllabus/info',
              },
              {
                label: 'assignments',
                to: '/assignments',
              },
              {
                label: "Credits",
                to: "/credits",
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'MS Teams',
                href: 'https://teams.microsoft.com/l/channel/19%3Accd1b5e4663a49f3bdb5b693d7bf27de%40thread.tacv2/%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%99%8B%E2%80%8D%E2%99%80%EF%B8%8F%20Students%20Hub?groupId=b70f39af-6f97-4973-8c01-6bef019da7eb&tenantId=f5222e6c-5fc6-48eb-8f03-73db18203b63',
              },
              {
                label: '⏰ Scheduler',
                href: 'https://outlook.office.com/bookwithme/user/51a66b9182c440388f473454d11f6654@ucmail.uc.edu?anonymous&ep=plink',
              },
              {
                label: '✉️ Email',
                href: 'mailto:yahya.gilany@uc.edu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Classwork Repo',
                href: 'https://github.com/IT3049C-Spring24/classwork',
              },
              {
                label: "GitHub Organization",
                href: "https://github.com/IT3049C/",
              },
              {
                label: 'GitHub Student Organization',
                href: 'https://github.com/IT3049C-Spring24/',
              }
            ],
          },
        ],
        copyright: `<p><span>IT3049C - Web Game Development</span> by <a href="https://yahyagilany.io/">Yahya Gilany</a> is licensed under <a style="display: inline-block;" href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="noopener">CC BY-NC-ND 4.0<img style="height: 22px!important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img style="height: 22px!important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img style="height: 22px!important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img style="height: 22px!important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" /></a></p>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,


};

module.exports = config;
