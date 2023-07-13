const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withTM = require("next-transpile-modules");
const { withSentryConfig } = require("@sentry/nextjs");

// configuration enhancers
const addFonts = (config) => withFonts(config);
const addBundleAnalyzer = (config) =>
  withBundleAnalyzer({ enabled: enableAnalyzer })(config);
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

const addTM = (config) =>
  withTM(requiredModules, { resolveSymlinks: false })(config);

const buildNextConfig = (baseConfig, ...configEnhancers) =>
  configEnhancers.reduce(
    (config, configEnhancer) => configEnhancer(config),
    baseConfig
  );

let addMFConfig = (config) => config;
if (buildWithFederation) {
  addMFConfig = addModuleFederationForNavigation;
}

const addRemoteLayoutStub = (nextConfig) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      if (!federatedByRemote) {
        config.plugins.push(new UseRemoteLayoutStubPlugin());
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};

const addSentryConfigs = (nextConfig) => withSentryConfig(nextConfig);

module.exports = addSentryConfigs(
  buildNextConfig(
    {
      basePath: siteBasePath,
      sentry: {
        disableServerWebpackPlugin: true,
        disableClientWebpackPlugin: true,
      },
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
    addMFConfig,
    addRemoteLayoutStub,
    addTM
  )
);
