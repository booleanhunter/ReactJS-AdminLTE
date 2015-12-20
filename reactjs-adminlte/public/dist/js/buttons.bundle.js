webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(2),   
	        __webpack_require__(3),
	        __webpack_require__(15),
	        __webpack_require__(16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDOM, $, commonFunctions, Buttons) {
	    	ReactDOM.render(React.createElement(Buttons, null),  document.getElementById('buttons-container'));

	    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))    

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        exports,
	        __webpack_require__(3),
	        __webpack_require__(4)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, $, velocity) {

	        exports.toggleBoxCollapse = function(box, boxBody, icon) {
	            if(box.className.indexOf('collapsed-box') !== -1) {
	                icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');
	                $(boxBody).velocity('slideDown', {
	                    duration: 500,
	                    easing: 'easeInSine',
	                    complete: function() {
	                        box.className = box.className.replace(/ collapsed-box/g, '');
	                    }
	                });
	                // $(boxBody).slideDown(500, function () {
	                //     box.className = box.className.replace(/ collapsed-box/g, '');
	                // });
	            } else {
	                icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');
	                $(boxBody).velocity('slideUp', {
	                    duration: 500,
	                    easing: 'easeInSine',
	                    complete: function() {
	                        box.className += ' collapsed-box';
	                    }
	                });
	                // $(boxBody).slideUp(500, function () {
	                //     box.className += ' collapsed-box';
	                // });
	            }
	        };

	        exports.removeBox = function(box){
	            $(box).velocity('slideUp', {
	                duration: 500,
	                easing: 'easeInSine'
	            });
	        };

	        exports.initialize = function(){
	            function bootstrapTooltips(selector){
	                $('body').tooltip({
	                  selector: selector
	                });
	            }

	            return {
	                bootstrapTooltips: bootstrapTooltips
	            }
	            
	        };
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(3),
	        __webpack_require__(45),
	        __webpack_require__(46)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $, HeaderBar, NavigationMenu) {
	        var Buttons = React.createClass({displayName: "Buttons",
	            getInitialState: function() {
	                return {
	                    rowOneOptions: [],
	                    rowTwoOptions: [],
	                    rowThreeOptions:[]
	                }
	            },
	            componentDidMount: function() {
	                
	            },
	            render: function() {

	                return (
	                    React.createElement("div", {className: "wrapper"}, 
	                        React.createElement(HeaderBar, null), 
	                        
	                        React.createElement(NavigationMenu, null), 
	                        
	                        React.createElement("div", {className: "content-wrapper"}, 
	                            React.createElement("section", {className: "content-header"}, 
	                                React.createElement("h1", null, 
	                                    "Buttons", 
	                                    React.createElement("small", null, "Preview page")
	                                )
	                                /*<ol className="breadcrumb">
	                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
	                                    <li className="active">Dashboard</li>
	                                </ol>*/
	                            ), 

	                            React.createElement("section", {className: "content"}, 

	                                React.createElement("div", {className: "row"}, 
	                                    React.createElement("div", {className: "col-md-12"}, 
	                                        React.createElement("div", {className: "box box-primary"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("i", {className: "fa fa-edit"}), 

	                                                React.createElement("h3", {className: "box-title"}, "Buttons")
	                                            ), 
	                                            React.createElement("div", {className: "box-body pad table-responsive"}, 
	                                                React.createElement("p", null, "Various types of buttons. Using the base class ", React.createElement("code", null, ".btn")), 
	                                                React.createElement("table", {className: "table table-bordered text-center"}, 
	                                                    React.createElement("tbody", null, 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("th", null, "Normal"), 
	                                                            React.createElement("th", null, "Large ", React.createElement("code", null, ".btn-lg")), 
	                                                            React.createElement("th", null, "Small ", React.createElement("code", null, ".btn-sm")), 
	                                                            React.createElement("th", null, "X-Small ", React.createElement("code", null, ".btn-xs")), 
	                                                            React.createElement("th", null, "Flat ", React.createElement("code", null, ".btn-flat")), 
	                                                            React.createElement("th", null, "Disabled ", React.createElement("code", null, ".disabled"))
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default"}, "Default")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default btn-lg"}, "Default")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default btn-sm"}, "Default")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default btn-xs"}, "Default")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default btn-flat"}, "Default")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-default disabled"}, "Default")
	                                                            )
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary"}, "Primary")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary btn-lg"}, "Primary")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary btn-sm"}, "Primary")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary btn-xs"}, "Primary")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary btn-flat"}, "Primary")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-primary disabled"}, "Primary")
	                                                            )
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success"}, "Success")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success btn-lg"}, "Success")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success btn-sm"}, "Success")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success btn-xs"}, "Success")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success btn-flat"}, "Success")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-success disabled"}, "Success")
	                                                            )
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info"}, "Info")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info btn-lg"}, "Info")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info btn-sm"}, "Info")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info btn-xs"}, "Info")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info btn-flat"}, "Info")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-info disabled"}, "Info")
	                                                            )
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger"}, "Danger")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger btn-lg"}, "Danger")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger btn-sm"}, "Danger")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger btn-xs"}, "Danger")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger btn-flat"}, "Danger")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-danger disabled"}, "Danger")
	                                                            )
	                                                        ), 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning"}, "Warning")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning btn-lg"}, "Warning")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning btn-sm"}, "Warning")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning btn-xs"}, "Warning")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning btn-flat"}, "Warning")
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("button", {type: "button", className: "btn btn-block btn-warning disabled"}, "Warning")
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                            /* /.box */
	                                        )
	                                    )
	                                    /* /.col */
	                                ), 
	                                /* ./row */
	                                React.createElement("div", {className: "row"}, 
	                                    React.createElement("div", {className: "col-md-6"}, 
	                                        /* Block buttons */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Block Buttons")
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                React.createElement("button", {type: "button", className: "btn btn-default btn-block"}, ".btn-block"), 
	                                                React.createElement("button", {type: "button", className: "btn btn-default btn-block btn-flat"}, ".btn-block .btn-flat"), 
	                                                React.createElement("button", {type: "button", className: "btn btn-default btn-block btn-sm"}, ".btn-block .btn-sm")
	                                            )
	                                        ), 
	                                        /* /.box */

	                                        /* Horizontal grouping */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Horizontal Button Group")
	                                            ), 
	                                            React.createElement("div", {className: "box-body table-responsive pad"}, 
	                                                React.createElement("p", null, 
	                                                    "Horizontal button groups are easy to create with bootstrap. Just add your buttons inside ", React.createElement("code", null, "<div className=\"btn-group\"></div>")
	                                                ), 

	                                                React.createElement("table", {className: "table table-bordered"}, 
	                                                    React.createElement("tbody", null, 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("th", null, "Button"), 
	                                                            React.createElement("th", null, "Icons"), 
	                                                            React.createElement("th", null, "Flat"), 
	                                                            React.createElement("th", null, "Dropdown")
	                                                        ), 
	                                                        /* Default */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Left"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Right")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* ./default */
	                                                        /* Info */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Left"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Right")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /. info */
	                                                        /* /.danger */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Left"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Right")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-danger dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /.danger */
	                                                        /* warning */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Left"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Right")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-warning dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /.warning */
	                                                        /* success */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Left"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Right")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-success dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                        /* /.success */
	                                                    )
	                                                )
	                                            )
	                                        ), 
	                                        /* /.box */

	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Button Addon")
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                React.createElement("p", null, "With dropdown"), 

	                                                React.createElement("div", {className: "input-group margin"}, 
	                                                    React.createElement("div", {className: "input-group-btn"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown"}, "Action", 
	                                                            React.createElement("span", {className: "fa fa-caret-down"})), 
	                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    /* /btn-group */
	                                                    React.createElement("input", {type: "text", className: "form-control"})
	                                                ), 
	                                                /* /input-group */
	                                                React.createElement("p", null, "Normal"), 

	                                                React.createElement("div", {className: "input-group margin"}, 
	                                                    React.createElement("div", {className: "input-group-btn"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-danger"}, "Action")
	                                                    ), 
	                                                    /* /btn-group */
	                                                    React.createElement("input", {type: "text", className: "form-control"})
	                                                ), 
	                                                /* /input-group */
	                                                React.createElement("p", null, "Flat"), 

	                                                React.createElement("div", {className: "input-group margin"}, 
	                                                    React.createElement("input", {type: "text", className: "form-control"}), 
	                                                    React.createElement("span", {className: "input-group-btn"}, 
	                                                  React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, "Go!")
	                                                )
	                                                )
	                                                /* /input-group */
	                                            )
	                                            /* /.box-body */
	                                        ), 
	                                        /* /.box */
	                                        /* split buttons box */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Split buttons")
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                /* Split button */
	                                                React.createElement("p", null, "Normal split buttons:"), 

	                                                React.createElement("div", {className: "margin"}, 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-default"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-info"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-danger"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-danger dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-success"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-success dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-warning"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-warning dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    )
	                                                ), 
	                                                /* flat split buttons */
	                                                React.createElement("p", null, "Flat split buttons:"), 

	                                                React.createElement("div", {className: "margin"}, 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-default btn-flat dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-info btn-flat dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-danger btn-flat dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-success btn-flat dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "btn-group"}, 
	                                                        React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, "Action"), 
	                                                        React.createElement("button", {type: "button", className: "btn btn-warning btn-flat dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                            React.createElement("span", {className: "caret"}), 
	                                                            React.createElement("span", {className: "sr-only"}, "Toggle Dropdown")
	                                                        ), 
	                                                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
	                                                            React.createElement("li", {className: "divider"}), 
	                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                            /* /.box-body */
	                                        ), 
	                                        /* end split buttons box */

	                                        /* social buttons */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Social Buttons (By ", React.createElement("a", {href: "https://github.com/lipis/bootstrap-social"}, "Lipis"), ")"
	                                          )
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-bitbucket"}, 
	                                                    React.createElement("i", {className: "fa fa-bitbucket"}), " Sign in with Bitbucket"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-dropbox"}, 
	                                                    React.createElement("i", {className: "fa fa-dropbox"}), " Sign in with Dropbox"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-facebook"}, 
	                                                    React.createElement("i", {className: "fa fa-facebook"}), " Sign in with Facebook"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-flickr"}, 
	                                                    React.createElement("i", {className: "fa fa-flickr"}), " Sign in with Flickr"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-foursquare"}, 
	                                                    React.createElement("i", {className: "fa fa-foursquare"}), " Sign in with Foursquare"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-github"}, 
	                                                    React.createElement("i", {className: "fa fa-github"}), " Sign in with GitHub"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-google"}, 
	                                                    React.createElement("i", {className: "fa fa-google-plus"}), " Sign in with Google"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-instagram"}, 
	                                                    React.createElement("i", {className: "fa fa-instagram"}), " Sign in with Instagram"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-linkedin"}, 
	                                                    React.createElement("i", {className: "fa fa-linkedin"}), " Sign in with LinkedIn"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-tumblr"}, 
	                                                    React.createElement("i", {className: "fa fa-tumblr"}), " Sign in with Tumblr"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-twitter"}, 
	                                                    React.createElement("i", {className: "fa fa-twitter"}), " Sign in with Twitter"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-block btn-social btn-vk"}, 
	                                                    React.createElement("i", {className: "fa fa-vk"}), " Sign in with VK"
	                                                ), 
	                                                React.createElement("br", null), 

	                                                React.createElement("div", {className: "text-center"}, 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-bitbucket"}, React.createElement("i", {className: "fa fa-bitbucket"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-dropbox"}, React.createElement("i", {className: "fa fa-dropbox"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-facebook"}, React.createElement("i", {className: "fa fa-facebook"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-flickr"}, React.createElement("i", {className: "fa fa-flickr"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-foursquare"}, React.createElement("i", {className: "fa fa-foursquare"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-github"}, React.createElement("i", {className: "fa fa-github"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-google"}, React.createElement("i", {className: "fa fa-google-plus"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-instagram"}, React.createElement("i", {className: "fa fa-instagram"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-linkedin"}, React.createElement("i", {className: "fa fa-linkedin"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-tumblr"}, React.createElement("i", {className: "fa fa-tumblr"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-twitter"}, React.createElement("i", {className: "fa fa-twitter"})), 
	                                                    React.createElement("a", {className: "btn btn-social-icon btn-vk"}, React.createElement("i", {className: "fa fa-vk"}))
	                                                )
	                                            )
	                                        )
	                                        /* /.box */

	                                    ), 
	                                    /* /.col */
	                                    React.createElement("div", {className: "col-md-6"}, 
	                                        /* Application buttons */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Application Buttons")
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                React.createElement("p", null, "Add the classes ", React.createElement("code", null, ".btn.btn-app"), " to an ", React.createElement("code", null, "<a>"), " tag to achieve the following:"), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("i", {className: "fa fa-edit"}), " Edit"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("i", {className: "fa fa-play"}), " Play"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("i", {className: "fa fa-repeat"}), " Repeat"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("i", {className: "fa fa-pause"}), " Pause"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("i", {className: "fa fa-save"}), " Save"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-yellow"}, "3"), 
	                                                    React.createElement("i", {className: "fa fa-bullhorn"}), " Notifications"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-green"}, "300"), 
	                                                    React.createElement("i", {className: "fa fa-barcode"}), " Products"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-purple"}, "891"), 
	                                                    React.createElement("i", {className: "fa fa-users"}), " Users"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-teal"}, "67"), 
	                                                    React.createElement("i", {className: "fa fa-inbox"}), " Orders"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-aqua"}, "12"), 
	                                                    React.createElement("i", {className: "fa fa-envelope"}), " Inbox"
	                                                ), 
	                                                React.createElement("a", {className: "btn btn-app"}, 
	                                                    React.createElement("span", {className: "badge bg-red"}, "531"), 
	                                                    React.createElement("i", {className: "fa fa-heart-o"}), " Likes"
	                                                )
	                                            )
	                                            /* /.box-body */
	                                        ), 
	                                        /* /.box */
	                                        /* Various colors */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Different colors")
	                                            ), 
	                                            React.createElement("div", {className: "box-body"}, 
	                                                React.createElement("p", null, "Mix and match with various background colors. Use base className ", React.createElement("code", null, ".btn"), " and add any available", 
	                                                    React.createElement("code", null, ".bg-*"), " className"), 
	                                                /* You may notice a .margin className added
	                                          here but that's only to make the content
	                                          display correctly without having to use a table*/
	                                                React.createElement("p", null, 
	                                                    React.createElement("button", {type: "button", className: "btn bg-maroon btn-flat margin"}, ".btn.bg-maroon.btn-flat"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-purple btn-flat margin"}, ".btn.bg-purple.btn-flat"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-navy btn-flat margin"}, ".btn.bg-navy.btn-flat"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-orange btn-flat margin"}, ".btn.bg-orange.btn-flat"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-olive btn-flat margin"}, ".btn.bg-olive.btn-flat")
	                                                ), 

	                                                React.createElement("p", null, 
	                                                    React.createElement("button", {type: "button", className: "btn bg-maroon margin"}, ".btn.bg-maroon"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-purple margin"}, ".btn.bg-purple"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-navy margin"}, ".btn.bg-navy"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-orange margin"}, ".btn.bg-orange"), 
	                                                    React.createElement("button", {type: "button", className: "btn bg-olive margin"}, ".btn.bg-olive")
	                                                )
	                                            )
	                                        ), 
	                                        /* /.box */

	                                        /* Vertical grouping */
	                                        React.createElement("div", {className: "box"}, 
	                                            React.createElement("div", {className: "box-header"}, 
	                                                React.createElement("h3", {className: "box-title"}, "Vertical Button Group")
	                                            ), 
	                                            React.createElement("div", {className: "box-body table-responsive pad"}, 

	                                                React.createElement("p", null, 
	                                                    "Vertical button groups are easy to create with bootstrap. Just add your buttons inside ", React.createElement("code", null, "<div className=\"btn-group-vertical\"></div>")
	                                                ), 

	                                                React.createElement("table", {className: "table table-bordered"}, 
	                                                    React.createElement("tbody", null, 
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("th", null, "Button"), 
	                                                            React.createElement("th", null, "Icons"), 
	                                                            React.createElement("th", null, "Flat"), 
	                                                            React.createElement("th", null, "Dropdown")
	                                                        ), 
	                                                        /* Default */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Top"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "Bottom")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-default"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* ./default */
	                                                        /* Info */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Top"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "Bottom")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-info"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /. info */
	                                                        /* /.danger */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Top"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "Bottom")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-danger"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-danger dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /.danger */
	                                                        /* warning */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Top"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "Bottom")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-warning"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-warning dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* /.warning */
	                                                        /* success */
	                                                        React.createElement("tr", null, 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Top"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Middle"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "Bottom")
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-left"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-center"})), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success btn-flat"}, React.createElement("i", {className: "fa fa-align-right"}))
	                                                                )
	                                                            ), 
	                                                            React.createElement("td", null, 
	                                                                React.createElement("div", {className: "btn-group-vertical"}, 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "1"), 
	                                                                    React.createElement("button", {type: "button", className: "btn btn-success"}, "2"), 

	                                                                    React.createElement("div", {className: "btn-group"}, 
	                                                                        React.createElement("button", {type: "button", className: "btn btn-success dropdown-toggle", "data-toggle": "dropdown"}, 
	                                                                            React.createElement("span", {className: "caret"})
	                                                                        ), 
	                                                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link")), 
	                                                                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown link"))
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                        /* /.success */
	                                                    )
	                                                )
	                                            )
	                                            /* /.box-body */
	                                        )
	                                        /* /.box */
	                                    )
	                                    /* /.col */
	                                )
	                                /* /. row */
	                            )

	                        ), 

	                        React.createElement("footer", {className: "main-footer"}, 
	                            React.createElement("div", {className: "pull-right hidden-xs"}, 
	                                React.createElement("b", null, "Version"), " 1.0.0"
	                            ), 
	                            React.createElement("strong", null, "This project is a derivative of ", React.createElement("a", {href: "http://almsaeedstudio.com"}, "Almsaeed Studio"), ".")
	                        )

	                        /*<ControlsMenu />*/
	                    )
	                )
	            }
	        });

	        return Buttons;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(3),
	        __webpack_require__(55),
	        __webpack_require__(56),
	        __webpack_require__(57)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $, HeaderMessages, HeaderNotifications, HeaderTasks) {
	        var HeaderBar = React.createClass({displayName: "HeaderBar",
	            getInitialState: function () {
	                return {
	                    messages: [],
	                    notifications: [],
	                    tasks: []
	                }
	            },
	            pushMenu: function () {
	                var body = document.body;
	                if(body.clientWidth > 768){
	                    if(body.className.indexOf('sidebar-collapse') === -1){
	                        body.className += ' sidebar-collapse';
	                    }else {
	                        body.className = body.className.replace(' sidebar-collapse', '');
	                    }
	                }else{
	                    if (body.className.indexOf('sidebar-open') === -1) {
	                        body.className += ' sidebar-open';
	                    }else{
	                        body.className = body.className.replace(' sidebar-open','');
	                    }
	                }
	            },
	            componentDidMount: function () {
	                var messages = [{
	                    displayName: 'Support Team',
	                    displayPicture: 'dist/img/user2-160x160.jpg',
	                    messageSubject: 'Why not buy a new awesome theme?',
	                    messageTime: '5 mins',
	                }, {
	                    displayName: 'AdminLTE Design Team',
	                    displayPicture: 'dist/img/user3-128x128.jpg',
	                    messageSubject: 'Why not buy a new awesome theme?',
	                    messageTime: '2 hours',
	                }, {
	                    displayName: 'Developers',
	                    displayPicture: 'dist/img/user4-128x128.jpg',
	                    messageSubject: 'Why not buy a new awesome theme?',
	                    messageTime: 'Today',
	                }, {
	                    displayName: 'Sales Department',
	                    displayPicture: 'dist/img/user3-128x128.jpg',
	                    messageSubject: 'Why not buy a new awesome theme?',
	                    messageTime: 'Yesterday',
	                }, {
	                    displayName: 'Reviewers',
	                    displayPicture: 'dist/img/user4-128x128.jpg',
	                    messageSubject: 'Why not buy a new awesome theme?',
	                    messageTime: '2 days',
	                }];

	                var notifications = [{
	                    subject: '5 new members joined today',
	                    className: 'fa fa-users text-aqua'
	                }, {
	                    subject: 'Very long description here that may not fit into the page and may cause design problems',
	                    className: 'fa fa-warning text-yellow'
	                }, {
	                    subject: '5 new members joined',
	                    className: 'fa fa-users text-red'
	                }, {
	                    subject: '25 sales made',
	                    className: 'fa fa-shopping-cart text-green'
	                }, {
	                    subject: 'You changed your username',
	                    className: 'fa fa-user text-red'
	                }];

	                var tasks = [{
	                    subject: 'Design some buttons',
	                    percentage: 20
	                }, {
	                    subject: 'Create a nice theme',
	                    percentage: 40
	                }, {
	                    subject: 'Some task I need to do',
	                    percentage: 60
	                }, {
	                    subject: 'Make beautiful transitions',
	                    percentage: 80
	                }];

	                this.setState({
	                    messages: messages,
	                    notifications: notifications,
	                    tasks: tasks
	                });
	            },
	            render: function () {
	                var that = this;
	                return (
	                    React.createElement("header", {className: "main-header"}, 
	                        /* Logo */
	                        React.createElement("a", {href: "index2.html", className: "logo"}, 
	                            /* mini logo for sidebar mini 50x50 pixels */
	                            React.createElement("span", {className: "logo-mini"}, React.createElement("b", null, "A"), "LT"), 
	                            /* logo for regular state and mobile devices */
	                            React.createElement("span", {className: "logo-lg"}, React.createElement("b", null, "Admin"), "LTE")
	                        ), 
	                        /* Header Navbar: style can be found in header.less */
	                        React.createElement("nav", {className: "navbar navbar-static-top", role: "navigation"}, 
	                            /* Sidebar toggle button*/
	                            React.createElement("a", {href: "#", className: "sidebar-toggle", "data-toggle": "offcanvas", role: "button", onClick: that.pushMenu}, 
	                                React.createElement("span", {className: "sr-only"}, "Toggle navigation")
	                            ), 
	                            React.createElement("div", {className: "navbar-custom-menu"}, 
	                                React.createElement("ul", {className: "nav navbar-nav"}, 
	                                    /* Messages: style can be found in dropdown.less*/
	                                    React.createElement("li", {className: "dropdown messages-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-envelope-o"}), 
	                                            React.createElement("span", {className: "label label-success"}, that.state.messages.length)
	                                        ), 
	                                        React.createElement(HeaderMessages, {messages: that.state.messages})
	                                    ), 
	                                    /* Notifications: style can be found in dropdown.less */
	                                    React.createElement("li", {className: "dropdown notifications-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-bell-o"}), 
	                                            React.createElement("span", {className: "label label-warning"}, that.state.notifications.length)
	                                        ), 
	                                        React.createElement(HeaderNotifications, {notifications: that.state.notifications})
	                                    ), 
	                                    /* Tasks: style can be found in dropdown.less */
	                                    React.createElement("li", {className: "dropdown tasks-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-flag-o"}), 
	                                            React.createElement("span", {className: "label label-danger"}, that.state.notifications.length)
	                                        ), 
	                                        React.createElement(HeaderTasks, {tasks: that.state.tasks})
	                                    ), 
	                                    /* User Account: style can be found in dropdown.less */
	                                    React.createElement("li", {className: "dropdown user user-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("img", {src: "dist/img/user2-160x160.jpg", className: "user-image", alt: "User Image"}), 
	                                            React.createElement("span", {className: "hidden-xs"}, "Alexander Pierce")
	                                        ), 
	                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                            /* User image */
	                                            React.createElement("li", {className: "user-header"}, 
	                                                React.createElement("img", {src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image"}), 
	                                                React.createElement("p", null, 
	                                                    "Alexander Pierce - Web Developer", 
	                                                    React.createElement("small", null, "Member since Nov. 2012")
	                                                )
	                                            ), 
	                                            /* Menu Body */
	                                            React.createElement("li", {className: "user-body"}, 
	                                                React.createElement("div", {className: "col-xs-4 text-center"}, 
	                                                    React.createElement("a", {href: "#"}, "Followers")
	                                                ), 
	                                                React.createElement("div", {className: "col-xs-4 text-center"}, 
	                                                    React.createElement("a", {href: "#"}, "Sales")
	                                                ), 
	                                                React.createElement("div", {className: "col-xs-4 text-center"}, 
	                                                    React.createElement("a", {href: "#"}, "Friends")
	                                                )
	                                            ), 
	                                            /* Menu Footer */
	                                            React.createElement("li", {className: "user-footer"}, 
	                                                React.createElement("div", {className: "pull-left"}, 
	                                                    React.createElement("a", {href: "#", className: "btn btn-default btn-flat"}, "Profile")
	                                                ), 
	                                                React.createElement("div", {className: "pull-right"}, 
	                                                    React.createElement("a", {href: "#", className: "btn btn-default btn-flat"}, "Sign out")
	                                                )
	                                            )
	                                        )
	                                    ), 
	                                    /* ontrol Sidebar Toggle Button */
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "#", "data-toggle": "control-sidebar"}, React.createElement("i", {className: "fa fa-gears"}))
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            }
	        });

	        return HeaderBar;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(3),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $) {
	        var NavigationMenu = React.createClass({displayName: "NavigationMenu",
	            render: function () {
	                return (
	                    React.createElement("aside", {className: "main-sidebar"}, 
	                        /* sidebar: style can be found in sidebar.less */
	                        React.createElement("section", {className: "sidebar"}, 
	                            /* Sidebar user panel */
	                            React.createElement("div", {className: "user-panel"}, 
	                                React.createElement("div", {className: "pull-left image"}, 
	                                    React.createElement("img", {src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image"})
	                                ), 
	                                React.createElement("div", {className: "pull-left info"}, 
	                                    React.createElement("p", null, "Alexander Pierce"), 
	                                    React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle text-success"}), " Online")
	                                )
	                            ), 
	                            /* search form */
	                            React.createElement("form", {action: "#", method: "get", className: "sidebar-form"}, 
	                                React.createElement("div", {className: "input-group"}, 
	                                    React.createElement("input", {type: "text", name: "q", className: "form-control", placeholder: "Search..."}), 
	                                    React.createElement("span", {className: "input-group-btn"}, 
	                                    React.createElement("button", {type: "submit", name: "search", id: "search-btn", className: "btn btn-flat"}, React.createElement("i", {className: "fa fa-search"}))
	                                  )
	                                )
	                            ), 
	                            /* /.search form */
	                            /* sidebar menu: : style can be found in sidebar.less */
	                            React.createElement("ul", {className: "sidebar-menu"}, 
	                                React.createElement("li", {className: "header"}, "MAIN NAVIGATION"), 
	                                React.createElement("li", {className: "active treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-dashboard"}), 
	                                        React.createElement("span", null, 
	                                            "Dashboard"
	                                        ), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", {className: "active"}, React.createElement("a", {href: "index.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Dashboard v1")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "index2.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Dashboard v2"))
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-files-o"}), 
	                                        React.createElement("span", null, "Layout Options"), 
	                                        React.createElement("span", {className: "label label-primary pull-right"}, "4")
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/layout/top-nav.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Top Navigation")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/layout/boxed.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Boxed")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/layout/fixed.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Fixed")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/layout/collapsed-sidebar.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Collapsed Sidebar"))
	                                    )
	                                ), 
	                                React.createElement("li", null, 
	                                    React.createElement("a", {href: "pages/widgets.html"}, 
	                                        React.createElement("i", {className: "fa fa-th"}), 
	                                        React.createElement("span", null, "Widgets"), 
	                                        React.createElement("small", {className: "label pull-right bg-green"}, "new")
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-pie-chart"}), 
	                                        React.createElement("span", null, "Charts"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/charts/chartjs.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " ChartJS")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/charts/morris.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Morris")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/charts/flot.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Flot")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/charts/inline.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Inline charts"))
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-laptop"}), 
	                                        React.createElement("span", null, "UI Elements"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/general.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " General")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/icons.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Icons")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/buttons.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Buttons")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/sliders.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Sliders")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/timeline.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Timeline")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/UI/modals.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Modals"))
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-edit"}), " ", React.createElement("span", null, "Forms"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/forms/general.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " General Elements")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/forms/advanced.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Advanced Elements")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/forms/editors.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Editors"))
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-table"}), " ", React.createElement("span", null, "Tables"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/tables/simple.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Simple tables")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/tables/data.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Data tables"))
	                                    )
	                                ), 
	                                React.createElement("li", null, 
	                                    React.createElement("a", {href: "pages/calendar.html"}, 
	                                        React.createElement("i", {className: "fa fa-calendar"}), " ", React.createElement("span", null, "Calendar"), 
	                                        React.createElement("small", {className: "label pull-right bg-red"}, "3")
	                                    )
	                                ), 
	                                React.createElement("li", null, 
	                                    React.createElement("a", {href: "pages/mailbox/mailbox.html"}, 
	                                        React.createElement("i", {className: "fa fa-envelope"}), " ", React.createElement("span", null, "Mailbox"), 
	                                        React.createElement("small", {className: "label pull-right bg-yellow"}, "12")
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-folder"}), " ", React.createElement("span", null, "Examples"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/invoice.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Invoice")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/profile.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Profile")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/login.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Login")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/register.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Register")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/lockscreen.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Lockscreen")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/404.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " 404 Error")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/500.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " 500 Error")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "pages/examples/blank.html"}, React.createElement("i", {className: "fa fa-circle-o"}), " Blank Page"))
	                                    )
	                                ), 
	                                React.createElement("li", {className: "treeview"}, 
	                                    React.createElement("a", {href: "#"}, 
	                                        React.createElement("i", {className: "fa fa-share"}), " ", React.createElement("span", null, "Multilevel"), 
	                                        React.createElement("i", {className: "fa fa-angle-left pull-right"})
	                                    ), 
	                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level One")), 
	                                        React.createElement("li", null, 
	                                            React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level One ", React.createElement("i", {className: "fa fa-angle-left pull-right"})), 
	                                            React.createElement("ul", {className: "treeview-menu"}, 
	                                                React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level Two")), 
	                                                React.createElement("li", null, 
	                                                    React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level Two ", React.createElement("i", {className: "fa fa-angle-left pull-right"})), 
	                                                    React.createElement("ul", {className: "treeview-menu"}, 
	                                                        React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level Three")), 
	                                                        React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level Three"))
	                                                    )
	                                                )
	                                            )
	                                        ), 
	                                        React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o"}), " Level One"))
	                                    )
	                                ), 
	                                React.createElement("li", null, React.createElement("a", {href: "documentation/index.html"}, React.createElement("i", {className: "fa fa-book"}), " ", React.createElement("span", null, "Documentation"))), 
	                                React.createElement("li", {className: "header"}, "LABELS"), 
	                                React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o text-red"}), " ", React.createElement("span", null, "Important"))), 
	                                React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o text-yellow"}), " ", React.createElement("span", null, "Warning"))), 
	                                React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-circle-o text-aqua"}), " ", React.createElement("span", null, "Information")))
	                            )
	                        )
	                        /* /.sidebar */
	                    )
	                )
	            }
	        });

	        return NavigationMenu
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var HeaderMessages = React.createClass({displayName: "HeaderMessages",

	            render: function () {
	                var that = this;

	                var messageList = this.props.messages.map(function (messageDetails, iterator) {
	                    return (
	                        React.createElement("li", {key: "header-message-item"+iterator}, 
	                            /* start message */
	                            React.createElement("a", {href: "#"}, 
	                                React.createElement("div", {className: "pull-left"}, 
	                                    React.createElement("img", {src: messageDetails.displayPicture, className: "img-circle", alt: "User Image"})
	                                ), 
	                                React.createElement("h4", null, 
	                                    messageDetails.displayName, 
	                                    React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " ", messageDetails.messageTime)
	                                ), 
	                                React.createElement("p", null, messageDetails.messageSubject)
	                            )
	                        )
	                    )
	                });

	                return (
	                    React.createElement("ul", {className: "dropdown-menu"}, 
	                        React.createElement("li", {className: "header"}, "You have ", this.props.messages.length, " messages"), 
	                        React.createElement("li", null, 
	                            /* inner menu: contains the actual data */
	                            React.createElement("div", {className: "slimScrollDiv"}, 

	                                React.createElement("ul", {className: "menu"}, 
	                                    messageList
	                                ), 
	                                
	                                React.createElement("div", {className: "slimScrollBar"}), 
	                                React.createElement("div", {className: "slimScrollRail"})
	                            )
	                        ), 
	                        React.createElement("li", {className: "footer"}, React.createElement("a", {href: "#"}, "See All Messages"))
	                    )
	                )
	            }
	        });

	        return HeaderMessages;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var HeaderNotifications = React.createClass({displayName: "HeaderNotifications",

	            render: function () {
	                var that = this;

	                var notificationList = this.props.notifications.map(function (notificationDetails, iterator) {
	                    return (
	                        React.createElement("li", {key: "header-notification-item"+iterator}, 
	                        React.createElement("a", {href: "#"}, 
	                            React.createElement("i", {className: notificationDetails.className}), " ", notificationDetails.subject
	                        )
	                    )
	                    )
	                });

	                return (
	                    React.createElement("ul", {className: "dropdown-menu"}, 
	                        React.createElement("li", {className: "header"}, "You have ", this.props.notifications.length, " notifications"), 
	                        React.createElement("li", null, 
	                            /* inner menu: contains the actual data */
	                            React.createElement("div", {className: "slimScrollDiv"}, 

	                                React.createElement("ul", {className: "menu"}, 
	                                    notificationList
	                                ), 
	                                
	                                React.createElement("div", {className: "slimScrollBar"}), 
	                                React.createElement("div", {className: "slimScrollRail"})
	                            )
	                        ), 
	                        React.createElement("li", {className: "footer"}, React.createElement("a", {href: "#"}, "View all"))
	                    )
	                )
	            }
	        });

	        return HeaderNotifications;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var HeaderTasks = React.createClass({displayName: "HeaderTasks",

	            render: function(){
	                var that = this;
	                var stylePercentage, progressBarColor;

	                var taskList = this.props.tasks.map(function (taskDetails, iterator) {
	                    stylePercentage = {
	                        width: taskDetails.percentage + '%'
	                    };

	                    if(taskDetails.percentage < 21){
	                        progressBarColor = 'progress-bar-red'
	                    }else if (taskDetails.percentage > 20 && taskDetails.percentage < 41){
	                        progressBarColor = 'progress-bar-yellow'
	                    }else if (taskDetails.percentage > 40 && taskDetails.percentage < 61){
	                        progressBarColor = 'progress-bar-green'
	                    }else if (taskDetails.percentage > 60){
	                        progressBarColor = 'progress-bar-aqua';
	                    }

	                    return (
	                        React.createElement("li", {key: "header-task-item"+iterator}, 
	                            React.createElement("a", {href: "#"}, 
	                                React.createElement("h3", null, 
	                                    taskDetails.subject, 
	                                    React.createElement("small", {className: "pull-right"}, taskDetails.percentage+'%')
	                                ), 
	                                React.createElement("div", {className: "progress xs"}, 
	                                    React.createElement("div", {className: "progress-bar "+ progressBarColor, style: stylePercentage}, 
	                                        React.createElement("span", {className: "sr-only"}, taskDetails.percentage + '% Complete', " ")
	                                    )
	                                )
	                            )
	                        )
	                    )
	                });

	                return (
	                    React.createElement("ul", {className: "dropdown-menu"}, 
	                        React.createElement("li", {className: "header"}, "You have ", this.props.tasks.length, " tasks"), 
	                        React.createElement("li", null, 
	                            /* inner menu: contains the actual data */
	                            React.createElement("div", {className: "slimScrollDiv"}, 

	                                React.createElement("ul", {className: "menu"}, 
	                                    taskList
	                                ), 

	                                React.createElement("div", {className: "slimScrollBar"}), 
	                                React.createElement("div", {className: "slimScrollRail"})
	                            )
	                        ), 
	                        React.createElement("li", {className: "footer"}, 
	                            React.createElement("a", {href: "#"}, "View all tasks")
	                        )
	                    )
	                )
	            }
	        });

	        return HeaderTasks;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }

});