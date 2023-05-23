const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withTM = require("next-transpile-modules");

const addFonts = (config) => withFonts(config);
const addBundleAnalyzer = (config) =>
  withBundleAnalyzer({ enabled: true })(config);
const addWatchOptions = (baseConfig) => ({
  ...baseConfig,
  webpackDevMiddleware: (config) => ({
    ...config,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  }),
});
const addTM = (config) => withTM([], { resolveSymlinks: false })(config);

const buildNextConfig = (baseConfig, ...configEnhancers) =>
  configEnhancers.reduce(
    (config, configEnhancer) => configEnhancer(config),
    baseConfig
  );

module.exports = buildNextConfig(
  {
    // NOTE: We pass some environment variables but should not affect the issue
    // env: {},
    // NOTE: Set an example base path
    // basePath: siteBasePath,
    productionBrowserSourceMaps: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  },
  addFonts,
  addBundleAnalyzer,
  addWatchOptions,
  addTM
);
