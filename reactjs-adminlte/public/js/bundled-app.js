webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright Toorq Media Serivces
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),   
	        __webpack_require__(4),
	        __webpack_require__(11)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, $, SaasDashboard) {
	    	React.render(React.createElement(SaasDashboard, null),  document.body);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))    

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	        __webpack_require__(14),
	        __webpack_require__(15),
	        __webpack_require__(16),
	        __webpack_require__(17),
	        __webpack_require__(13),
	        __webpack_require__(18),
	        __webpack_require__(19),
	        __webpack_require__(20),
	        __webpack_require__(21),
	        __webpack_require__(22)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$, HeaderBar, NavigationMenu, ControlPanel, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven){
	    	var SaasDashboard = React.createClass({displayName: "SaasDashboard",
	    		render: function(){
	    			return (
	    				React.createElement("div", {className: "wrapper"}, 
	    					React.createElement(HeaderBar, null), 
	    					
	    					React.createElement(NavigationMenu, null), 
	    					
	    					React.createElement("div", {className: "content-wrapper"}, 
	    						React.createElement("section", {className: "content-header"}, 
	    							React.createElement("h1", null, 
	    						        "Dashboard", 
	    						       	React.createElement("small", null, "Control panel")
	    						    ), 
	    							/*<ol className="breadcrumb">
	    								<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
	    								<li className="active">Dashboard</li>
	    							</ol>*/
	                                React.createElement(ControlPanel, null)
	    						), 

	    						React.createElement("section", {className: "content"}, 
	    							React.createElement("div", {className: "row"}, 
	    								React.createElement("section", {className: "col-lg-7 connectedSortable ui-sortable"}, 
	    									React.createElement(ContainerOne, null), 
	                                        React.createElement(ContainerTwo, null), 
	                                        React.createElement(ContainerThree, null), 
	                                        React.createElement(ContainerFour, null)
	    								), 

	                                    React.createElement("section", {className: "col-lg-5 connectedSortable ui-sortable"}, 
	                                        React.createElement(ContainerFive, null), 
	                                        React.createElement(ContainerSix, null), 
	                                        React.createElement(ContainerSeven, null)
	                                    )
	    							)
	    						)

	    					)
	    				)
	    			)
	    		}
	    	})

	    	return SaasDashboard;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerTwo = React.createClass({displayName: "ContainerTwo",
	    		render: function(){
	                var style = {
	                    position: 'relative',
	                    height: '250px',
	                    width: 'auto',
	                    overflow: 'hidden'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-success"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("i", {className: "fa fa-comments-o"}), 
	                            React.createElement("h3", {className: "box-title"}, "Chat"), 
	                            React.createElement("div", {className: "box-tools pull-right", "data-toggle": "tooltip", title: "", "data-original-title": "Status"}, 
	                                React.createElement("div", {className: "btn-group", "data-toggle": "btn-toggle"}, 
	                                    React.createElement("button", {type: "button", className: "btn btn-default btn-sm active"}, React.createElement("i", {className: "fa fa-square text-green"})), 
	                                    React.createElement("button", {type: "button", className: "btn btn-default btn-sm"}, React.createElement("i", {className: "fa fa-square text-red"}))
	                                )
	                            )
	                        ), 

	                        React.createElement("div", {className: "slimScrollDiv", style: style}, 
	                            React.createElement("div", {className: "box-body chat", id: "chat-box"}
	                            )
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerTwo;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var HeaderBar = React.createClass({displayName: "HeaderBar",
	    		render: function(){
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
	                            React.createElement("a", {href: "#", className: "sidebar-toggle", "data-toggle": "offcanvas", role: "button"}, 
	                                React.createElement("span", {className: "sr-only"}, "Toggle navigation")
	                            ), 
	                            React.createElement("div", {className: "navbar-custom-menu"}, 
	                                React.createElement("ul", {className: "nav navbar-nav"}, 
	                                    /* Messages: style can be found in dropdown.less*/
	                                    React.createElement("li", {className: "dropdown messages-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-envelope-o"}), 
	                                            React.createElement("span", {className: "label label-success"}, "4")
	                                        ), 
	                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                            React.createElement("li", {className: "header"}, "You have 4 messages"), 
	                                            React.createElement("li", null, 
	                                                /* inner menu: contains the actual data */
	                                                React.createElement("div", {className: "slimScrollDiv"}, 
	                                                    React.createElement("ul", {className: "menu"}, 
	                                                        React.createElement("li", null, 
	                                                            /* start message */
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("div", {className: "pull-left"}, 
	                                                                    React.createElement("img", {src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image"})
	                                                                ), 
	                                                                React.createElement("h4", null, 
	                                                "Support Team", 
	                                                React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " 5 mins")
	                                              ), 
	                                                                React.createElement("p", null, "Why not buy a new awesome theme?")
	                                                            )
	                                                        ), 
	                                                        /* end message */
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("div", {className: "pull-left"}, 
	                                                                    React.createElement("img", {src: "dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image"})
	                                                                ), 
	                                                                React.createElement("h4", null, 
	                                                "AdminLTE Design Team", 
	                                                React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " 2 hours")
	                                              ), 
	                                                                React.createElement("p", null, "Why not buy a new awesome theme?")
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("div", {className: "pull-left"}, 
	                                                                    React.createElement("img", {src: "dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image"})
	                                                                ), 
	                                                                React.createElement("h4", null, 
	                                                "Developers", 
	                                                React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " Today")
	                                              ), 
	                                                                React.createElement("p", null, "Why not buy a new awesome theme?")
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("div", {className: "pull-left"}, 
	                                                                    React.createElement("img", {src: "dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image"})
	                                                                ), 
	                                                                React.createElement("h4", null, 
	                                                "Sales Department", 
	                                                React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " Yesterday")
	                                              ), 
	                                                                React.createElement("p", null, "Why not buy a new awesome theme?")
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("div", {className: "pull-left"}, 
	                                                                    React.createElement("img", {src: "dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image"})
	                                                                ), 
	                                                                React.createElement("h4", null, 
	                                                "Reviewers", 
	                                                React.createElement("small", null, React.createElement("i", {className: "fa fa-clock-o"}), " 2 days")
	                                              ), 
	                                                                React.createElement("p", null, "Why not buy a new awesome theme?")
	                                                            )
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "slimScrollBar"}), 
	                                                    React.createElement("div", {className: "slimScrollRail"})
	                                                )
	                                            ), 
	                                            React.createElement("li", {className: "footer"}, React.createElement("a", {href: "#"}, "See All Messages"))
	                                        )
	                                    ), 
	                                    /* Notifications: style can be found in dropdown.less */
	                                    React.createElement("li", {className: "dropdown notifications-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-bell-o"}), 
	                                            React.createElement("span", {className: "label label-warning"}, "10")
	                                        ), 
	                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                            React.createElement("li", {className: "header"}, "You have 10 notifications"), 
	                                            React.createElement("li", null, 
	                                                /* inner menu: contains the actual data */
	                                                React.createElement("div", {className: "slimScrollDiv"}, 
	                                                    React.createElement("ul", {className: "menu"}, 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("i", {className: "fa fa-users text-aqua"}), " 5 new members joined today"
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("i", {className: "fa fa-warning text-yellow"}), " Very long description here that may not fit into the page and may cause design problems"
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("i", {className: "fa fa-users text-red"}), " 5 new members joined"
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("i", {className: "fa fa-shopping-cart text-green"}), " 25 sales made"
	                                                            )
	                                                        ), 
	                                                        React.createElement("li", null, 
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("i", {className: "fa fa-user text-red"}), " You changed your username"
	                                                            )
	                                                        )
	                                                    ), 
	                                                    React.createElement("div", {className: "slimScrollBar"}), 
	                                                    React.createElement("div", {className: "slimScrollRail"})
	                                                )
	                                            ), 
	                                            React.createElement("li", {className: "footer"}, React.createElement("a", {href: "#"}, "View all"))
	                                        )
	                                    ), 
	                                    /* Tasks: style can be found in dropdown.less */
	                                    React.createElement("li", {className: "dropdown tasks-menu"}, 
	                                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
	                                            React.createElement("i", {className: "fa fa-flag-o"}), 
	                                            React.createElement("span", {className: "label label-danger"}, "9")
	                                        ), 
	                                        React.createElement("ul", {className: "dropdown-menu"}, 
	                                            React.createElement("li", {className: "header"}, "You have 9 tasks"), 
	                                            React.createElement("li", null, 
	                                                /* inner menu: contains the actual data */
	                                                React.createElement("div", {className: "slimScrollDiv"}, 
	                                                    React.createElement("ul", {className: "menu"}, 
	                                                        React.createElement("li", null, 
	                                                            /* Task item */
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("h3", null, 
	                                                "Design some buttons", 
	                                                React.createElement("small", {className: "pull-right"}, "20%")
	                                              ), 
	                                                                React.createElement("div", {className: "progress xs"}, 
	                                                                    React.createElement("div", {className: "progress-bar progress-bar-aqua"}, 
	                                                                        React.createElement("span", {className: "sr-only"}, "20% Complete")
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* end task item */
	                                                        React.createElement("li", null, 
	                                                            /* Task item */
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("h3", null, 
	                                                "Create a nice theme", 
	                                                React.createElement("small", {className: "pull-right"}, "40%")
	                                              ), 
	                                                                React.createElement("div", {className: "progress xs"}, 
	                                                                    React.createElement("div", {className: "progress-bar progress-bar-green"}, 
	                                                                        React.createElement("span", {className: "sr-only"}, "40% Complete")
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* end task item */
	                                                        React.createElement("li", null, 
	                                                            /* Task item */
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("h3", null, 
	                                                "Some task I need to do", 
	                                                React.createElement("small", {className: "pull-right"}, "60%")
	                                              ), 
	                                                                React.createElement("div", {className: "progress xs"}, 
	                                                                    React.createElement("div", {className: "progress-bar progress-bar-red"}, 
	                                                                        React.createElement("span", {className: "sr-only"}, "60% Complete")
	                                                                    )
	                                                                )
	                                                            )
	                                                        ), 
	                                                        /* end task item */
	                                                        React.createElement("li", null, 
	                                                            /* Task item */
	                                                            React.createElement("a", {href: "#"}, 
	                                                                React.createElement("h3", null, 
	                                                "Make beautiful transitions", 
	                                                React.createElement("small", {className: "pull-right"}, "80%")
	                                              ), 
	                                                                React.createElement("div", {className: "progress xs"}, 
	                                                                    React.createElement("div", {className: "progress-bar progress-bar-yellow"}, 
	                                                                        React.createElement("span", {className: "sr-only"}, "80% Complete")
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                        /* end task item */
	                                                    ), 
	                                                    React.createElement("div", {className: "slimScrollBar"}), 
	                                                    React.createElement("div", {className: "slimScrollRail"})
	                                                )
	                                            ), 
	                                            React.createElement("li", {className: "footer"}, 
	                                                React.createElement("a", {href: "#"}, "View all tasks")
	                                            )
	                                        )
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
	    	})

	    	return HeaderBar;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var NavigationMenu = React.createClass({displayName: "NavigationMenu",
	    		render: function(){
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
	                                        React.createElement("i", {className: "fa fa-dashboard"}), " ", React.createElement("span", null, "Dashboard"), " ", React.createElement("i", {className: "fa fa-angle-left pull-right"})
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
	                                        React.createElement("i", {className: "fa fa-th"}), " ", React.createElement("span", null, "Widgets"), " ", React.createElement("small", {className: "label pull-right bg-green"}, "new")
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
	    	})

	    	return NavigationMenu
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ControlPanel = React.createClass({displayName: "ControlPanel",
	    		render: function(){
	                var style = {
	                    position: 'relative',
	                    height: '300px'
	                };

	    			return (
	    				React.createElement("div", {className: "row", id: "contains-custom-header"}

	                    )
	    			)
	    		}
	    	})

	    	return ControlPanel;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerOne = React.createClass({displayName: "ContainerOne",
	    		render: function(){
	                var style = {
	                    position: 'relative',
	                    height: '300px'
	                };

	    			return (
	    				React.createElement("div", {className: "nav-tabs-custom"}, 
	                        /* Tabs within a box */
	                        React.createElement("ul", {className: "nav nav-tabs pull-right ui-sortable-handle"}, 
	                            React.createElement("li", {className: ""}, React.createElement("a", {href: "#revenue-chart", "data-toggle": "tab", "aria-expanded": "false"}, "Area")), 
	                            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#sales-chart", "data-toggle": "tab", "aria-expanded": "true"}, "Donut")), 
	                            React.createElement("li", {className: "pull-left header"}, React.createElement("i", {className: "fa fa-inbox"}), " Sales")
	                        ), 
	                        React.createElement("div", {className: "tab-content no-padding"}, 
	                            /* Morris chart - Sales */
	                            React.createElement("div", {className: "chart tab-pane", id: "revenue-chart", style: style}), 
	                            React.createElement("div", {className: "chart tab-pane active", id: "sales-chart", style: style})
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerOne;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerThree = React.createClass({displayName: "ContainerThree",
	    		render: function(){
	                var style = {
	                    position: 'relative',
	                    height: '250px',
	                    width: 'auto',
	                    overflow: 'hidden'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-primary"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("i", {className: "ion ion-clipboard"}), 
	                            React.createElement("h3", {className: "box-title"}, "To Do List"), 
	                            React.createElement("div", {className: "box-tools pull-right"}, 
	                                React.createElement("ul", {className: "pagination pagination-sm inline"}, 
	                                    React.createElement("li", null, React.createElement("a", {href: "#"}, "«")), 
	                                    React.createElement("li", null, React.createElement("a", {href: "#"}, "1")), 
	                                    React.createElement("li", null, React.createElement("a", {href: "#"}, "2")), 
	                                    React.createElement("li", null, React.createElement("a", {href: "#"}, "3")), 
	                                    React.createElement("li", null, React.createElement("a", {href: "#"}, "»"))
	                                )
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-body"}, 
	                            React.createElement("ul", {className: "todo-list ui-sortable"}
	                            )
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerThree;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerFour = React.createClass({displayName: "ContainerFour",
	    		render: function(){
	                var style = {
	                    position: 'relative',
	                    height: '250px',
	                    width: 'auto',
	                    overflow: 'hidden'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-info"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("i", {className: "fa fa-envelope"}), 
	                            React.createElement("h3", {className: "box-title"}, "Quick Email"), 
	                            React.createElement("div", {className: "pull-right box-tools"}, 
	                                React.createElement("button", {className: "btn btn-info btn-sm", "data-widget": "remove", "data-toggle": "tooltip", title: "", "data-original-title": "Remove"}, 
	                                    React.createElement("i", {className: "fa fa-times"})
	                                )
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-body"}
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerFour;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerFive = React.createClass({displayName: "ContainerFive",
	    		render: function(){
	                var style = {
	                    height: '250px'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-solid bg-light-blue-gradient"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("div", {className: "pull-right box-tools"}, 
	                                React.createElement("button", {className: "btn btn-primary btn-sm daterange pull-right", "data-toggle": "tooltip", title: "Date range"}, 
	                                    React.createElement("i", {className: "fa fa-calendar"})
	                                ), 
	                                React.createElement("button", {className: "btn btn-primary btn-sm pull-right", "data-widget": "collapse", "data-toggle": "tooltip", title: "Collapse"}, 
	                                    React.createElement("i", {className: "fa fa-minus"})
	                                )
	                            ), 

	                            React.createElement("i", {className: "fa fa-map-marker"}), 
	                            React.createElement("h3", {className: "box-title"}, 
	                                "Visitors"
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-body", style: style}
	                        ), 

	                        React.createElement("div", {className: "box-footer no-border"}
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerFive;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerSix = React.createClass({displayName: "ContainerSix",
	    		render: function(){
	                var style = {
	                    height: '250px'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-solid bg-teal-gradient"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("i", {className: "fa fa-th"}), 
	                            React.createElement("h3", {className: "box-title"}, "Sales Graph"), 
	                            React.createElement("div", {className: "box-tools pull-right"}, 
	                                React.createElement("button", {className: "btn bg-teal btn-sm", "data-widget": "collapse"}, 
	                                    React.createElement("i", {className: "fa fa-minus"})
	                                ), 
	                                React.createElement("button", {className: "btn bg-teal btn-sm", "data-widget": "remove"}, 
	                                    React.createElement("i", {className: "fa fa-times"})
	                                )
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-body"}, 
	                            React.createElement("div", {className: "chart", id: "line-chart", style: style}
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-footer no-border"}
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerSix;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(3),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var ContainerSeven = React.createClass({displayName: "ContainerSeven",
	    		render: function(){
	                var style = {
	                    height: '250px'
	                };
	                //style="overflow: hidden; width: auto; height: 250px;"
	    			return (
	    				React.createElement("div", {className: "box box-solid bg-green-gradient"}, 
	                        React.createElement("div", {className: "box-header ui-sortable-handle"}, 
	                            React.createElement("i", {className: "fa fa-calendar"}), 
	                            React.createElement("h3", {className: "box-title"}, "Calendar"), 
	                            React.createElement("div", {className: "pull-right box-tools"}, 
	                                React.createElement("div", {className: "btn-group"}, 
	                                    React.createElement("button", {className: "btn btn-success btn-sm dropdown-toggle", "data-toggle": "dropdown"}, React.createElement("i", {className: "fa fa-bars"})), 
	                                    React.createElement("ul", {className: "dropdown-menu pull-right", role: "menu"}, 
	                                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Add new event")), 
	                                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Clear events")), 
	                                        React.createElement("li", {className: "divider"}), 
	                                        React.createElement("li", null, React.createElement("a", {href: "#"}, "View calendar"))
	                                    )
	                                ), 
	                                React.createElement("button", {className: "btn btn-success btn-sm", "data-widget": "collapse"}, React.createElement("i", {className: "fa fa-minus"})), 
	                                React.createElement("button", {className: "btn btn-success btn-sm", "data-widget": "remove"}, React.createElement("i", {className: "fa fa-times"}))
	                            )
	                        ), 

	                        React.createElement("div", {className: "box-footer text-black"}
	                        )
	                    )
	    			)
	    		}
	    	})

	    	return ContainerSeven;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ }
]);