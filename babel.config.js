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
    ].filter(Boolean),
    plugins: [
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
