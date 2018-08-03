import React, { Component } from 'react';
import HeaderMessages from '../../components/header-bar/header-messages/header-messages.jsx';
import HeaderNotifications from '../../components/header-bar/header-notifications/header-notifications.jsx';
import HeaderTasks from '../../components/header-bar/header-tasks/header-tasks.jsx';
import ChatBox from '../../components/chat-box/chat-box.jsx';
import Conversations from '../../components/chat-box/conversations.jsx';
import Contacts from '../../components/chat-box/contacts.jsx';
import InfoTile from '../../components/info-tile/info-tile.jsx';
import ProgressBar from '../../components/info-tile/progress-bar.jsx';
import StatTile from '../../components/info-tile/stat-tile.jsx';
import Box from '../../components/custom-box/box.jsx';


class Header extends Component {

    state = {
        isOpen: true
    }

    messages = [
        {
            id: "1",
            title: "first message",
            avatar: "/dist/img/avatar.png",
            time: "8:33 PM Today",
            content: "this is some body content"
        },
        {
            id: "2",
            title: "second message",
            avatar: "/dist/img/avatar2.png",
            time: "8:33 PM Today",
            content: "this is some body content"
        },
        {
            id: "3",
            title: "third message",
            avatar: "/dist/img/avatar.png",
            time: "8:33 PM Today",
            content: "this is some body content"
        },
        {
            id: "4",
            title: "fourth message",
            avatar: "/dist/img/avatar3.png",
            time: "8:33 PM Today",
            content: "this is some body content"
        }
    ];

    task = [
        {
            id: "t1",
            progress: 20,
            content: "Download progress 20"
        },
        {
            id: "t2",
            progress: 25,
            content: "Download progress 25"
        },
        {
            id: "t3",
            progress: 60,
            content: "Download progress 60"
        },
        {
            id: "t4",
            progress: 90,
            content: "Download progress 90"
        },
        {
            id: "t5",
            progress: 69,
            content: "Download progress 69"
        }

    ];

    notification = [
        {
            id: "n1",
            content: '5 new members joined today',
            theme: 'fa fa-users text-aqua'
        },
        {
            id: "n2",
            content: 'Very long description here that may not fit into the page and may cause design problems',
            theme: 'fa fa-warning text-yellow'
        },
        {
            id: "n3",
            content: 'You changed your username',
            theme: 'fa fa-user text-red'
        }
    ];

    componentDidMount() {
        document.body.className = "skin-blue sidebar-mini sidebar-open";
    }

    pushMenu = () => {
        // if open close
        if (this.state.isOpen) {
            document.body.className = "skin-blue sidebar-mini sidebar-collapse";
        } else {
            document.body.className = "skin-blue sidebar-mini sidebar-open";
        }
        // invert state
        this.setState({ isOpen: !this.state.isOpen });

    }


    render() {
        return (<header className="main-header">
            {/* Logo */}
            <a href="index2.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>A</b>LT</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={this.pushMenu}>
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Messages: style can be found in dropdown.less*/}
                        <HeaderMessages items={this.messages} onSeeAllClicked={(e) => { console.log(e) }} onItemClicked={(e) => { console.log(e) }} />
                        {/* Notifications: style can be found in dropdown.less */}
                        <HeaderNotifications items={this.notification} onItemClicked={(e) => { console.log(e) }} onViewAllClicked={(e) => { console.log(e) }} />
                        {/* Tasks: style can be found in dropdown.less */}
                        <HeaderTasks items={this.task} onItemClicked={(e) => { console.log(e) }} onViewAllClicked={(e) => { console.log(e) }} />
                        {/* User Account: style can be found in dropdown.less */}
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                                <span className="hidden-xs">Alexander Pierce</span>
                            </a>
                            <ul className="dropdown-menu">
                                {/* User image */}
                                <li className="user-header">
                                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                                    <p>
                                        Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
                                {/* Menu Body */}
                                <li className="user-body">
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </li>
                                {/* Menu Footer */}
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        { /* Control Sidebar Toggle Button */}
                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>);
    }
}

class SectionWidgetsDemo extends Component {

    state = {
        conversations: [{
            id: '1',
            name: 'Alexander Pierce',
            avatar: '../dist/img/user1-128x128.jpg',
            date: '23 Jan 2:00 pm',
            message: "Is this template really for free? That's unbelievable!"
        }, {
            id: '2',
            align: 'right',
            name: 'Sarah Bullock',
            avatar: '../dist/img/user3-128x128.jpg',
            date: '23 Jan 2:05 pm',
            message: 'You better believe it!'
        }],
    };


    contacts = [{
        id: '1',
        name: 'Count Dracula',
        avatar: '../dist/img/user1-128x128.jpg',
        link: '#',
        date: '2/28/2015',
        message: 'How have you been? I was...'
    }, {
        id: '2',
        name: 'Count Dracula',
        avatar: '../dist/img/user1-128x128.jpg',
        link: '#',
        date: '2/28/2015',
        message: 'How have you been? I was...'
    }];

    sendMessage = (e) => {
        const chat = {
            id: (e + '123'),
            name: 'You',
            avatar: '../dist/img/user1-128x128.jpg',
            date: '3 Jul 11:41 am',
            message: e
        };
        this.setState({
            conversations: [...this.state.conversations, chat]
        });
    }


