module.exports = {
  title: "Material-React-Toastify",
  tagline: "React Material-UI Snackbars Notifications made easy !",
  url: "https://shivanshBTW.github.io/",
  baseUrl: "/react-toastify/",
  favicon: "img/favicon.ico",
  organizationName: "shivanshBTW",
  projectName: "react-toastify",
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Material-React-Toastify",
      links: [
        {
          to: "https://github.com/shivanshBTW/material-react-toastify",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Fadi Khadra`,
    },
    announcementBar: {
      id: "sponsor", // Any value that will identify this message
      content: 'Hey you like my work? Consider <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/shivanshBTW">sponsoring</a> me',
    },
    algolia: {
      apiKey: "f54fc6c27b73c67cf37ad6f02753423b",
      indexName: "react-toastify",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  stylesheets: ["/ReactToastify.min.css"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/shivanshBTW/material-react-toastify-doc/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
