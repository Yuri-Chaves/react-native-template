module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@brand': './src/brand',
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@instances': './src/instances',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@test': './src/test',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
