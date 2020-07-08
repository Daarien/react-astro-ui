const fs = require('fs');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;
const isDevelopment = NODE_ENV !== 'production';
const isProduction = !isDevelopment;

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

const removeFalseValue = (v) => v.filter(Boolean);

module.exports = () => {
  return {
    mode: NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          use: ['babel-loader', 'astroturf/loader'],
          exclude: /node_modules/,
          include: [resolve('src')],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment,
                reloadAll: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]',
                },
                importLoaders: 1,
              },
            },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.(svg)$/,
          use: ['svg-sprite-loader'],
          include: [resolve('src/components/Icon/svg')],
        },
        {
          test: /\.(png|svg|gif|jpe?g|mp3|ttf|eot|woff|woff2|webm|mp4)$/,
          use: ['file-loader'],
          exclude: [resolve('src/components/Icon/svg')],
        },
      ],
    },
    optimization: {
      minimizer: removeFalseValue([
        isProduction && new TerserJSPlugin({}),
        isProduction && new OptimizeCSSAssetsPlugin({}),
      ]),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  };
};
