import React, { Component } from 'react';
import HeaderMessages from '../../../components/header-bar/header-messages/header-messages.jsx';
import HeaderNotifications from '../../../components/header-bar/header-notifications/header-notifications.jsx';
import HeaderTasks from '../../../components/header-bar/header-tasks/header-tasks.jsx';
import ChatBox from '../../../components/chat-box/chat-box.jsx';
import Conversations from '../../../components/chat-box/conversations.jsx';
import Contacts from '../../../components/chat-box/contacts.jsx';



class Header extends Component {
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

    pushMenu = () => {
        console.log("push menu clicked");
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

class Dashboard extends Component {

    state = {
        conversations : [{
            id: '1',
            name: 'Alexander Pierce',
            avatar: '../dist/img/user1-128x128.jpg',
            date: '23 Jan 2:00 pm',
            message: "Is this template really for free? That's unbelievable!"
        }, {
            id : '2',
            align: 'right',
            name: 'Sarah Bullock',
            avatar: '../dist/img/user3-128x128.jpg',
            date: '23 Jan 2:05 pm',
            message: 'You better believe it!'
        }]
    };
    

    contacts = [{
        id : '1',
        name: 'Count Dracula',
        avatar: '../dist/img/user1-128x128.jpg',
        link: '#',
        date: '2/28/2015',
        message: 'How have you been? I was...'
    }, {
        id : '2',
        name: 'Count Dracula',
        avatar: '../dist/img/user1-128x128.jpg',
        link: '#',
        date: '2/28/2015',
        message: 'How have you been? I was...'
    }];

    sendMessage = (e) =>{
       const chat = {
            id :  (e +'123'),
            name : 'You',
            avatar : '../dist/img/user1-128x128.jpg',
            date : '3 Jul 11:41 am',
            message : e
        };
        this.setState({
            conversations : [...this.state.conversations, chat]
        });
    }

    render() {
        return (
            <div className="wrapper" style={{ height: (window.innerHeight + "px") }}>
                <Header />
                <div className="content-wrapper">
                    <div className="row">
                        <ChatBox width={3} notification={2} sendMessage={this.sendMessage}>
                            <Conversations conversations={this.state.conversations} />
                            <Contacts contacts={this.contacts} />
                        </ChatBox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;