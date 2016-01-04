/**
 * @Author Ashwin Hariharan
 * @Details Webpack config file for adding new vendors, defining entry points and shimming modules. 
 */

var webpack = require('webpack');
var path = require("path");

var lib_dir = __dirname + '/public/libraries',
    node_dir = __dirname + '/node_modules',
    plugins_dir = __dirname + '/public/plugins';

var config = {

    resolve: {
        alias: {
            react: lib_dir + '/react.js',
            reactDom: lib_dir + '/react-dom',
            jquery: lib_dir + '/jQuery-2.1.4.min.js',
            velocity: lib_dir + '/velocity.min.js',
            jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
            bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
            //raphael: plugins_dir + '/raphael/raphael.min.js',
            //morris: plugins_dir + '/morris/morris.min.js',
            //sparkline: plugins_dir + '/sparkline/jquery.sparkline.min.js',
            //jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
            //jvectormapWorld: plugins_dir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
            //knob: plugins_dir + '/knob/jquery.knob.js',
            moment: plugins_dir + '/moment/moment.js',
            daterangepicker: plugins_dir + '/daterangepicker/daterangepicker.js',
            bootstrapDatepicker: plugins_dir + '/datepicker/bootstrap-datepicker.js',
            //bootstrapWysihtml5: plugins_dir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
            slimscroll: plugins_dir + '/slimScroll/jquery.slimscroll.min.js',
            fastclick: plugins_dir + '/fastclick/fastclick.min.js',
        }
    },   

    plugins: [
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'
        }),
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'dashboardV1/js/vendors.js', Infinity),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),

    ],

    entry: {
        dashboardV1: './public/src/dashboardV1/js/main',
        widgets: './public/src/widgets/js/main',
        timeline: './public/src/timeline-page/js/main',
        buttons: './public/src/buttons/js/main',
        vendors: ['react','reactDom','jquery','velocity','jqueryUi','bootstrap','moment','daterangepicker','bootstrapDatepicker','slimscroll','fastclick']
    },

    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/js/[name].bundle.js"
    },
    
    module: {
        noParse: [
            new RegExp(lib_dir + './react.js'),
            new RegExp(lib_dir + './react-dom.js')
        ],
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'jsx-loader' 
            }, 
        ]
    }
};


module.exports = config;

/*
----------
View package.json for more configuration details

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