    infoTileOptions = [{
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

    progressInfoTileOptions = [{
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

    statTileOptions = [{
        id: '1',
        theme: 'bg-aqua',
        icon: 'fa-shopping-cart',
        subject: 'New Orders',
        stats: '150',
        link: '#'
    }, {
        id: '2',
        theme: 'bg-green',
        icon: 'ion-stats-bars',
        subject: 'Bounce Rate',
        stats: '53%',
        link: '#'
    }, {
        id: '3',
        theme: 'bg-yellow',
        icon: 'ion-person-add',
        subject: 'User Registrations',
        stats: '44',
        link: 'https://facebook.com/me'
    }, {
        id: '4',
        theme: 'bg-red',
        icon: 'ion-pie-graph',
        subject: 'Unique Visitors',
        stats: '65',
        link: '#'
    }];

    boxOptions = [{
        collapsed: true,
        theme: 'box-default',
        title: 'Expandable',
        content: 'The body of the box',
        boxTools: ['expand', 'remove']
    }, {
        theme: 'box-success',
        title: 'Collapsable',
        content: 'The body of the box',
        boxTools: ['collapse']
    }, {
        theme: 'box-warning',
        title: 'Removable',
        content: 'The body of the box',
        boxTools: ['remove']
    }, {
        theme: 'box-danger',
        loading: true,
        title: 'Loading state',
        content: 'The body of the box'
    }];

    boxBorderedOptions = [{
        collapsed: true,
        theme: 'box-primary',
        border: true,
        title: 'Expandable',
        content: 'The body of the box',
        boxTools: ['expand', 'remove']
    }, {
        theme: 'box-warning',
        border: true,
        title: 'Collapsable',
        content: 'The body of the box',
        boxTools: ['collapse']
    }, {
        theme: 'box-danger',
        border: true,
        title: 'Removable',
        content: 'The body of the box',
        boxTools: ['remove']
    }, {
        theme: 'box-info',
        loading: true,
        border: true,
        title: 'Loading state',
        content: 'The body of the box',
    }];

    statTileLinkClick = (link, id) => {
        console.log(link, id);
    }

    render() {
        return (
            <React.Fragment>
                {/* place div inside react fragment */}
                <section className="content-header">
                    <h1>Widgets<small>Preview page</small></h1>
                </section>
                <section className="content">
                    <div className="row">
                        {this.infoTileOptions.map(tile => (
                            <InfoTile key={tile.subject} theme={tile.theme} stats={tile.stats} subject={tile.subject} icon={tile.icon} content="" width={3} />
                        ))}
                    </div>
                    <div className="row">
                        {this.progressInfoTileOptions.map(options => (
                            <InfoTile
                                key={"rowTwo" + options.subject}
                                width={3}
                                content=''
                                icon={options.icon}
                                stats={options.stats}
                                subject={options.subject}
                                theme={options.theme} >
                                <ProgressBar percent={options.progressPercent} description={options.progressDescription} color={options.progressColor} />
                            </InfoTile>
                        ))}
                    </div>
                    <div className="row">
                        {this.statTileOptions.map(options => (
                            <StatTile
                                onLinkClicked={this.statTileLinkClick}
                                key={options.id}
                                id={options.id}
                                width={3}
                                icon={options.icon}
                                link={options.link}
                                stats={options.stats}
                                subject={options.subject}
                                theme={options.theme} />
                        ))}
                    </div>
                    <div className="row">
                        {this.boxOptions.map((options, iterator) => (
                            <Box
                                key={"rowFour" + iterator}
                                width={3}
                                border={false}
                                content={options.content}
                                loading={options.loading}
                                theme={options.theme}
                                title={options.title}
                                collapsed={options.collapsed}
                                boxTools={options.boxTools} />
                        ))}
                    </div>
                    <div className="row">
                        {this.boxBorderedOptions.map((options, iterator) => (
                            <Box
                                key={"rowFive" + iterator}
                                width={3}
                                border={options.border}
                                content={options.content}
                                loading={options.loading}
                                theme={options.theme}
                                title={options.title}
                                collapsed={options.collapsed}
                                boxTools={options.boxTools} />
                        ))}
                    </div>
                    <div className="row" >
                        <ChatBox title="Interactive" clearOnSend width={3} notification={2} sendMessage={this.sendMessage}>
                            <Conversations conversations={this.state.conversations} />
                            <Contacts contacts={this.contacts} />
                        </ChatBox>
                        <ChatBox title="Direct Message" clearOnSend width={3} notification={2}>
                            <Conversations conversations={[]} />
                            <Contacts contacts={this.contacts} />
                        </ChatBox>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


class Dashboard extends Component {



    render() {
        return (
            <div className="wrapper" style={{ minHeight: (window.innerHeight + "px") }}>
                <Header />
                <div className="content-wrapper">

                    <SectionWidgetsDemo />

                </div>
            </div>
        );
    }
}

// style={{ margin: 0, top: 'auto', right: 0, zIndex: 1000, bottom: 0, width: '100%', left: (window.innerWidth - 340), position: 'fixed' }}

export default Dashboard;