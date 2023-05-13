module.exports = {
   entry: [
     'script-loader!jquery/dist/jquery.min.js',
     'bootstrap/dist/js/bootstrap.min.js',
     'bootstrap/dist/css/bootstrap.css',
     './index.js'
   ],
   externals: {
     jquery: 'jQuery'
   },
   module: {
    // LESS LOADER
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compila Less en CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
    ////////////////////////////////
       loaders: [
           {
               test: /(\.js|\.jsx)$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: { presets: ['es2015', 'react'] }
           },
           {
            test: /\.ncss$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
          },
       {
         test: /\.css$/,
         loader: 'style-loader!css-loader'
       },
       { 
         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
         loader: 'url-loader?limit=100000'
       }
       ]
   },
   output: {
       filename: "index_bundle.js",
       path: __dirname + '/dist'
   }
}