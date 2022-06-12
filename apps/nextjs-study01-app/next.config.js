// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: { '@primary-color': '#0264FB' }, // optional
        lessVarsFilePath: './src/styles/variables.less', // optional
        lessVarsFilePathAppendToEndOfContent: false, // optional
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {
          // ...
          mode: 'local',
          exportLocalsConvention: 'camelCase',
          exportOnlyLocals: false,
          // ...
          getLocalIdent: (context, localIdentName, localName, options) => {
            return 'whatever_random_class_name';
          },
        },

        // for Next.js ONLY
        nextjs: {
          localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
        },

        // Other Config Here...

        webpack: (config, { isServer }) => {
          config.resolve.modules.push(__dirname);
          if (!isServer) {
            config.resolve.fallback = {
              fs: false,
              process: false,
              path: false,
            };
          }

          return config;
        },
      },
    ],
    [withImages],
    [withBundleAnalyzer, {}],
  ],
  {
    i18n,
    swcMinify: true,
    productionBrowserSourceMaps: false,
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    images: {
      disableStaticImages: true,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
);
