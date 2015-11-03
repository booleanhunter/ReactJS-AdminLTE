webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
	        __webpack_require__(2),   
	        __webpack_require__(3),
	        __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDOM, $, Widgets) {
	    	ReactDOM.render(React.createElement(Widgets, null),  document.getElementById('widgets-container'));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))    

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
	        __webpack_require__(3),
	        __webpack_require__(26),
	        __webpack_require__(27),
	        __webpack_require__(28),
	        __webpack_require__(29),
	        __webpack_require__(30),
	        __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $, HeaderBar, NavigationMenu, InfoBox, ProgressInfoBox, StatBox, SmallWindow) {
	        var Widgets = React.createClass({displayName: "Widgets",
	            getInitialState: function() {
	                return {
	                    row1Options: [],
	                    row2Options: [],
	                    row3Options: [],
	                    row4Options: []
	                }
	            },
	            componentDidMount: function() {
	                var row1Options = [{
	                    color: 'bg-aqua',
	                    icon: 'fa-envelope-o',
	                    subject: 'Messages',
	                    stats: '1,410',
	                    content: ''
	                }, {
	                    color: 'bg-green',
	                    icon: 'fa-flag-o',
	                    subject: 'Bookmarks',
	                    stats: '410',
	                    content: ''
	                }, {
	                    color: 'bg-yellow',
	                    icon: 'fa-files-o',
	                    subject: 'Uploads',
	                    stats: '13,648',
	                    content: ''
	                }, {
	                    color: 'bg-red',
	                    icon: 'fa-star-o',
	                    subject: 'Likes',
	                    stats: '93,139',
	                    content: ''
	                }];

	                var row2Options = [{
	                    color: 'bg-aqua',
	                    icon: 'fa-bookmark-o',
	                    subject: 'Bookmarks',
	                    stats: '41,410',
	                    content: '',
	                    progress: {
	                        percent: 70,
	                        description: '70% Increase in 30 Days',
	                        color: 'white'
	                    }
	                }, {
	                    color: 'bg-green',
	                    icon: 'fa-thumbs-o-up',
	                    subject: 'Likes',
	                    stats: '41,410',
	                    content: '',
	                    progress: {
	                        percent: 50,
	                        description: '50% Increase in 30 Days',
	                        color: 'white'
	                    }
	                }, {
	                    color: 'bg-yellow',
	                    icon: 'fa-calendar',
	                    subject: 'Events',
	                    stats: '41,410',
	                    content: '',
	                    progress: {
	                        percent: 70,
	                        description: '70% Increase in 30 Days',
	                        color: 'white'
	                    }
	                }, {
	                    color: 'bg-red',
	                    icon: 'fa-comments-o',
	                    subject: 'comments',
	                    stats: '41,410',
	                    content: '',
	                    progress: {
	                        percent: 70,
	                        description: '70% Increase in 30 Days',
	                        color: 'white'
	                    }
	                }];

	                var row3Options = [{
	                    color: 'bg-aqua',
	                    icon: 'fa-shopping-cart',
	                    subject: 'New Orders',
	                    stats: '150',
	                    link: '#'
	                }, {
	                    color: 'bg-green',
	                    icon: 'ion-stats-bars',
	                    subject: 'Bounce Rate',
	                    stats: '53%',
	                    link: '#'
	                }, {
	                    color: 'bg-yellow',
	                    icon: 'ion-person-add',
	                    subject: 'User Registrations',
	                    stats: '44',
	                    link: '#'
	                }, {
	                    color: 'bg-red',
	                    icon: 'ion-pie-graph',
	                    subject: 'Unique Visitors',
	                    stats: '65',
	                    link: '#'
	                }];

	                var row4Options = [{
	                    type: 'collapsable', 
	                    title: 'Expandable',
	                    content: 'The body of the box'
	                }];

	                this.setState({
	                    row1Options: row1Options,
	                    row2Options: row2Options,
	                    row3Options: row3Options,
	                    row4Options: row4Options
	                });
	            },
	            render: function() {
	                var row1Elements = this.state.row1Options.map(function (options, iterator) {
	                    return (
	                        React.createElement(InfoBox, {options: options, key: "rowOne"+iterator})
	                    )
	                });

	                var row2Elements = this.state.row2Options.map(function (options, iterator) {
	                    return (
	                        React.createElement(ProgressInfoBox, {options: options, key: "rowTwo"+iterator})
	                    )
	                });

	                var row3Elements = this.state.row3Options.map(function (options, iterator) {
	                    return (
	                        React.createElement(StatBox, {options: options, key: "rowThree"+iterator})
	                    )
	                });

	                var row4Elements = this.state.row4Options.map(function (options, iterator) {
	                    return (
	                        React.createElement(SmallWindow, {options: options, key: "rowFour"+iterator})
	                    )
	                });

	                return (
	                    React.createElement("div", {className: "wrapper"}, 
	                        React.createElement(HeaderBar, null), 
	                        
	                        React.createElement(NavigationMenu, null), 
	                        
	                        React.createElement("div", {className: "content-wrapper"}, 
	                            React.createElement("section", {className: "content-header"}, 
	                                React.createElement("h1", null, 
	                                    "Widgets", 
	                                    React.createElement("small", null, "Preview page")
	                                )
	                                /*<ol className="breadcrumb">
	                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
	                                    <li className="active">Dashboard</li>
	                                </ol>*/
	                            ), 

	                            React.createElement("section", {className: "content"}, 
	                                React.createElement("div", {className: "row"}, 
	                                    row1Elements
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    row2Elements
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    row3Elements
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    row4Elements
	                                ), 

	                                React.createElement("div", {className: "row"}
	                                                     
	                                ), 

	                                React.createElement("div", {className: "row"}
	                                                     
	                                ), 

	                                React.createElement("div", {className: "row"}
	                                                     
	                                ), 

	                                React.createElement("div", {className: "row"}
	                                                     
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
	        });

	        return Widgets;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
	        __webpack_require__(3),
	        __webpack_require__(35),
	        __webpack_require__(36),
	        __webpack_require__(37)
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var InfoBox = React.createClass({displayName: "InfoBox",
	            getDefaultProps: function() {
	                return {
	                    options: {
	                        color: 'bg-red',
	                        icon: 'fa-star-o',
	                        subject: 'Default Subject',
	                        stats: '0',
	                        content: ''
	                    }
	                }
	            },
	            render: function() {
	                var that = this,
	                    options = this.props.options;

	                return (
	                    React.createElement("div", {className: "col-md-3 col-sm-6 col-xs-12"}, 
	                        React.createElement("div", {className: "info-box"}, 
	                            React.createElement("span", {className: "info-box-icon " + options.color}, 
	                                React.createElement("i", {className: "fa "+options.icon})
	                            ), 

	                            React.createElement("div", {className: "info-box-content"}, 
	                                React.createElement("span", {className: "info-box-text"}, options.subject), 
	                                React.createElement("span", {className: "info-box-number"}, options.stats)
	                            ), 
	                            
	                            options.content
	                        )
	                    )
	                )
	            }
	        });

	        return InfoBox;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var ProgressInfoBox = React.createClass({displayName: "ProgressInfoBox",
	            getDefaultProps: function() {
	                return {
	                    options: {
	                        color: 'bg-aqua',
	                        icon: 'fa-star-o',
	                        subject: 'Default Subject',
	                        stats: '0',
	                        content: '',
	                        progress: {
	                            percent: 50,
	                            description: 'Default progress 50%',
	                            color: 'white'
	                        }
	                    }
	                }
	            },
	            render: function() {
	                var that = this,
	                    options = this.props.options;

	                var style = {
	                    width: options.progress.percent + '%',
	                    backgroundColor: options.progress.color
	                };

	                return (
	                    React.createElement("div", {className: "col-md-3 col-sm-6 col-xs-12"}, 
	                        React.createElement("div", {className: "info-box "+options.color}, 
	                            React.createElement("span", {className: "info-box-icon"}, 
	                                React.createElement("i", {className: "fa "+options.icon})
	                            ), 

	                            React.createElement("div", {className: "info-box-content"}, 
	                                React.createElement("span", {className: "info-box-text"}, options.subject), 
	                                React.createElement("span", {className: "info-box-number"}, options.stats), 
	                                React.createElement("div", {className: "progress"}, 
	                                    React.createElement("div", {className: "progress-bar", style: style})
	                                ), 
	                                React.createElement("span", {className: "progress-description"}, 
	                                    options.progress.description
	                                )
	                            ), 
	                            
	                            options.content
	                        )
	                    )
	                )
	            }
	        });

	        return ProgressInfoBox;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var StatBox = React.createClass({displayName: "StatBox",
	            getDefaultProps: function() {
	                return {
	                    options: {
	                        color: 'bg-yellow',
	                        icon: 'ion-person-add',
	                        subject: 'Default Subject',
	                        stats: '0',
	                        link: '/default/link'
	                    }
	                }
	            },
	            render: function() {
	                var that = this,
	                    options = this.props.options;

	                var link = '',
	                    stats = React.createElement("h3", null, " ", options.stats, " ");

	                if(this.props.options.link) {
	                    link =
	                        React.createElement("a", {href: options.link, className: "small-box-footer"}, 
	                            "More info ", React.createElement("i", {className: "fa fa-arrow-circle-right"})
	                        );
	                }

	                if(options.stats.indexOf('%') !== -1) {
	                    var style = {
	                        fontSize: '20px'
	                    };

	                    stats =
	                        React.createElement("h3", null, 
	                            options.stats.replace(/%/g, ''), 
	                            React.createElement("sup", {style: style}, "%")
	                        )
	                }

	                return(
	                    React.createElement("div", {className: "col-lg-3 col-xs-6"}, 
	                        React.createElement("div", {className: "small-box "+options.color}, 
	                            React.createElement("div", {className: "inner"}, 
	                                stats, 
	                                React.createElement("p", null, options.subject)
	                            ), 
	                            React.createElement("div", {className: "icon"}, 
	                                React.createElement("i", {className: "fa "+options.icon})
	                            ), 
	                            link
	                        )
	                    )
	                )
	            }
	        });

	        return StatBox;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
	        __webpack_require__(2),
	        __webpack_require__(3)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, ReactDOM, $) {
	        var SmallWindow = React.createClass({displayName: "SmallWindow",
	            toggleCollapse: function(event) {
	                var box = ReactDOM.findDOMNode(this).children[0],
	                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
	                    icon = event.currentTarget.children[0],
	                    that = this;

	                if(box.className.indexOf('collapsed-box') !== -1) {
	                    icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');

	                    $(boxBody).slideDown(500, function () {
	                        box.className = box.className.replace(/ collapsed-box/g, '');
	                    });
	                } else {
	                    icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');

	                    $(boxBody).slideUp(500, function () {
	                        box.className += ' collapsed-box';
	                    });
	                }
	            },
	            render: function() {
	                var that = this,
	                    options = this.props.options,
	                    boxClassname, button;

	                switch(options.type){
	                    case 'expandable': 
	                        boxClassname = "collapsed-box";
	                        button = 
	                            React.createElement("button", {className: "btn btn-box-tool", dataWidget: "collapse", onClick: that.toggleCollapse}, 
	                                React.createElement("i", {className: "fa fa-plus"})
	                            );
	                        break;

	                    case 'collapsable':
	                        boxClassname = '';
	                        button = 
	                            React.createElement("button", {className: "btn btn-box-tool", dataWidget: "collapse", onClick: that.toggleCollapse}, 
	                                React.createElement("i", {className: "fa fa-minus"})
	                            );
	                        break;  
	                }

	                return(
	                    React.createElement("div", {className: "col-md-3"}, 
	                        React.createElement("div", {className: "box box-default "+boxClassname}, 
	                            React.createElement("div", {className: "box-header with-border"}, 
	                                React.createElement("h3", {className: "box-title"}, options.title), 
	                                React.createElement("div", {className: "box-tools pull-right"}, 
	                                    button
	                                )
	                                /* /.box-tools */
	                            ), 
	                            /* /.box-header */
	                            React.createElement("div", {className: "box-body"}, 
	                                options.content
	                            )
	                            /* /.box-body */
	                        )
	                    )
	                )
	            }
	        })

	        return SmallWindow;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18),
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18)
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(18)
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
]);