define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-widgets/info-tile',
        './page-widgets/progress-info-tile',
        './page-widgets/stat-tile',
        './page-widgets/small-box'
    ],
    function (React, $, HeaderBar, NavigationMenu, InfoTile, ProgressInfoTile, StatTile, SmallBox) {
        var Widgets = React.createClass({
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
                        <InfoTile options = {options} key={"rowOne"+iterator}/>
                    )
                });

                var row2Elements = this.state.row2Options.map(function (options, iterator) {
                    return (
                        <ProgressInfoTile options = {options} key={"rowTwo"+iterator} />
                    )
                });

                var row3Elements = this.state.row3Options.map(function (options, iterator) {
                    return (
                        <StatTile options = {options} key={"rowThree"+iterator}/>
                    )
                });

                var row4Elements = this.state.row4Options.map(function (options, iterator) {
                    return (
                        <SmallBox options = {options} key={"rowFour"+iterator} />
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
                                    {row1Elements}
                                </div>

                                <div className="row">
                                    {row2Elements}         
                                </div>

                                <div className="row">
                                    {row3Elements}                
                                </div>

                                <div className="row">
                                    {row4Elements}       
                                </div>

                                <div className="row">
                                                     
                                </div>

                                <div className="row">
                                                     
                                </div>

                                <div className="row">
                                                     
                                </div>

                                <div className="row">
                                                     
                                </div>
                            </section>

                        </div>

                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 2.3.0
                            </div>
                            <strong>Copyright © 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                            All rights reserved.
                        </footer>

                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        return Widgets;
    }
)