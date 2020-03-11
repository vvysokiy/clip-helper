/* eslint-disable no-param-reassign */
const path = require('path');
const webpack = require('webpack');

module.exports = ({ config }) => {
  console.log('hi');

  config.resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../story'),
      'node_modules',
    ],
    // alias: {
    //   '@mocks': path.resolve(__dirname, '../mocks'),
    //   '@utils': path.resolve(__dirname, '../utils'),
    // },
  };

  // config.plugins = [
  //   ...config.plugins,
  //   new webpack.DefinePlugin({
  //     __DEV__: false,
  //     __SERVER__: false,
  //     __BROWSER__: true,
  //     __TEST__: false,
  //     __CONFIG__: {},
  //   }),
  // ];

  config.module.rules = [
    {
      test: /\.(tsx|ts)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/env', {
              targets: {
                browsers: [
                  'last 2 versions',
                  'not ie <= 10',
                ],
              },
            }],
            ['@babel/typescript', { allExtensions: true, isTSX: true }],
            '@babel/react',
          ],
          plugins: [
            '@babel/proposal-class-properties',
          ],
          ignore: [
            'node_modules',
            'build',
            'dist',
          ],
        },
      }],
    },
    {
      test: /\.css$/,
      exclude: [/node_modules/],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]_[local]__[hash:base64:3]',
          },
        },
        'postcss-loader',
        {
          loader: 'style-resources-loader',
          options: {
            include: path.resolve(__dirname, '../', 'src/mobile/'),
            patterns: [
              path.resolve(__dirname, '../', 'src/mobile/css/base.css'),
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      include: [/node_modules/],
      use: ['style-loader', 'css-loader'],
    },
  ];

  return config;
};
