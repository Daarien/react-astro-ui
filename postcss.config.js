const fs = require('fs');
const path = require('path');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

const variables = resolve('/src/styles/variables.css');

module.exports = {
  plugins: {
    'postcss-import': {
      skipDuplicates: true,
      importFrom: variables,
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': {
          importFrom: variables,
        },
        'color-mod-function': {
          unresolved: 'warn',
          importFrom: variables,
        },
        preserve: true,
        importFrom: variables,
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};
