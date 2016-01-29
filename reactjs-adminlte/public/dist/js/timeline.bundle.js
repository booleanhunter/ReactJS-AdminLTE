webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33),
	        __webpack_require__(2),   
	        __webpack_require__(3),
	        __webpack_require__(15),
	        __webpack_require__(16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDOM, $, commonFunctions, TimelinePage) {
	    	ReactDOM.render(React.createElement(TimelinePage, null),  document.getElementById('timeline-container'));

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
	        __webpack_require__(33),
	        __webpack_require__(3),
	        __webpack_require__(47),
	        __webpack_require__(48),
	        __webpack_require__(49)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $, HeaderBar, NavigationMenu, Timeline) {
	        var TimelinePage = React.createClass({displayName: "TimelinePage",
	            getInitialState: function() {
	                return {
	                    timelineInfo: []
	                }
	            },
	            componentDidMount: function() {
	                var timelineInfo = [
	                    {
	                        startDate: '10 Feb. 2014',
	                        endDate: '3 Jan. 2014',
	                        items: [
	                            {
	                                icon: 'fa fa-envelope',
	                                iconTheme: 'bg-blue',
	                                time: ' 12:05',
	                                header: {
	                                    url: '#',
	                                    title: 'Support Team ',
	                                    content: 'sent you an email'
	                                },
	                                body: {
	                                    content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
	                                },
	                                footer: {
	                                    content: '',
	                                    markup: [
	                                        React.createElement("a", {key: "1", className: "btn btn-primary btn-xs"}, "Read more"),
	                                        React.createElement("a", {key: "2", className: "btn btn-danger btn-xs"}, "Delete")
	                                    ]
	                                }
	                            },
	                            {
	                                icon: 'fa fa-user',
	                                iconTheme: 'bg-aqua',
	                                time: ' 5 mins ago',
	                                header: {
	                                    url: '#',
	                                    title: 'Sarah Young ',
	                                    content: 'accepted your friend request'
	                                }
	                            },
	                            {
	                                icon: 'fa fa-comments',
	                                iconTheme: 'bg-yellow',
	                                time: ' 27 mins ago',
	                                header: {
	                                    url: '#',
	                                    title: 'Jay White ',
	                                    content: 'commented on your post'
	                                },
	                                body: {
	                                    content: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
	                                },
	                                footer: {
	                                    content: '',
	                                    markup: React.createElement("a", {className: "btn btn-warning btn-flat btn-xs"}, "View comment")
	                                }
	                            }
	                        ]
	                    },{
	                        items: [
	                            {
	                                icon: 'fa fa-camera',
	                                iconTheme: 'bg-purple',
	                                time: ' 2 days ago',
	                                header: {
	                                    url: '#',
	                                    title: 'Mina Lee ',
	                                    content: 'uploaded new photos'
	                                },
	                                body: {
	                                    content: '',
	                                    markup: [
	                                        React.createElement("img", {key: "1", src: "http://placehold.it/150x100", alt: "...", className: "margin"}),
	                                        React.createElement("img", {key: "2", src: "http://placehold.it/150x100", alt: "...", className: "margin"}),
	                                        React.createElement("img", {key: "3", src: "http://placehold.it/150x100", alt: "...", className: "margin"}),
	                                        React.createElement("img", {key: "4", src: "http://placehold.it/150x100", alt: "...", className: "margin"})
	                                    ]
	                                }
	                            },
	                            {
	                                icon: 'fa fa-video-camera',
	                                iconTheme: 'bg-maroon',
	                                time: ' 5 days ago',
	                                header: {
	                                    url: '#',
	                                    title: 'Mr. Doe ',
	                                    content: 'shared a video'
	                                },
	                                body: {
	                                    content: '',
	                                    markup: React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
	                                        React.createElement("iframe", {className: "embed-responsive-item", src: "https://www.youtube.com/embed/tMWkeBIohBs", frameBorder: "0", allowFullScreen: ""}
	                                        )
	                                    )
	                                },
	                                footer: {
	                                    content: '',
	                                    markup: React.createElement("a", {href: "#", className: "btn btn-xs bg-maroon"}, "See comments")
	                                }
	                            }
	                        ]       
	                    }
	                ];

	                this.setState({
	                    timelineInfo: timelineInfo
	                });
	            },
	            render: function() {
	                return (
	                    React.createElement("div", {className: "wrapper"}, 
	                        React.createElement(HeaderBar, null), 
	                        
	                        React.createElement(NavigationMenu, null), 
	                        
	                        React.createElement("div", {className: "content-wrapper"}, 
	                            React.createElement("section", {className: "content-header"}, 
	                                React.createElement("h1", null, 
	                                    "Timeline", 
	                                    React.createElement("small", null, "example")
	                                )
	                                /*<ol className="breadcrumb">
	                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
	                                    <li className="active">Dashboard</li>
	                                </ol>*/
	                            ), 

	                            React.createElement("section", {className: "content"}, 
	                                React.createElement("div", {className: "row"}, 
	                                    React.createElement(Timeline, {timelineInfo: this.state.timelineInfo})
	                                )

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

	        return TimelinePage;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33),
	        __webpack_require__(3),
	        __webpack_require__(60),
	        __webpack_require__(61),
	        __webpack_require__(62)
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

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33),
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

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33),
			__webpack_require__(63),
			__webpack_require__(64)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, TimeLabel, TimelineItem) {
			var Timeline = React.createClass({displayName: "Timeline",
				render: function(){
					var timelineInfo = [];

					if(this.props.children){
						timelineInfo = this.props.children;
					}else{
						this.props.timelineInfo.map(function(timelineElement, iterator){

							if(timelineElement.endDate){
								timelineInfo.push(React.createElement(TimeLabel, {key: "label1"+iterator, theme: "bg-red", content: timelineElement.endDate}));
							}
							
							timelineElement.items.map(function(item, i){
								timelineInfo.push(
									React.createElement(TimelineItem, {
										key: "item"+iterator+i, 
										icon: item.icon, 
										iconTheme: item.iconTheme, 
										time: item.time, 
										header: item.header, 
										body: item.body, 
									    footer: item.footer}
									)
								)
							});
							
							if(timelineElement.startDate){
								timelineInfo.push(React.createElement(TimeLabel, {key: "label2"+iterator, theme: "bg-green", content: timelineElement.startDate}))
							}	
						});
					}
					
					return (
						React.createElement("div", {className: "col-md-12"}, 
							React.createElement("ul", {className: "timeline"}, 
							    /* timeline time label */
							    timelineInfo, 
							    React.createElement("li", null, 
							        React.createElement("i", {className: "fa fa-clock-o bg-gray"})
							    )
							)
						)

					)
				}
			});

			return Timeline;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33),
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

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33)
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

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(33)
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

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function  (React) {
			var TimeLabel = React.createClass({displayName: "TimeLabel",
				getDefaultProps: function() {
				    return {
				        theme: 'bg-red',
				        content: 'Default content',
				    }
				},
				render: function(){
					return (
						React.createElement("li", {className: "time-label"}, 
						    React.createElement("span", {className: this.props.theme}, 
						        this.props.content
						    )
						)
					)
				}
			});

			return TimeLabel
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33),
			__webpack_require__(68),
			__webpack_require__(69),
			__webpack_require__(70)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function  (React, TimelineHeader, TimelineBody, TimelineFooter) {
			var TimelineItem = React.createClass({displayName: "TimelineItem",
				getDefaultProps: function() {
				    return {
				        icon: 'fa fa-coffee',
				        iconTheme: 'bg-blue',
				        time: '',   
				    }
				},
				render: function(){
					var body = '', footer = '';
					if(this.props.body){
						body = React.createElement(TimelineBody, {content: this.props.body.content}, 
						        	this.props.body.markup
						        )
					}

					if(this.props.footer){
						footer = React.createElement(TimelineFooter, {content: this.props.footer.content}, 
						        	this.props.footer.markup
						        )

					}

					return (
						React.createElement("li", null, 
						    React.createElement("i", {className: this.props.icon+" "+ this.props.iconTheme}), 

						    React.createElement("div", {className: "timeline-item"}, 
						        React.createElement("span", {className: "time"}, 
						        	React.createElement("i", {className: "fa fa-clock-o"}), 
						        	this.props.time
						        ), 

						        React.createElement(TimelineHeader, {url: this.props.header.url, title: this.props.header.title, content: this.props.header.content}), 

						        body, 

						        footer
						    )
						)
					)
				}
			});

			return TimelineItem
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function  (React) {
			var TimelineHeader = React.createClass({displayName: "TimelineHeader",
				render: function(){
					return (
				        React.createElement("h3", {className: "timeline-header"}, 
				        	React.createElement("a", {href: this.props.url, target: "_blank"}, this.props.title), 
				        	this.props.content, 
				        	this.props.children
				        )
					)
				}
			});

			return TimelineHeader
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function  (React) {
			var TimelineBody = React.createClass({displayName: "TimelineBody",
				getDefaultProps: function() {
				    return {
				        content: 'Sample content',   
				    }
				},
				render: function(){
					return (
				        React.createElement("div", {className: "timeline-body"}, 
				            this.props.content, 
				            this.props.children
				        )
					)
				}
			});

			return TimelineBody
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(33)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function  (React) {
			var TimelineFooter = React.createClass({displayName: "TimelineFooter",
				render: function(){
					return (
				        React.createElement("div", {className: "timeline-footer"}, 
				            this.props.content, 
				            this.props.children
				        )
					)
				}
			});

			return TimelineFooter
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }

});