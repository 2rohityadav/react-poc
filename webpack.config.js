const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { envConfig } = require('./src/constants')


console.log('envConfig-->', envConfig)

module.exports = (mode, config, envConfig, env)=>{
  console.log('mode-->>->', mode)
  console.log('config-->>->',config)
  console.log('envConfig-->>->',envConfig)

  let ENV_CONFIG;

  console.log('Dotenv-->', Dotenv )
  console.log('env-->', env)

  env = 'staging';
  

  if(env === 'dev'){
    ENV_CONFIG = new Dotenv({path: '/.env.dev'})
    console.log("ENV_CONFIG--dev->", ENV_CONFIG)
    console.log('Dotenv-->', process.env)
  }
  if(env === 'staging'){
      ENV_CONFIG = new Dotenv({path: './.env.staging'})
      console.log("ENV_CONFIG--staging->", ENV_CONFIG)
  }
  if(env === 'production'){
      ENV_CONFIG = new Dotenv({path: './.env.production'})
      console.log("ENV_CONFIG--prod->", ENV_CONFIG)
  }
  
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
    publicPath: '/',
    // publicPath: config.url.BASE_PATH,
    historyApiFallback: true,
 },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    // new Dotenv()
    // new webpack.DefinePlugin({
    //   '_envConfig': envConfig
    // }),
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
