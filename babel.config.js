const path = require('path');

module.exports = (api) => {
  if (api.env('ES')) {
    return {
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
      env: {
        test: {
          plugins: ['require-context-hook'],
        },
      },
      plugins: [
        [
          'astroturf/plugin',
          {
            tagName: 'css',
            extension: '.css',
            directory: 'es',
            writeFiles: true,
            getFileName(hostFilePath, pluginsOptions) {
              const basepath = path.join(
                pluginsOptions.directory,
                path.dirname(path.relative('src', hostFilePath)),
                path.basename(hostFilePath, path.extname(hostFilePath))
              );

              return `${basepath}__extracted_style${pluginsOptions.extension}`;
            },
          },
        ],
      ],
    };
  }

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};
