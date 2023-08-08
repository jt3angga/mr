module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ssd`
  extends: ["ssd"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
