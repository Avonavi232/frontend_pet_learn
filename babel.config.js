module.exports = (api) => {
  const isTestEnv = api.env('test');
  api.cache(true);

  return {
    presets: [
      isTestEnv && [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      isTestEnv && '@babel/preset-typescript',
      isTestEnv && [
        '@babel/preset-react',
        { runtime: 'automatic' },
      ],
    ].filter(Boolean),
    plugins: [
      'react-hot-loader/babel',
      [
        'i18next-extract',
        {
          locales: [
            'ru',
            'en',
          ],
          keyAsDefaultValue: true,
          outputPath: 'public/locales/{{locale}}/{{ns}}.json',
        },
      ],
    ],
  };
};
