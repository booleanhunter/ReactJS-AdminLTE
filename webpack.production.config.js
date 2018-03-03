/**
 * @Author Ashwin Hariharan
 * @Details Webpack config file for adding new vendors, defining entry points and shimming modules. 
 */
var webpack = require('webpack');
var path = require("path");
//var env = require('yargs').argv.mode;

var lib_dir = __dirname + '/public/libraries',
    node_dir = __dirname + '/node_modules',
    bower_dir = __dirname + '/bower_components',
    plugins_dir = __dirname + '/public/plugins';

var config = {

    resolve: {
        alias: {
            react: node_dir + '/react',
            "react-dom": node_dir + '/react-dom',
            jquery: node_dir + '/jquery/dist/jquery.min.js',
            "velocity-animate": node_dir + '/velocity-animate',
            jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
            bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
            //eve: node_dir + '/raphael/eve/eve.js',
            raphael: node_dir + '/webpack-raphael/raphael.js',
            morris: plugins_dir + '/morris/morris.js',
            //sparkline: plugins_dir + '/sparkline/jquery.sparkline.min.js',
            jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
            jvectormapWorld: plugins_dir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
            //knob: plugins_dir + '/knob/jquery.knob.js',
            moment: plugins_dir + '/moment/moment.js',
            //daterangepicker: plugins_dir + '/daterangepicker/daterangepicker.js',
            bootstrapDatepicker: plugins_dir + '/datepicker/bootstrap-datepicker.js',
            //bootstrapWysihtml5: plugins_dir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
            slimscroll: plugins_dir + '/slimScroll/jquery.slimscroll.min.js',
            fastclick: plugins_dir + '/fastclick/fastclick.min.js',
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

    ],
    devtool: 'cheap-module-source-map',
    entry: {
        reactjsAdminlte: './src/widgets.src'
    },

    output: {
        path: path.join(__dirname, "./"),
        filename: "./[name].js",
        libraryTarget: "commonjs",
        umdNamedDefine: true,
    },

    optimization: {
        minimize: true
    },

    externals: [
        {
            'react': 'react',
            'react-dom': 'react-dom',
            'jquery': 'jquery',
            'velocity': 'velocity',
            'jqueryUI': 'jqueryUI',
            'moment': 'moment',
            'raphael': 'raphael'
        }
    ],
    module: {
        rules: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: ['react', 'es2015'],
                    compact: true
                },
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/
            },
        ]
    }
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

    Will run webpack-dev-server with the arguments specified (--devtool eval --progress --colors --content-base build)

1. --devtool eval will add source urls to your code, which will make sure that any errors point to the right file and line.
2. --progress and --colors will just improve the feedback you get in the terminal when running your workflow.
3. --content-base build points to where you have your custom index.html located.
----------
Since we are using React, we need to evaluate XML along with JS.  This can be done by using jsx-loader. npm install jsx-loader --save will make 
the module available, and then we specify the loader in here- {test:/\.js$/,loader: 'jsx-loader'}. This tells
WebPack that whenever we try to require something that ends with .js it should run the contents of that file through the jsx-loader. 
----------

  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors --content-base views/"
  },

*/