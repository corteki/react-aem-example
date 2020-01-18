const custom = require("../webpack.config");

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: custom.resolve,
      module: {
        ...config.module,
        rules: custom.module.rules,
      }
    };;
  },
};