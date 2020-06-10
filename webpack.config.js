const path = require('path');

const srcPath = path.resolve(__dirname, 'client/src');
const publicPath = path.resolve(__dirname, 'client/dist');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: srcPath,
  output: {
    filename: 'bundle.js',
    path: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: `${srcPath}`,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
    ],
  },
};
