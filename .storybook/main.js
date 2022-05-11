const path = require("path");
const { mergeConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const checker = require("vite-plugin-checker");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.tsx?$/], //This is default
          include: [path.resolve(__dirname, "../src")] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    }
  ],
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      esbuild: {
        jsxFactory: "jsx",
        jsxInject: `import { jsx } from '@emotion/react'`
      },
      plugins: [react(), checker({ typescript: true })]
    });
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    reactDocgen: "react-docgen"
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: prop =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    // }
  }
};
