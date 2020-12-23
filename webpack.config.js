const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const {config} = require('./src/constants')

module.exports = (mode, config)=>{

  return {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    publicPath: '/fs/flexiTerm/',
    // publicPath: config.url.BASE_PATH,
    historyApiFallback: true,
 },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    // new BaseHrefWebpackPlugin({ baseHref: '/app' })
  ]
  };
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader'
//           }
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   },
//   devServer: {
//     // publicPath: '/fs/flexiTerm/',
//     publicPath: config.url.BASE_PATH,
//     historyApiFallback: true,
//  },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './index.html'
//     }),
//     // new BaseHrefWebpackPlugin({ baseHref: '/app' })
//   ]
// };
