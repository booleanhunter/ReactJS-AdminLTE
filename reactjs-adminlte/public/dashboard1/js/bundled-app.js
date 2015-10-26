webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(3),   
	        __webpack_require__(4),
	        __webpack_require__(13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDOM, $, Dashboard) {
	    	ReactDOM.render(React.createElement(Dashboard, null),  document.getElementById('dashboard-container'));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))    

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	        __webpack_require__(16),
	        __webpack_require__(17),
	        __webpack_require__(18),
	        __webpack_require__(19),
	        __webpack_require__(20),
	        __webpack_require__(15),
	        __webpack_require__(21),
	        __webpack_require__(22),
	        __webpack_require__(23),
	        __webpack_require__(24),
	        __webpack_require__(25)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$, HeaderBar, NavigationMenu, ControlPanel, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven,ControlsMenu){
	    	var Dashboard = React.createClass({displayName: "Dashboard",
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

	    					), 

	                        React.createElement("footer", {className: "main-footer"}, 
	                            React.createElement("div", {className: "pull-right hidden-xs"}, 
	                                React.createElement("b", null, "Version"), " 2.3.0"
	                            ), 
	                            React.createElement("strong", null, "Copyright © 2014-2015 ", React.createElement("a", {href: "http://almsaeedstudio.com"}, "Almsaeed Studio"), "."), 
	                            "All rights reserved."
	                        )

	                        /*<ControlsMenu />*/
	    				)
	    			)
	    		}
	    	})

	    	return Dashboard;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	        __webpack_require__(26),
	        __webpack_require__(27),
	        __webpack_require__(28)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, $, HeaderMessages, HeaderNotifications, HeaderTasks){
	    	var HeaderBar = React.createClass({displayName: "HeaderBar",
	            getInitialState: function(){
	                return {
	                    messages: [],
	                    notifications: [],
	                    tasks: []
	                }
	            },
	            pushMenu: function(){
	                if(document.body.clientWidth > 768){
	                    if(document.body.className.indexOf('sidebar-collapse') === -1){
	                        document.body.className += ' sidebar-collapse';
	                    }else{
	                        document.body.className = document.body.className.replace(' sidebar-collapse','');
	                    }
	                }else{
	                    if(document.body.className.indexOf('sidebar-open') === -1){
	                        document.body.className += ' sidebar-open';
	                    }else{
	                        document.body.className = document.body.className.replace(' sidebar-open','');
	                    }
	                }
	                
	            },
	            componentDidMount:function(){
	                var messages = [
	                    {
	                        displayName: 'Support Team',
	                        displayPicture: 'dist/img/user2-160x160.jpg',
	                        messageSubject: 'Why not buy a new awesome theme?',
	                        messageTime: '5 mins',   
	                    },
	                    {
	                        displayName: 'AdminLTE Design Team',
	                        displayPicture: 'dist/img/user3-128x128.jpg',
	                        messageSubject: 'Why not buy a new awesome theme?',
	                        messageTime: '2 hours',
	                    },
	                    {
	                        displayName: 'Developers',
	                        displayPicture: 'dist/img/user4-128x128.jpg',
	                        messageSubject: 'Why not buy a new awesome theme?',
	                        messageTime: 'Today',
	                    },
	                    {
	                        displayName: 'Sales Department',
	                        displayPicture: 'dist/img/user3-128x128.jpg',
	                        messageSubject: 'Why not buy a new awesome theme?',
	                        messageTime: 'Yesterday',
	                    },
	                    {
	                        displayName: 'Reviewers',
	                        displayPicture: 'dist/img/user4-128x128.jpg',
	                        messageSubject: 'Why not buy a new awesome theme?',
	                        messageTime: '2 days',
	                    },
	                ];

	                var notifications = [
	                    {
	                        subject: '5 new members joined today',
	                        className: 'fa fa-users text-aqua'
	                    },
	                    {
	                        subject: 'Very long description here that may not fit into the page and may cause design problems',
	                        className: 'fa fa-warning text-yellow'
	                    },
	                    {
	                        subject: '5 new members joined',
	                        className: 'fa fa-users text-red'
	                    },
	                    {
	                        subject: '25 sales made',
	                        className: 'fa fa-shopping-cart text-green'
	                    },
	                    {
	                        subject: 'You changed your username',
	                        className: 'fa fa-user text-red'
	                    }
	                ];

	                var tasks = [
	                    {
	                        subject: 'Design some buttons',
	                        percentage: 20
	                    },
	                    {
	                        subject: 'Create a nice theme',
	                        percentage: 40
	                    },
	                    {
	                        subject: 'Some task I need to do',
	                        percentage: 60
	                    },
	                    {
	                        subject: 'Make beautiful transitions',
	                        percentage: 80
	                    }
	                ]

	                this.setState({
	                    messages: messages,
	                    notifications: notifications,
	                    tasks: tasks
	                });
	            },
	    		render: function(){
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
	    	})

	    	return HeaderBar;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
	    	})

	    	return NavigationMenu
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
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

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	        var ControlsMenu = React.createClass({displayName: "ControlsMenu",
	            componentDidMount:function(){

	            },
	            render: function(){
	                var that = this;
	                return (
	                    React.createElement("aside", {className: "control-sidebar control-sidebar-dark control-sidebar-open"}, 
	                        /* Create the tabs */
	                        React.createElement("ul", {className: "nav nav-tabs nav-justified control-sidebar-tabs"}, 
	                            React.createElement("li", {className: "active"}, 
	                                React.createElement("a", {href: "#control-sidebar-theme-demo-options-tab", "data-toggle": "tab"}, React.createElement("i", {className: "fa fa-wrench"}))
	                            ), 
	                            React.createElement("li", null, React.createElement("a", {href: "#control-sidebar-home-tab", "data-toggle": "tab"}, React.createElement("i", {className: "fa fa-home"}))), 
	                            React.createElement("li", null, React.createElement("a", {href: "#control-sidebar-settings-tab", "data-toggle": "tab"}, React.createElement("i", {className: "fa fa-gears"})))
	                        ), 
	                        /* Tab panes */
	                        React.createElement("div", {className: "tab-content"}, 
	                            /* Home tab content */
	                            React.createElement("div", {className: "tab-pane", id: "control-sidebar-home-tab"}, 
	                                React.createElement("h3", {className: "control-sidebar-heading"}, "Recent Activity"), 
	                                React.createElement("ul", {className: "control-sidebar-menu"}, 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("i", {className: "menu-icon fa fa-birthday-cake bg-red"}), 
	                                            React.createElement("div", {className: "menu-info"}, 
	                                                React.createElement("h4", {className: "control-sidebar-subheading"}, "Langdons Birthday"), 
	                                                React.createElement("p", null, "Will be 23 on April 24th")
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("i", {className: "menu-icon fa fa-user bg-yellow"}), 
	                                            React.createElement("div", {className: "menu-info"}, 
	                                                React.createElement("h4", {className: "control-sidebar-subheading"}, "Frodo Updated His Profile"), 
	                                                React.createElement("p", null, "New phone +1(800)555-1234")
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("i", {className: "menu-icon fa fa-envelope-o bg-light-blue"}), 
	                                            React.createElement("div", {className: "menu-info"}, 
	                                                React.createElement("h4", {className: "control-sidebar-subheading"}, "Nora Joined Mailing List"), 
	                                                React.createElement("p", null, "nora@example.com")
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("i", {className: "menu-icon fa fa-file-code-o bg-green"}), 
	                                            React.createElement("div", {className: "menu-info"}, 
	                                                React.createElement("h4", {className: "control-sidebar-subheading"}, "Cron Job 254 Executed"), 
	                                                React.createElement("p", null, "Execution time 5 seconds")
	                                            )
	                                        )
	                                    )
	                                ), 
	                                /* /.control-sidebar-menu */

	                                React.createElement("h3", {className: "control-sidebar-heading"}, "Tasks Progress"), 
	                                React.createElement("ul", {className: "control-sidebar-menu"}, 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("h4", {className: "control-sidebar-subheading"}, 
	                                        "Custom Template Design", 
	                                        React.createElement("span", {className: "label label-danger pull-right"}, "70%")
	                                      ), 
	                                            React.createElement("div", {className: "progress progress-xxs"}, 
	                                                React.createElement("div", {className: "progress-bar progress-bar-danger", style: "width: 70%"})
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("h4", {className: "control-sidebar-subheading"}, 
	                                        "Update Resume", 
	                                        React.createElement("span", {className: "label label-success pull-right"}, "95%")
	                                      ), 
	                                            React.createElement("div", {className: "progress progress-xxs"}, 
	                                                React.createElement("div", {className: "progress-bar progress-bar-success", style: "width: 95%"})
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("h4", {className: "control-sidebar-subheading"}, 
	                                        "Laravel Integration", 
	                                        React.createElement("span", {className: "label label-warning pull-right"}, "50%")
	                                      ), 
	                                            React.createElement("div", {className: "progress progress-xxs"}, 
	                                                React.createElement("div", {className: "progress-bar progress-bar-warning", style: "width: 50%"})
	                                            )
	                                        )
	                                    ), 
	                                    React.createElement("li", null, 
	                                        React.createElement("a", {href: "javascript::;"}, 
	                                            React.createElement("h4", {className: "control-sidebar-subheading"}, 
	                                        "Back End Framework", 
	                                        React.createElement("span", {className: "label label-primary pull-right"}, "68%")
	                                      ), 
	                                            React.createElement("div", {className: "progress progress-xxs"}, 
	                                                React.createElement("div", {className: "progress-bar progress-bar-primary", style: "width: 68%"})
	                                            )
	                                        )
	                                    )
	                                )
	                                /* /.control-sidebar-menu */

	                            ), 
	                            React.createElement("div", {id: "control-sidebar-theme-demo-options-tab", className: "tab-pane active"}, 
	                                React.createElement("div", null, 
	                                    React.createElement("h4", {className: "control-sidebar-heading"}, "Layout Options"), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-layout": "fixed", className: "pull-right"}), " Fixed layout"), 
	                                        React.createElement("p", null, "Activate the fixed layout. You cant use fixed and" + " " +
	                                            "boxed layouts together")
	                                    ), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-layout": "layout-boxed", className: "pull-right"}), " Boxed Layout"), 
	                                        React.createElement("p", null, "Activate the boxed layout")
	                                    ), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-layout": "sidebar-collapse", className: "pull-right"}), " Toggle Sidebar"), 
	                                        React.createElement("p", null, "Toggle the left sidebars state (open or collapse)")
	                                    ), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-enable": "expandOnHover", className: "pull-right"}), " Sidebar Expand on Hover"), 
	                                        React.createElement("p", null, "Let the sidebar mini expand on hover")
	                                    ), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-controlsidebar": "control-sidebar-open", className: "pull-right"}), " Toggle Right Sidebar Slide"), 
	                                        React.createElement("p", null, "Toggle between slide over content and push content" + " " +
	                                            "effects"
	                                        )
	                                    ), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            React.createElement("input", {type: "checkbox", "data-sidebarskin": "toggle", className: "pull-right"}), " Toggle Right Sidebar Skin"), 
	                                        React.createElement("p", null, "Toggle between dark and light skins for the right sidebar")
	                                    ), 
	                                    React.createElement("h4", {className: "control-sidebar-heading"}, "Skins"), 
	                                    React.createElement("ul", {className: "list-unstyled clearfix"}, 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-blue", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px; background: #367fa9;"}), 
	                                                    React.createElement("span", {className: "bg-light-blue", style: "display:block; width: 80%; float: left; height: 7px;"})
	                                                ), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222d32;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Blue")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-black", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", {style: "box-shadow: 0 0 2px rgba(0,0,0,0.1)", className: "clearfix"}, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px; background: #fefefe;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 7px; background: #fefefe;"})
	                                                ), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Black")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-purple", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-purple-active"}), React.createElement("span", {className: "bg-purple", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222d32;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Purple")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-green", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-green-active"}), React.createElement("span", {className: "bg-green", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222d32;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Green")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-red", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-red-active"}), React.createElement("span", {className: "bg-red", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222d32;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Red")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-yellow", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-yellow-active"}), React.createElement("span", {className: "bg-yellow", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #222d32;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin"}, "Yellow")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-blue-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px; background: #367fa9;"}), 
	                                                    React.createElement("span", {className: "bg-light-blue", style: "display:block; width: 80%; float: left; height: 7px;"})
	                                                ), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px"}, "Blue Light")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-black-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", {style: "box-shadow: 0 0 2px rgba(0,0,0,0.1)", className: "clearfix"}, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px; background: #fefefe;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 7px; background: #fefefe;"})
	                                                ), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px"}, "Black Light")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-purple-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-purple-active"}), React.createElement("span", {className: "bg-purple", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px"}, "Purple Light")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-green-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-green-active"}), React.createElement("span", {className: "bg-green", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px"}, "Green Light")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-red-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-red-active"}), React.createElement("span", {className: "bg-red", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px"}, "Red Light")
	                                        ), 
	                                        React.createElement("li", {style: "float:left; width: 33.33333%; padding: 5px;"}, 
	                                            React.createElement("a", {href: "javascript:void(0);", "data-skin": "skin-yellow-light", style: "display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)", 
	                                            className: "clearfix full-opacity-hover"}, 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 7px;", 
	                                                    className: "bg-yellow-active"}), React.createElement("span", {className: "bg-yellow", 
	                                                    style: "display:block; width: 80%; float: left; height: 7px;"})), 
	                                                React.createElement("div", null, React.createElement("span", {style: "display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"}), 
	                                                    React.createElement("span", {style: "display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"})
	                                                )
	                                            ), 
	                                            React.createElement("p", {className: "text-center no-margin", style: "font-size: 12px;"}, "Yellow Light")
	                                        )
	                                    )
	                                )
	                            ), 
	                            /* /.tab-pane */
	                            /* Stats tab content */
	                            React.createElement("div", {className: "tab-pane", id: "control-sidebar-stats-tab"}, "Stats Tab Content"), 
	                            /* /.tab-pane */
	                            /* Settings tab content */
	                            React.createElement("div", {className: "tab-pane", id: "control-sidebar-settings-tab"}, 
	                                React.createElement("form", {method: "post"}, 
	                                    React.createElement("h3", {className: "control-sidebar-heading"}, "General Settings"), 
	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Report panel usage", 
	                                            React.createElement("input", {type: "checkbox", className: "pull-right", checked: ""})
	                                        ), 
	                                        React.createElement("p", null, 
	                                            "Some information about this general settings option"
	                                        )
	                                    ), 
	                                    /* /.form-group */

	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Allow mail redirect", 
	                                            React.createElement("input", {type: "checkbox", className: "pull-right", checked: ""})
	                                        ), 
	                                        React.createElement("p", null, 
	                                            "Other sets of options are available"
	                                        )
	                                    ), 
	                                    /* /.form-group */

	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Expose author name in posts", 
	                                            React.createElement("input", {type: "checkbox", className: "pull-right", checked: ""})
	                                        ), 
	                                        React.createElement("p", null, 
	                                            "Allow the user to show his name in blog posts"
	                                        )
	                                    ), 
	                                    /* /.form-group */

	                                    React.createElement("h3", {className: "control-sidebar-heading"}, "Chat Settings"), 

	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Show me as online", 
	                                            React.createElement("input", {type: "checkbox", className: "pull-right", checked: ""})
	                                        )
	                                    ), 
	                                    /* /.form-group */

	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Turn off notifications", 
	                                            React.createElement("input", {type: "checkbox", className: "pull-right"})
	                                        )
	                                    ), 
	                                    /* /.form-group */

	                                    React.createElement("div", {className: "form-group"}, 
	                                        React.createElement("label", {className: "control-sidebar-subheading"}, 
	                                            "Delete chat history", 
	                                            React.createElement("a", {href: "javascript::;", className: "text-red pull-right"}, React.createElement("i", {className: "fa fa-trash-o"}))
	                                        )
	                                    )
	                                    /* /.form-group */
	                                )
	                            )
	                            /* /.tab-pane */
	                        )
	                    )
	                )
	            }
	        })

	        return ControlsMenu;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var HeaderMessages = React.createClass({displayName: "HeaderMessages",
	            componentDidMount:function(){

	            },
	    		render: function(){
	                var that = this;

	                var messageList = this.props.messages.map(function(messageDetails, iterator){
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
	    	})

	    	return HeaderMessages;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var HeaderNotifications = React.createClass({displayName: "HeaderNotifications",
	            componentDidMount:function(){

	            },
	    		render: function(){
	                var that = this;

	                var notificationList = this.props.notifications.map(function(notificationDetails, iterator){
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
	    	})

	    	return HeaderNotifications;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(2),
	        __webpack_require__(4),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var HeaderTasks = React.createClass({displayName: "HeaderTasks",
	            componentDidMount:function(){

	            },
	    		render: function(){
	                var that = this;
	                var stylePercentage, progressBarColor;

	                var taskList = this.props.tasks.map(function(taskDetails, iterator){
	                    stylePercentage = {
	                        width: taskDetails.percentage+'%'
	                    };

	                    if(taskDetails.percentage < 21){
	                        progressBarColor = 'progress-bar-red'
	                    }else if(taskDetails.percentage >20 && taskDetails.percentage < 41){
	                        progressBarColor = 'progress-bar-yellow'
	                    }else if(taskDetails.percentage >40 && taskDetails.percentage < 61){
	                        progressBarColor = 'progress-bar-green'
	                    }else if(taskDetails.percentage > 60){
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
	    	})

	    	return HeaderTasks;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ }
]);