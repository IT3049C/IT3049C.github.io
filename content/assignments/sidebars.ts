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
      type: `doc`,
      label: `Hello GitHub - Lab`,
      id: `hello-world/index`,
    },
    {
      type: `category`,
      label: `1. Online Portfolio`,
      link: {
        type: `doc`,
        id: `online-portfolio/index`,
      },
      items: [
        {
          type: `autogenerated`,
          dirName: `1.online-portfolio`,
        },
      ],
    },
    // {
    //   type: `category`,
    //   label: `Hello GitHub`,
    //   link: `hello-world/index`,
    // },
    // {type: `autogenerated`, dirName: `.`}
  ]
};

export default sidebars;
