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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
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
        id: 'syllabus',
        path: 'content/syllabus',
        routeBasePath: 'syllabus',
        editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./content/syllabus/sidebarsSyllabus.js'),
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      ({
        id: 'labs',
        path: 'content/coursework',
        routeBasePath: 'coursework',
        editUrl: 'https://github.com/IT4063C/IT4063C.github.io/tree/main/',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./content/coursework/sidebarsCoursework.js'),
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
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#880000',
      //   textColor: '#ffffff',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'IT3049C - Gilany',
        logo: {
          alt: 'My Site Logo',
          src: 'img/javascript.svg',
        }, 
        items: [
          {
            to: '/syllabus/info',
            label: 'Syllabus',
          },
          {
            to: '/coursework',
            label: 'Coursework',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/docs/course-notes', 
            label: 'Course Notes', 
            position: 'left'
          },
          {
            href: 'https://ygilany-solution-access.herokuapp.com',
            label: 'Solutions Access',
            position: 'right',
          },
          {
            href: 'https://it3049c.github.io/students/',
            label: 'Students',
            position: 'right',
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
                label: 'Coursework',
                to: '/coursework',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'MS Teams',
                href: 'https://teams.microsoft.com/l/channel/19%3a30e5da231a654578a9f04859d49dc410%40thread.tacv2/%25F0%259F%2586%2598%2520Help%2520-%2520Ask%2520Questions?groupId=24ca8848-d758-42dc-9a5f-85467f5ded68&tenantId=f5222e6c-5fc6-48eb-8f03-73db18203b63',
              },
              {
                label: '⏰ Scheduler',
                href: 'https://outlook.office365.com/owa/calendar/OfficeHours@mailuc.onmicrosoft.com/bookings/s/EjGKKRXxgE6Ppb4z3AH9lg2',
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
                label: 'Solutions Access',
                href: 'https://ygilany-solution-access.herokuapp.com',
              },
              {
                label: 'Classwork Repo',
                href: 'https://github.com/Ygilany/spring22-classwork',
              },
              {
                label: 'GitHub Organization',
                href: 'https://github.com/IT3049C/',
              },
              {
                label: 'GitHub Assignment',
                href: 'https://github.com/IT3049C-Students',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yahya Gilany. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,


};

module.exports = config;
