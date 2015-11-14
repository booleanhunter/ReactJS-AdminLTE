define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-widgets/info-tile/info-tile',
        './page-widgets/info-tile/progress-bar',
        './page-widgets/stat-tile',
        './page-widgets/small-box',
        './page-widgets/chat-box/chat-box',
        './page-widgets/chat-box/conversations',
        './page-widgets/chat-box/contacts'
    ],
    function (React, $, HeaderBar, NavigationMenu, InfoTile, ProgressBar, StatTile, SmallBox, ChatBox, Conversations, Contacts) {
        var Widgets = React.createClass({
            getInitialState: function() {
                return {
                    infoTileOptions: [],
                    progressInfoTileOptions: [],
                    statTileOptions: [],
                    smallBoxOptions: [],
                    smallBoxBorderedOptions: [],
                    chatBoxOptions: []
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
                        name: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        self: true,
                        name: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        name: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }, {
                        name: 'Count Dracula',
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
                        name: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        self: true,
                        name: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        name: 'Count Dracula',
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
                        name: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        self: true,
                        name: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        name: 'Count Dracula',
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
                        name: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        self: true,
                        name: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        name: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }]
                }];

                this.setState({
                    infoTileOptions: infoTileOptions,
                    progressInfoTileOptions: progressInfoTileOptions,
                    statTileOptions: statTileOptions,
                    smallBoxOptions: smallBoxOptions,
                    smallBoxBorderedOptions: smallBoxBorderedOptions,
                    chatBoxOptions: chatBoxOptions
                });
            },
            render: function() {
                var infoTileWidgets = this.state.infoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile 
                            key = {"rowOne"+iterator}
                            content = '' 
                            icon = {options.icon} 
                            stats = {options.stats} 
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });

                var progressInfoTileWidgets = this.state.progressInfoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile 
                            key = {"rowOne"+iterator} 
                            content='' 
                            icon = {options.icon} 
                            stats = {options.stats} 
                            subject = {options.subject} 
                            theme = {options.theme} >
                            <ProgressBar percent={options.progressPercent} description={options.progressDescription} color={options.progressColor} />
                        </InfoTile>    
                    )
                });

                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
                    return (
                        <StatTile 
                            key={"rowThree"+iterator}
                            icon = {options.icon} 
                            link = {options.link}
                            stats = {options.stats}
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });

                var smallBoxWidgets = this.state.smallBoxOptions.map(function (options, iterator) {
                    return (
                        <SmallBox 
                            key={"rowFour"+iterator} 
                            border = {false}
                            content = {options.content}
                            loading = {options.loading} 
                            theme = {options.theme}
                            title = {options.title} 
                            type = {options.type} />
                    )
                });

                var smallBoxBorderedWidgets = this.state.smallBoxBorderedOptions.map(function (options, iterator) {
                    return (
                        <SmallBox 
                            key={"rowFour"+iterator} 
                            border = {options.border}
                            content = {options.content}
                            loading = {options.loading} 
                            theme = {options.theme}
                            title = {options.title} 
                            type = {options.type} />
                    )
                });

                var chatBoxWidgets = this.state.chatBoxOptions.map(function (options, iterator) {
                    return (
                        <ChatBox 
                            key={"rowSix"+iterator} 
                            buttonTheme = {options.buttonTheme}
                            chatTheme = {options.chatTheme}
                            headerTheme = {options.headerTheme}
                            notificationTheme = {options.notificationTheme}
                            title = {options.title}
                            notifications = {options.notifications}
                            border = {options.border} >

                            <Conversations conversations = {options.conversations} />
                            <Contacts contacts = {options.contacts} />
                            
                        </ChatBox>

                    )
                });

                return (
                    <div className="wrapper">
                        <HeaderBar />
                        
                        <NavigationMenu />
                        
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Widgets
                                    <small>Preview page</small>
                                </h1>
                                {/*<ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>*/}
                            </section>

                            <section className="content">
                                <div className="row">
                                    {infoTileWidgets}
                                </div>

                                <div className="row">
                                    {progressInfoTileWidgets}         
                                </div>

                                <div className="row">
                                    {statTileWidgets}                
                                </div>

                                <div className="row">
                                    {smallBoxWidgets}       
                                </div>

                                <div className="row">
                                    {smallBoxBorderedWidgets}             
                                </div>

                                <div className="row">
                                    {chatBoxWidgets}               
                                </div>

                                <div className="row">
                                                     
                                </div>

                                <div className="row">
                                                     
                                </div>
                            </section>

                        </div>

                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                        </footer>

                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        return Widgets;
    }
)