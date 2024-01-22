import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars: SidebarsConfig = {
  assignments: [
    "index",
    {
      type: `category`,
      label: `1. Student Portfolio`,
      link: {
        type: `doc`,
        id: `student-portfolio/index`,
      },
      items: [
        {
          type: `autogenerated`,
          dirName: `1.student-portfolio`,
        },
      ],
    },
    {
      type: `doc`,
      label: `2. Hello GitHub - Lab`,
      id: `hello-world/index`,
    },
    {
      type: `category`,
      label: `3. JS Exercises`,
      link: {
        type: `doc`,
        id: `js-exercises/index`,
      },
      items: [
        {
          type: `autogenerated`,
          dirName: `3.js-exercises`,
        },
      ],
    },
    {
      type: `category`,
      label: `5. Rock Paper Scissors`,
      link: {
        type: `doc`,
        id: `rock-paper-scissors/index`,
      },
      items: [
        {
          type: `autogenerated`,
          dirName: `5.rock-paper-scissors`,
        },
      ],
    },
  ]
};

export default sidebars;
