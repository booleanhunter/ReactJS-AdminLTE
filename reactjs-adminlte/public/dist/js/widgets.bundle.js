webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @author Ashwin Hariharan
	 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(2),   
	        __webpack_require__(3),
	        __webpack_require__(13),
	        __webpack_require__(14)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDOM, $, commonFunctions, Widgets) {
	    	ReactDOM.render(React.createElement(Widgets, null),  document.getElementById('widgets-container'));

	    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))    

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var Contacts = React.createClass({displayName: "Contacts",
	            render: function() {

	                var contacts = this.props.contacts.map(function(contactDetails, iterator){
	                    return (
	                        React.createElement("li", {key: "contact"+iterator}, 
	                            React.createElement("a", {href: contactDetails.link}, 
	                                React.createElement("img", {className: "contacts-list-img", src: contactDetails.displayPicture}), 
	                                React.createElement("div", {className: "contacts-list-info"}, 
	                                    React.createElement("span", {className: "contacts-list-name"}, 
	                                        contactDetails.displayName, 
	                                    React.createElement("small", {className: "contacts-list-date pull-right"}, 
	                                        contactDetails.date
	                                    )
	                                ), 
	                                    React.createElement("span", {className: "contacts-list-msg"}, 
	                                        contactDetails.message
	                                    )
	                                )
	                                /* /.contacts-list-info */
	                            )
	                        )
	                    )
	                });

	                return (
	                    React.createElement("div", {className: "direct-chat-contacts"}, 
	                        React.createElement("ul", {className: "contacts-list"}, 
	                            contacts
	                            /* End Contact Item */
	                        )
	                        /* /.contatcts-list */
	                    )
	                )
	            }
	        });

	        return Contacts;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
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
/* 12 */,
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(3),
	        __webpack_require__(19),
	        __webpack_require__(20),
	        __webpack_require__(22),
	        __webpack_require__(23),
	        __webpack_require__(24),
	        __webpack_require__(25),
	        __webpack_require__(26),
	        __webpack_require__(21),
	        __webpack_require__(1),
	        __webpack_require__(28),
	        __webpack_require__(29),
	        __webpack_require__(30),
	        __webpack_require__(31),
	        __webpack_require__(32),
	        __webpack_require__(33)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, $, HeaderBar, NavigationMenu, InfoTile, ProgressBar, StatTile, SmallBox, ChatBox, Conversations, Contacts, ProfileCard, ProfileInfoList, ProfileInfoBlocks, Post, SocialButton, SocialInfo) {
	        var Widgets = React.createClass({displayName: "Widgets",
	            getInitialState: function() {
	                return {
	                    infoTileOptions: [],
	                    progressInfoTileOptions: [],
	                    statTileOptions: [],
	                    smallBoxOptions: [],
	                    smallBoxBorderedOptions: [],
	                    chatBoxOptions: [],
	                    profileCardOptions: [],
	                    postOptions: []
	                }
	            },
	            componentDidMount: function() {
	                var infoTileOptions = [{
	                    theme: 'bg-aqua',
	                    icon: 'fa-envelope-o',
	                    subject: 'Messages',
	                    stats: '1,410',
	                    content: ''
	                }, {
	                    theme: 'bg-green',
	                    icon: 'fa-flag-o',
	                    subject: 'Bookmarks',
	                    stats: '410',
	                    content: ''
	                }, {
	                    theme: 'bg-yellow',
	                    icon: 'fa-files-o',
	                    subject: 'Uploads',
	                    stats: '13,648',
	                    content: ''
	                }, {
	                    theme: 'bg-red',
	                    icon: 'fa-star-o',
	                    subject: 'Likes',
	                    stats: '93,139',
	                    content: ''
	                }];

	                var progressInfoTileOptions = [{
	                    theme: 'bg-aqua',
	                    icon: 'fa-bookmark-o',
	                    subject: 'Bookmarks',
	                    stats: '41,410',
	                    content: '',
	                    progressPercent: 70,
	                    progressDescription: '70% Increase in 30 Days',
	                    progressColor: 'white'
	                }, {
	                    theme: 'bg-green',
	                    icon: 'fa-thumbs-o-up',
	                    subject: 'Likes',
	                    stats: '41,410',
	                    content: '',
	                    progressPercent: 50,
	                    progressDescription: '50% Increase in 30 Days',
	                    progressColor: 'white'
	                }, {
	                    theme: 'bg-yellow',
	                    icon: 'fa-calendar',
	                    subject: 'Events',
	                    stats: '41,410',
	                    content: '',
	                    progressPercent: 70,
	                    progressDescription: '70% Increase in 30 Days',
	                    progressColor: 'white'
	                }, {
	                    theme: 'bg-red',
	                    icon: 'fa-comments-o',
	                    subject: 'comments',
	                    stats: '41,410',
	                    content: '',
	                    progressPercent: 70,
	                    progressDescription: '70% Increase in 30 Days',
	                    progressColor: 'white'
	                }];

	                var statTileOptions = [{
	                    theme: 'bg-aqua',
	                    icon: 'fa-shopping-cart',
	                    subject: 'New Orders',
	                    stats: '150',
	                    link: '#'
	                }, {
	                    theme: 'bg-green',
	                    icon: 'ion-stats-bars',
	                    subject: 'Bounce Rate',
	                    stats: '53%',
	                    link: '#'
	                }, {
	                    theme: 'bg-yellow',
	                    icon: 'ion-person-add',
	                    subject: 'User Registrations',
	                    stats: '44',
	                    link: '#'
	                }, {
	                    theme: 'bg-red',
	                    icon: 'ion-pie-graph',
	                    subject: 'Unique Visitors',
	                    stats: '65',
	                    link: '#'
	                }];

	                var smallBoxOptions = [{
	                    type: 'expandable', 
	                    theme: 'box-default',
	                    title: 'Expandable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'collapsable',
	                    theme: 'box-success',
	                    title: 'Collapsable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'removable', 
	                    theme: 'box-warning',
	                    title: 'Removable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'removable',
	                    theme: 'box-danger',
	                    loading: true,
	                    title: 'Loading state',
	                    content: 'The body of the box'      
	                }];

	                var smallBoxBorderedOptions = [{
	                    type: 'expandable', 
	                    theme: 'box-primary',
	                    border: true,
	                    title: 'Expandable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'collapsable',
	                    theme: 'box-warning',
	                    border: true,
	                    title: 'Collapsable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'removable', 
	                    theme: 'box-danger',
	                    border: true,
	                    title: 'Removable',
	                    content: 'The body of the box'
	                }, {
	                    type: 'removable',
	                    theme: 'box-info',
	                    loading: true,
	                    border: true,
	                    title: 'Loading state',
	                    content: 'The body of the box'      
	                }];

	                var chatBoxOptions = [{
	                    headerTheme: 'box-primary',
	                    notificationTheme: 'bg-light-blue',
	                    chatTheme: 'direct-chat-primary',
	                    buttonTheme: 'btn-primary',
	                    title: 'Direct Chat',
	                    notifications: 2,

	                    conversations: [{
	                        displayName: 'Alexander Pierce',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: '23 Jan 2:00 pm',
	                        message: "Is this template really for free? That's unbelievable!"
	                    }, {
	                        align: 'right',
	                        displayName: 'Sarah Bullock',
	                        displayPicture: '../dist/img/user3-128x128.jpg',
	                        date: '23 Jan 2:05 pm',    
	                        message: 'You better believe it!'
	                    }],

	                    contacts: [{
	                        displayName: 'Count Dracula',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        link: '#',
	                        date: '2/28/2015',
	                        message: 'How have you been? I was...'
	                    }, {
	                        displayName: 'Count Dracula',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        link: '#',
	                        date: '2/28/2015',
	                        message: 'How have you been? I was...'
	                    }]
	                }, {
	                    headerTheme: 'box-success',
	                    notificationTheme: 'bg-green',
	                    chatTheme: 'direct-chat-success',
	                    buttonTheme: 'btn-success',
	                    border: true,
	                    title: 'Direct Chat',
	                    notifications: 3,

	                    conversations: [{
	                        displayName: 'Alexander Pierce',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: '23 Jan 2:00 pm',
	                        message: "Is this template really for free? That's unbelievable!"
	                    }, {
	                        align: 'right',
	                        displayName: 'Sarah Bullock',
	                        displayPicture: '../dist/img/user3-128x128.jpg',
	                        date: '23 Jan 2:05 pm',    
	                        message: 'You better believe it!'
	                    }],

	                    contacts: [{
	                        displayName: 'Count Dracula',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        link: '#',
	                        date: '2/28/2015',
	                        message: 'How have you been? I was...'
	                    }]
	                }, {
	                    headerTheme: 'box-warning',
	                    notificationTheme: 'bg-yellow',
	                    chatTheme: 'direct-chat-warning',
	                    buttonTheme: 'btn-warning',
	                    title: 'Direct Chat',
	                    notifications: 4,

	                    conversations: [{
	                        displayName: 'Alexander Pierce',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: '23 Jan 2:00 pm',
	                        message: "Is this template really for free? That's unbelievable!"
	                    }, {
	                        align: 'right',
	                        displayName: 'Sarah Bullock',
	                        displayPicture: '../dist/img/user3-128x128.jpg',
	                        date: '23 Jan 2:05 pm',    
	                        message: 'You better believe it!'
	                    }],

	                    contacts: [{
	                        displayName: 'Count Dracula',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        link: '#',
	                        date: '2/28/2015',
	                        message: 'How have you been? I was...'
	                    }]
	                }, {
	                    headerTheme: 'box-danger',
	                    notificationTheme: 'bg-red',
	                    chatTheme: 'direct-chat-danger',
	                    buttonTheme: 'btn-danger',
	                    title: 'Direct Chat',
	                    notifications: 5,

	                    conversations: [{
	                        displayName: 'Alexander Pierce',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: '23 Jan 2:00 pm',
	                        message: "Is this template really for free? That's unbelievable!"
	                    }, {
	                        align: 'right',
	                        displayName: 'Sarah Bullock',
	                        displayPicture: '../dist/img/user3-128x128.jpg',
	                        date: '23 Jan 2:05 pm',    
	                        message: 'You better believe it!'
	                    }],

	                    contacts: [{
	                        displayName: 'Count Dracula',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        link: '#',
	                        date: '2/28/2015',
	                        message: 'How have you been? I was...'
	                    }]
	                }],

	                profileCardOptions = [
	                    {
	                        theme: 'bg-yellow',
	                        displayName: 'Nadia Carmichael',
	                        description: 'Lead Developer',
	                        displayPicture: '../dist/img/user7-128x128.jpg',
	                        pictureAlignment: 'left',
	                        infoList: [{
	                            description: 'Projects',
	                            stats: 31,
	                            link: '#',
	                            badgeTheme: 'bg-blue'
	                        }, {
	                            description: 'Tasks',
	                            stats: 5,
	                            link: '#',
	                            badgeTheme: 'bg-aqua'
	                        }, {
	                            description: 'Completed Projects',
	                            stats: 12,
	                            link: '#',
	                            badgeTheme: 'bg-green'
	                        }, {
	                            description: 'Followers',
	                            stats: 842,
	                            link: '#',
	                            badgeTheme: 'bg-red'
	                        }]
	                    }, {
	                        theme: 'bg-aqua-active',
	                        displayName: 'Alexander Pierce',
	                        description: 'Founder & CEO',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        infoList: [{
	                            description: 'SALES',
	                            stats: '3,200'
	                        }, {
	                            description: 'FOLLOWERS',
	                            stats: '13,000'
	                        }, {
	                            description: 'PRODUCTS',
	                            stats: 35
	                        }]
	                    }, {
	                        theme: 'bg-black',
	                        displayName: 'Elizabeth Pierce',
	                        description: 'Web Designer',
	                        displayPicture: '../dist/img/user3-128x128.jpg',
	                        coverPicture: '../dist/img/photo1.png',
	                        infoList: [{
	                            description: 'SALES',
	                            stats: '3,200'
	                        }, {
	                            description: 'FOLLOWERS',
	                            stats: '13,000'
	                        }, {
	                            description: 'PRODUCTS',
	                            stats: 35
	                        }]
	                    }
	                ];

	                var postOptions = [
	                    {
	                        displayName: 'Jonathan Burke Jr.',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: 'Shared publicly - 7:30 PM Today',
	                        postPicture: '../dist/img/photo2.png',
	                        content: 'I took this photo this morning. What do you guys think?',
	                        socialInfo: '127 likes - 3 comments',
	                        comments: [
	                            {
	                                displayName: 'Maria Gonzales',
	                                displayPicture: '../dist/img/user3-128x128.jpg',
	                                date: '8:03 PM Today',
	                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	                            }, {
	                                displayName: 'Luna Stark',
	                                displayPicture: '../dist/img/user4-128x128.jpg',
	                                date: '8:03 PM Today',
	                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	                            }
	                        ]
	                    }, {
	                        displayName: 'Jonathan Burke Jr.',
	                        displayPicture: '../dist/img/user1-128x128.jpg',
	                        date: 'Shared publicly - 7:30 PM Today',
	                        content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
	                        socialInfo: '45 likes - 2 comments',
	                        attachments: [
	                            {
	                                title: 'Lorem ipsum text generator',
	                                link: 'http://www.lipsum.com/',
	                                picture: '../dist/img/photo1.png',
	                                content: 'Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	                            }
	                        ],
	                        comments: [
	                            {
	                                displayName: 'Maria Gonzales',
	                                displayPicture: '../dist/img/user3-128x128.jpg',
	                                date: '8:03 PM Today',
	                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	                            }, {
	                                displayName: 'Nora Havisham',
	                                displayPicture: '../dist/img/user5-128x128.jpg',
	                                date: '8:03 PM Today',
	                                content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
	                            }
	                        ]
	                    }
	                ];

	                this.setState({
	                    infoTileOptions: infoTileOptions,
	                    progressInfoTileOptions: progressInfoTileOptions,
	                    statTileOptions: statTileOptions,
	                    smallBoxOptions: smallBoxOptions,
	                    smallBoxBorderedOptions: smallBoxBorderedOptions,
	                    chatBoxOptions: chatBoxOptions,
	                    profileCardOptions: profileCardOptions,
	                    postOptions: postOptions
	                });
	            },
	            render: function() {
	                var infoTileWidgets = this.state.infoTileOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(InfoTile, {
	                            key: "rowOne"+iterator, 
	                            width: 3, 
	                            content: "", 
	                            icon: options.icon, 
	                            stats: options.stats, 
	                            subject: options.subject, 
	                            theme: options.theme})
	                    )
	                });

	                var progressInfoTileWidgets = this.state.progressInfoTileOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(InfoTile, {
	                            key: "rowTwo"+iterator, 
	                            width: 3, 
	                            content: "", 
	                            icon: options.icon, 
	                            stats: options.stats, 
	                            subject: options.subject, 
	                            theme: options.theme}, 
	                            React.createElement(ProgressBar, {percent: options.progressPercent, description: options.progressDescription, color: options.progressColor})
	                        )    
	                    )
	                });

	                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(StatTile, {
	                            key: "rowThree"+iterator, 
	                            width: 3, 
	                            icon: options.icon, 
	                            link: options.link, 
	                            stats: options.stats, 
	                            subject: options.subject, 
	                            theme: options.theme})
	                    )
	                });

	                var smallBoxWidgets = this.state.smallBoxOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(SmallBox, {
	                            key: "rowFour"+iterator, 
	                            width: 3, 
	                            border: false, 
	                            content: options.content, 
	                            loading: options.loading, 
	                            theme: options.theme, 
	                            title: options.title, 
	                            type: options.type})
	                    )
	                });

	                var smallBoxBorderedWidgets = this.state.smallBoxBorderedOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(SmallBox, {
	                            key: "rowFive"+iterator, 
	                            width: 3, 
	                            border: options.border, 
	                            content: options.content, 
	                            loading: options.loading, 
	                            theme: options.theme, 
	                            title: options.title, 
	                            type: options.type})
	                    )
	                });

	                var chatBoxWidgets = this.state.chatBoxOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(ChatBox, {
	                            key: "rowSix"+iterator, 
	                            width: 3, 
	                            buttonTheme: options.buttonTheme, 
	                            chatTheme: options.chatTheme, 
	                            headerTheme: options.headerTheme, 
	                            notificationTheme: options.notificationTheme, 
	                            title: options.title, 
	                            notifications: options.notifications, 
	                            border: options.border}, 

	                            React.createElement(Conversations, {conversations: options.conversations}), 
	                            React.createElement(Contacts, {contacts: options.contacts})

	                        )

	                    )
	                });

	                var ProfileCardWidgets = this.state.profileCardOptions.map(function (options, iterator) {
	                    if(options.pictureAlignment === 'left'){
	                        return (
	                            React.createElement(ProfileCard, {
	                                key: "rowSeven"+iterator, 
	                                width: 4, 
	                                theme: options.theme, 
	                                displayName: options.displayName, 
	                                description: options.description, 
	                                displayPicture: options.displayPicture, 
	                                pictureAlignment: options.pictureAlignment, 
	                                coverPicture: options.coverPicture}, 

	                                React.createElement(ProfileInfoList, {list: options.infoList})

	                            )
	                        )
	                    }else{
	                        return (
	                            React.createElement(ProfileCard, {
	                                key: "rowSeven"+iterator, 
	                                width: 4, 
	                                theme: options.theme, 
	                                displayName: options.displayName, 
	                                description: options.description, 
	                                displayPicture: options.displayPicture, 
	                                coverPicture: options.coverPicture}, 

	                                React.createElement(ProfileInfoBlocks, {list: options.infoList})

	                            )
	                        )
	                    }
	                });

	                var posts = this.state.postOptions.map(function (options, iterator) {
	                    return (
	                        React.createElement(Post, {
	                            key: "rowEight"+iterator, 
	                            width: 6, 
	                            displayName: options.displayName, 
	                            displayPicture: options.displayPicture, 
	                            date: options.date, 
	                            postPicture: options.postPicture, 
	                            content: options.content, 
	                            attachments: options.attachments, 
	                            comments: options.comments}, 

	                            React.createElement(SocialButton, {type: "like"}), 
	                            React.createElement(SocialButton, {type: "share"}), 
	                            React.createElement(SocialInfo, {info: options.socialInfo})
	                        )

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
	                                    infoTileWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    progressInfoTileWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    statTileWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    smallBoxWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    smallBoxBorderedWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    chatBoxWidgets
	                                ), 
	                                React.createElement("h2", {className: "page-header"}, "Social Widgets"), 
	                                React.createElement("div", {className: "row"}, 
	                                    ProfileCardWidgets
	                                ), 

	                                React.createElement("div", {className: "row"}, 
	                                    posts
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

	        return Widgets;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(3),
	        __webpack_require__(47),
	        __webpack_require__(48),
	        __webpack_require__(49)
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var Conversations = React.createClass({displayName: "Conversations",
	            render: function() {

	                var conversations = this.props.conversations.map(function(messageDetails, iterator){
	                    return (
	                        React.createElement("div", {className: "direct-chat-msg " + messageDetails.align, key: "message"+iterator}, 
	                            React.createElement("div", {className: "direct-chat-info clearfix"}, 
	                                React.createElement("span", {className: "direct-chat-name pull-right"}, 
	                                    messageDetails.displayName
	                                ), 
	                                React.createElement("span", {className: "direct-chat-timestamp pull-left"}, 
	                                    messageDetails.date
	                                )
	                            ), 
	                            /* /.direct-chat-info */
	                            React.createElement("img", {className: "direct-chat-img", src: messageDetails.displayPicture, alt: "message user image"}), 
	                            /* /.direct-chat-img */
	                            React.createElement("div", {className: "direct-chat-text"}, 
	                                messageDetails.message
	                            )
	                            /* /.direct-chat-text */
	                        )
	                    )
	                });

	                return (      
	                    React.createElement("div", {className: "direct-chat-messages"}, 
	                        /* Message. Default to the left */
	                        conversations
	                    )
	                )
	                
	            }
	        });

	        return Conversations;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var InfoTile = React.createClass({displayName: "InfoTile",
	            getDefaultProps: function() {
	                return {
	                    content: '',
	                    icon: 'fa-star-o',
	                    stats: '0',
	                    subject: 'Default Subject',
	                    theme: 'bg-aqua'      
	                }
	            },
	            render: function() {
	                
	                if(this.props.children){
	                    return (
	                        React.createElement("div", {className: "col-md-"+this.props.width+" col-sm-6 col-xs-12"}, 
	                            React.createElement("div", {className: "info-box "+this.props.theme}, 
	                                React.createElement("span", {className: "info-box-icon"}, 
	                                    React.createElement("i", {className: "fa "+this.props.icon})
	                                ), 

	                                React.createElement("div", {className: "info-box-content"}, 
	                                    React.createElement("span", {className: "info-box-text"}, this.props.subject), 
	                                    React.createElement("span", {className: "info-box-number"}, this.props.stats), 
	                                    this.props.children
	                                ), 
	                                
	                                this.props.content
	                            )
	                        )
	                    )       
	                }else{
	                    return (
	                        React.createElement("div", {className: "col-md-3 col-sm-6 col-xs-12"}, 
	                            React.createElement("div", {className: "info-box"}, 
	                                React.createElement("span", {className: "info-box-icon " + this.props.theme}, 
	                                    React.createElement("i", {className: "fa "+this.props.icon})
	                                ), 

	                                React.createElement("div", {className: "info-box-content"}, 
	                                    React.createElement("span", {className: "info-box-text"}, this.props.subject), 
	                                    React.createElement("span", {className: "info-box-number"}, this.props.stats)
	                                ), 
	                                
	                                this.props.content
	                            )
	                        )
	                    )
	                }                
	            }
	        });

	        return InfoTile;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var ProgressBar = React.createClass({displayName: "ProgressBar",
	            getDefaultProps: function() {
	                return {
	                    percent: 50,
	                    description: 'Default progress 50%',
	                    color: 'white'
	                }
	            },
	            render: function() {
	                var that = this;

	                var style = {
	                    width: this.props.percent + '%',
	                    backgroundColor: this.props.color
	                };

	                return (
	                    React.createElement("div", null, 
	                        React.createElement("div", {className: "progress"}, 
	                            React.createElement("div", {className: "progress-bar", style: style})
	                        ), 
	                        React.createElement("span", {className: "progress-description"}, 
	                            this.props.description
	                        )
	                    )
	                )
	            }
	        });

	        return ProgressBar;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var StatTile = React.createClass({displayName: "StatTile",
	            getDefaultProps: function() {
	                return {
	                    color: 'bg-yellow',
	                    icon: 'ion-person-add',
	                    subject: 'Default Subject',
	                    stats: '0',
	                    link: '/default/link'
	                }
	            },
	            render: function() {
	                var link = '',
	                    stats = React.createElement("h3", null, " ", this.props.stats, " ");

	                if(this.props.link) {
	                    link =
	                        React.createElement("a", {href: this.props.link, className: "small-box-footer"}, 
	                            "More info ", React.createElement("i", {className: "fa fa-arrow-circle-right"})
	                        );
	                }

	                if(this.props.stats.indexOf('%') !== -1) {
	                    var style = {
	                        fontSize: '20px'
	                    };

	                    stats =
	                        React.createElement("h3", null, 
	                            this.props.stats.replace(/%/g, ''), 
	                            React.createElement("sup", {style: style}, "%")
	                        )
	                }

	                return(
	                    React.createElement("div", {className: "col-lg-"+this.props.width+" col-xs-6"}, 
	                        React.createElement("div", {className: "small-box "+this.props.theme}, 
	                            React.createElement("div", {className: "inner"}, 
	                                stats, 
	                                React.createElement("p", null, this.props.subject)
	                            ), 
	                            React.createElement("div", {className: "icon"}, 
	                                React.createElement("i", {className: "fa "+this.props.icon})
	                            ), 
	                            link
	                        )
	                    )
	                )
	            }
	        });

	        return StatTile;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(2),
	        __webpack_require__(13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, ReactDOM, commonFunctions) {
	        var SmallBox = React.createClass({displayName: "SmallBox",
	            getDefaultProps: function() {
	                return {
	                    type: 'expandable',
	                    theme: 'box-default',
	                    loading: false,
	                    border: true,
	                    title: 'Default title',
	                    content: 'Default content',
	                }
	            },
	            toggleCollapse: function(event) {
	                var box = ReactDOM.findDOMNode(this).children[0],
	                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
	                    icon = event.currentTarget.children[0];

	                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
	            },
	            removeBox: function(event){
	                var box = ReactDOM.findDOMNode(this).children[0];
	                commonFunctions.removeBox(box);
	            },
	            render: function() {
	                var that = this,
	                    boxClassname, button, borderClass, loadingState;

	                switch(this.props.type){
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

	                    case 'removable':
	                        boxClassname = '';
	                        button = 
	                            React.createElement("button", {className: "btn btn-box-tool", dataWidget: "remove", onClick: that.removeBox}, 
	                                React.createElement("i", {className: "fa fa-times"})
	                            );
	                        break; 
	                }

	                if(this.props.loading === true){
	                    loadingState = 
	                        React.createElement("div", {className: "overlay"}, 
	                            React.createElement("i", {className: "fa fa-refresh fa-spin"})
	                        )
	                }

	                if(this.props.border === true){
	                    borderClass = 'box-solid';
	                }

	                return(
	                    React.createElement("div", {className: "col-md-"+this.props.width}, 
	                        React.createElement("div", {className: "box"+" " + this.props.theme+" " + boxClassname + " "+borderClass}, 
	                            React.createElement("div", {className: "box-header with-border"}, 
	                                React.createElement("h3", {className: "box-title"}, this.props.title), 
	                                React.createElement("div", {className: "box-tools pull-right"}, 
	                                    button
	                                )
	                                /* /.box-tools */
	                            ), 
	                            /* /.box-header */
	                            React.createElement("div", {className: "box-body"}, 
	                                this.props.content
	                            ), 
	                            /* /.box-body */
	                            loadingState
	                        )
	                    )
	                )
	            }
	        })

	        return SmallBox;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(2),
	        __webpack_require__(13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, ReactDOM, commonFunctions) {
	        var ChatBox = React.createClass({displayName: "ChatBox",
	            getDefaultProps: function() {
	                return {
	                    headerTheme: 'box-primary',
	                    notificationTheme: 'bg-light-blue',
	                    chatTheme: 'direct-chat-primary',
	                    buttonTheme: 'btn-primary',
	                    title: 'Chat Box',
	                    notifications: 0   
	                }
	            },
	            toggleCollapse: function(event) {
	                var box = ReactDOM.findDOMNode(this).children[0],
	                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
	                    icon = event.currentTarget.children[0];

	                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
	            },
	            removeBox: function(event){
	                var box = ReactDOM.findDOMNode(this).children[0];
	                commonFunctions.removeBox(box);
	            },
	            toggleChat: function(){
	                var box = ReactDOM.findDOMNode(this).children[0];

	                if(box.className.indexOf('direct-chat-contacts-open') === -1){
	                    box.className += ' direct-chat-contacts-open';
	                }else{
	                    box.className = box.className.replace(/ direct-chat-contacts-open/g,'');
	                }
	            },
	            render: function() {
	                var borderClass = '', that = this;
	                var a = React.Children.map(this.props.children, function(child){
	                    return child
	                });
	                console.log(a);
	                if(this.props.border === true){
	                    borderClass = 'box-solid';
	                }

	                return (
	                    React.createElement("div", {className: "col-md-"+this.props.width}, 
	                        /* DIRECT CHAT PRIMARY */
	                        React.createElement("div", {className: "box " + this.props.headerTheme + " direct-chat " + this.props.chatTheme + " " + borderClass}, 
	                            React.createElement("div", {className: "box-header with-border"}, 
	                                React.createElement("h3", {className: "box-title"}, this.props.title), 
	                                React.createElement("div", {className: "box-tools pull-right"}, 
	                                    React.createElement("span", {"data-toggle": "tooltip", title: "", className: "badge "+this.props.notificationTheme, 
	                                        "data-original-title": this.props.notifications+ " New Messages"}, 
	                                        this.props.notifications
	                                    ), 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-widget": "collapse", onClick: that.toggleCollapse}, 
	                                        React.createElement("i", {className: "fa fa-minus"})
	                                    ), 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-toggle": "tooltip", title: "", "data-widget": "chat-pane-toggle", "data-original-title": "Contacts", onClick: that.toggleChat}, 
	                                        React.createElement("i", {className: "fa fa-comments"})
	                                    ), 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-widget": "remove", onClick: that.removeBox}, 
	                                        React.createElement("i", {className: "fa fa-times"})
	                                    )
	                                )
	                            ), 
	                            /* /.box-header */
	                            React.createElement("div", {className: "box-body"}, 
	                                this.props.children
	                            ), 
	                            /* /.box-body */
	                            React.createElement("div", {className: "box-footer"}, 
	                                React.createElement("form", {action: "#", method: "post"}, 
	                                    React.createElement("div", {className: "input-group"}, 
	                                        React.createElement("input", {type: "text", name: "message", placeholder: "Type Message ...", className: "form-control"}), 
	                                        React.createElement("span", {className: "input-group-btn"}, 
	                                            React.createElement("button", {type: "button", className: "btn btn-flat "+this.props.buttonTheme}, "Send")
	                                        )
	                                    )
	                                )
	                            )
	                            /* /.box-footer*/
	                        )
	                        /*/.direct-chat */
	                    )
	                )
	                
	            }
	        });

	        return ChatBox;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var ProfileCard = React.createClass({displayName: "ProfileCard",
	            getDefaultProps: function() {
	                return {
	                    pictureAlignment: 'center',
	                    theme: 'bg-yellow',
	                    displayName: 'John Doe',
	                    description: 'My profile description',
	                    displayPicture: '../dist/img/user7-128x128.jpg'   
	                }
	            },
	            render: function() {
	                var coverPicture = {}, alignmentType = 'widget-user', footerPadding = '';
	                
	                if(this.props.pictureAlignment === 'left'){
	                    alignmentType = 'widget-user-2';
	                    footerPadding = 'no-padding';
	                }

	                if(this.props.coverPicture){
	                    coverPicture = {
	                        background: 'url('+this.props.coverPicture+') center'
	                    };
	                }

	                return (
	                    React.createElement("div", {className: "col-md-"+this.props.width}, 
	                        /* Widget: user widget style 1 */
	                        React.createElement("div", {className: "box box-widget "+alignmentType}, 
	                            /* Add the bg color to the header using any of the bg-* classes */
	                            React.createElement("div", {className: "widget-user-header "+this.props.theme, style: coverPicture}, 
	                                React.createElement("div", {className: "widget-user-image"}, 
	                                    React.createElement("img", {className: "img-circle", src: this.props.displayPicture, alt: "User Avatar"})
	                                ), 
	                                /* /.widget-user-image */
	                                React.createElement("h3", {className: "widget-user-username"}, this.props.displayName), 
	                                React.createElement("h5", {className: "widget-user-desc"}, this.props.description)
	                            ), 
	                            React.createElement("div", {className: "box-footer "+footerPadding}, 
	                                this.props.children
	                            )
	                        )
	                        /* /.widget-user */
	                    )
	                )
	                
	            }
	        });

	        return ProfileCard;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var ProfileInfoList = React.createClass({displayName: "ProfileInfoList",
	            render: function() {
	                var listItems = this.props.list.map(function(info, iterator){
	                    return (
	                        React.createElement("li", {key: iterator}, 
	                            React.createElement("a", {href: info.link}, 
	                                info.description, 
	                                React.createElement("span", {className: "pull-right badge "+info.badgeTheme}, 
	                                    info.stats
	                                )
	                            )
	                        )
	                    )
	                });

	                return (
	                    React.createElement("ul", {className: "nav nav-stacked"}, 
	                        listItems
	                    )
	                )   
	            }
	        });

	        return ProfileInfoList;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var ProfileInfoBlocks = React.createClass({displayName: "ProfileInfoBlocks",
	            render: function() {
	                var descriptionBlocks = this.props.list.map(function(info, iterator){
	                    return (
	                        React.createElement("div", {className: "col-sm-4 border-right", key: iterator}, 
	                            React.createElement("div", {className: "description-block"}, 
	                                React.createElement("h5", {className: "description-header"}, info.stats), 
	                                React.createElement("span", {className: "description-text"}, info.description)
	                            )
	                            /* /.description-block */
	                        )
	                    )
	                });

	                return (
	                    React.createElement("div", {className: "row"}, 
	                        descriptionBlocks
	                    )
	                )   
	            }
	        });

	        return ProfileInfoBlocks;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(2),
	        __webpack_require__(50),
	        __webpack_require__(51),
	        __webpack_require__(13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, ReactDOM, Comment, Attachment, commonFunctions) {
	        var Post = React.createClass({displayName: "Post",
	            getDefaultProps: function() {
	                return {
	                    displayName: 'John Doe',
	                    description: 'My profile description',
	                    displayPicture: '../dist/img/user7-128x128.jpg'   
	                }
	            },
	            toggleCollapse: function(event) {
	                var box = ReactDOM.findDOMNode(this).children[0],
	                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
	                    icon = event.currentTarget.children[0];

	                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
	            },
	            removeBox: function(event){
	                var box = ReactDOM.findDOMNode(this).children[0];
	                commonFunctions.removeBox(box);
	            },
	            render: function() {
	                var postPicture = '', attachments = [], comments = [];

	                if(this.props.postPicture){
	                    postPicture = React.createElement("img", {className: "img-responsive pad", src: this.props.postPicture, alt: "Photo"});
	                }

	                if(this.props.attachments){
	                    attachments = this.props.attachments.map(function(attachmentDetails, iterator){
	                        return (
	                            React.createElement(Attachment, {key: iterator, 
	                                title: attachmentDetails.title, 
	                                picture: attachmentDetails.picture, 
	                                link: attachmentDetails.link, 
	                                content: attachmentDetails.content})
	                        )
	                    });
	                }

	                if(this.props.comments){
	                    comments = this.props.comments.map(function(commentDetails, iterator){
	                        return (
	                            React.createElement(Comment, {key: iterator, 
	                                displayName: commentDetails.displayName, 
	                                displayPicture: commentDetails.displayPicture, 
	                                date: commentDetails.date, 
	                                content: commentDetails.content})
	                        )
	                    });
	                }

	                return (
	                    React.createElement("div", {className: "col-md-"+this.props.width}, 
	                        React.createElement("div", {className: "box box-widget"}, 
	                            React.createElement("div", {className: "box-header with-border"}, 
	                                React.createElement("div", {className: "user-block"}, 
	                                    React.createElement("img", {className: "img-circle", src: this.props.displayPicture, alt: "user image"}), 
	                                    React.createElement("span", {className: "username"}, 
	                                        React.createElement("a", {href: "#"}, this.props.displayName)
	                                    ), 
	                                    React.createElement("span", {className: "description"}, this.props.date)
	                                ), 
	                                /* /.user-block */
	                                React.createElement("div", {className: "box-tools"}, 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-toggle": "tooltip", title: "Mark as read"}, 
	                                        React.createElement("i", {className: "fa fa-circle-o"})
	                                    ), 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-widget": "collapse", onClick: this.toggleCollapse}, 
	                                        React.createElement("i", {className: "fa fa-minus"})
	                                    ), 
	                                    React.createElement("button", {className: "btn btn-box-tool", "data-widget": "remove", onClick: this.removeBox}, 
	                                        React.createElement("i", {className: "fa fa-times"})
	                                    )
	                                )
	                                /* /.box-tools */
	                            ), 
	                            /* /.box-header */
	                            React.createElement("div", {className: "box-body"}, 
	                                postPicture, 
	                                React.createElement("p", null, this.props.content), 
	                                attachments, 
	                                this.props.children
	                            ), 
	                            /* /.box-body */
	                            React.createElement("div", {className: "box-footer box-comments"}, 
	                                comments
	                                /* /.box-comment */
	                            ), 
	                            /* /.box-footer */
	                            React.createElement("div", {className: "box-footer"}, 
	                                React.createElement("form", {action: "#", method: "post"}, 
	                                    React.createElement("img", {className: "img-responsive img-circle img-sm", src: "../dist/img/user4-128x128.jpg", alt: "alt text"}), 
	                                    /* .img-push is used to add margin to elements next to floating images */
	                                    React.createElement("div", {className: "img-push"}, 
	                                        React.createElement("input", {type: "text", className: "form-control input-sm", placeholder: "Press enter to post comment"})
	                                    )
	                                )
	                            )
	                            /* /.box-footer */
	                        )
	                    )
	                )
	                
	            }
	        });

	        return Post;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var SocialButton = React.createClass({displayName: "SocialButton",
	            getDefaultProps: function() {
	                return {
	                    position: '',
	                    type: 'like',
	                    theme: 'btn-default'
	                }
	            },
	            render: function() {
	                var position;
	                switch(this.props.position){
	                    case 'left':
	                        position = 'pull-left';
	                        break;
	                    case 'right':
	                        position = 'pull-right';
	                        break;
	                    default:
	                        position = ''
	                }

	                if(this.props.type === 'like'){
	                    return (
	                        React.createElement("button", {className: "btn btn-xs "+position+" "+this.props.theme}, 
	                            React.createElement("i", {className: "fa fa-thumbs-o-up"}), 
	                            "Like"
	                        )
	                        
	                    )
	                }else if(this.props.type === 'share'){
	                    return (
	                        React.createElement("button", {className: "btn btn-xs "+position+" "+this.props.theme}, 
	                            React.createElement("i", {className: "fa fa-share"}), 
	                            "Share"
	                        )
	                    )
	                }
	                
	            }
	        });

	        return SocialButton;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var SocialInfo = React.createClass({displayName: "SocialInfo",
	            getDefaultProps: function() {
	                return {
	                    info: '',
	                    position: 'pull-right'
	                }
	            },
	            render: function() {
	                var position = '';
	                switch(this.props.position){
	                    case 'left':
	                        position = 'pull-left';
	                        break;
	                    case 'right':
	                        position = 'pull-right';
	                        break;
	                    default:
	                        position = 'pull-right';
	                }

	                return (
	                    React.createElement("span", {className: "text-muted "+position}, 
	                        this.props.info
	                    )
	                )
	            }
	        });

	        return SocialInfo;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
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
/* 48 */
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
/* 49 */
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

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var Post = React.createClass({displayName: "Post",
	            getDefaultProps: function() {
	                return {
	                    content: 'sample comment',
	                    displayName: 'John Doe', 
	                    displayPicture: '../dist/img/user4-128x128.jpg',
	                    date: '8:03 PM Today'
	                }
	            },
	            render: function() {
	                return (
	                    React.createElement("div", {className: "box-comment"}, 
	                        /* User image */
	                        React.createElement("img", {className: "img-circle img-sm", src: this.props.displayPicture, alt: "user image"}), 
	                        React.createElement("div", {className: "comment-text"}, 
	                            React.createElement("span", {className: "username"}, 
	                                this.props.displayName, 
	                                React.createElement("span", {className: "text-muted pull-right"}, this.props.date)
	                            ), 
	                            /* /.username */
	                            this.props.content
	                        )
	                        /* /.comment-text */
	                    )
	                )
	            }
	        });

	        return Post;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	        var Attachment = React.createClass({displayName: "Attachment",
	            render: function() {
	                return (
	                    React.createElement("div", {className: "attachment-block clearfix"}, 
	                        React.createElement("img", {className: "attachment-img", src: this.props.picture, alt: "attachment image"}), 
	                        React.createElement("div", {className: "attachment-pushed"}, 
	                            React.createElement("h4", {className: "attachment-heading"}, 
	                                React.createElement("a", {href: this.props.link}, 
	                                    this.props.title
	                                )
	                            ), 
	                            React.createElement("div", {className: "attachment-text"}, 
	                                this.props.content, 
	                                React.createElement("a", {href: this.props.link}, "more")
	                            )
	                        )
	                    )
	                )
	            }
	        });

	        return Attachment;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }
]);