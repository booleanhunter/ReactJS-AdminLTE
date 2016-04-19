/**
 * @Author Ashwin Hariharan
 * @Details Webpack config file for adding new vendors, defining entry points and shimming modules. 
 */

const webpack = require('webpack');
const path = require('path');

const libDir = __dirname + '/public/libraries';
const nodeDir = __dirname + '/node_modules';
const pluginsDir = __dirname + '/public/plugins';

const config = {
  resolve: {
    alias: {
      react: nodeDir + '/react',
      reactDom: libDir + '/react-dom',
      jquery: libDir + '/jQuery-2.1.4.min.js',
      velocity: libDir + '/velocity.min.js',
      jqueryUi: pluginsDir + '/jQueryUI/jquery-ui.min.js',
      bootstrap: pluginsDir + '/bootstrap/js/bootstrap.min.js',
      // eve: nodeDir + '/raphael/eve/eve.js',
      raphael: nodeDir + '/webpack-raphael/raphael.js',
      morris: pluginsDir + '/morris/morris.js',
      // sparkline: pluginsDir + '/sparkline/jquery.sparkline.min.js',
      // jvectormap: pluginsDir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
      // jvectormapWorld: pluginsDir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
      // knob: pluginsDir + '/knob/jquery.knob.js',
      moment: pluginsDir + '/moment/moment.js',
      // daterangepicker: pluginsDir + '/daterangepicker/daterangepicker.js',
      bootstrapDatepicker: pluginsDir + '/datepicker/bootstrap-datepicker.js',
      // bootstrapWysihtml5: pluginsDir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
      slimscroll: pluginsDir + '/slimScroll/jquery.slimscroll.min.js',
      fastclick: pluginsDir + '/fastclick/fastclick.min.js',
    },
  },
  externals: {
    jquery: 'jQuery',
    $: '$',
    react: 'React',
    reactDom: 'ReactDOM',
    marked: 'marked',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'dashboardV1/js/vendors.js', Infinity),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),

  ],
  entry: {
    loginform: './public/src/login/LoginForm',
    vendors: ['react', 'reactDom', 'jquery', 'velocity', 'jqueryUi', 'bootstrap',
      'moment', 'bootstrapDatepicker'],
    chartVendors: ['jquery', 'raphael', 'morris'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'dist/js/[name].bundle.js',
  },
  module: {
    noParse: [
      new RegExp(libDir + './react.js'),
      new RegExp(libDir + './react-dom.js'),
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, 'public'),

      }, {
        loader: 'babel-loader', // 'jsx-loader'
        query: {
          presets: ['react', 'es2015'],
        },
        include: path.join(__dirname, 'public'),
      },
    ],
  },
  scripts: {
    dev: 'webpack-dev-server --devtool eval --progress --colors --content-base views/',
  },
};


module.exports = config;

/*
----------
View package.json for more configuration details

0. During development:-
    Run webpack-dev-server --hot --inline and point your entry files to http://localhost:8080 in your HTML, for HMP

1. Command:-
    webpack --profile --json > stats.json

    Will generate a JSON file called stats.json. Go to http://webpack.github.io/analyse/ and upload the file,
    and see all dependencies in a tree like structure

2. Commands:-
    --> npm run dev

    Will run webpack-dev-server with the arguments specified
    (--devtool eval --progress --colors --content-base build)

1. --devtool eval will add source urls to your code,
   which will make sure that any errors point to the right file and line.
2. --progress and --colors will just improve the feedback
   you get in the terminal when running your workflow.
3. --content-base build points to where you have your custom index.html located.
----------
Since we are using React, we need to evaluate XML along with JS.
This can be done by using jsx-loader. npm install jsx-loader --save will make
the module available, and then we specify the loader in here-
{test:/\.js$/,loader: 'jsx-loader'}. This tells
WebPack that whenever we try to require something that ends with .js it should run
the contents of that file through the jsx-loader.
----------

  'scripts': {
    'dev': 'webpack-dev-server --devtool eval --progress --colors --content-base views/'
  },

*/
