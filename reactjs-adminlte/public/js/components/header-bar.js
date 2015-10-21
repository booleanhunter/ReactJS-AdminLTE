define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var HeaderBar = React.createClass({
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
    		render: function(){
                var that = this;
    			return (
    				<header className="main-header">
                        {/* Logo */}
                        <a href="index2.html" className="logo">
                            {/* mini logo for sidebar mini 50x50 pixels */}
                            <span className="logo-mini"><b>A</b>LT</span>
                            {/* logo for regular state and mobile devices */}
                            <span className="logo-lg"><b>Admin</b>LTE</span>
                        </a>
                        {/* Header Navbar: style can be found in header.less */}
                        <nav className="navbar navbar-static-top" role="navigation">
                            {/* Sidebar toggle button*/}
                            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    {/* Messages: style can be found in dropdown.less*/}
                                    <li className="dropdown messages-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o"></i>
                                            <span className="label label-success">4</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 4 messages</li>
                                            <li>
                                                {/* inner menu: contains the actual data */}
                                                <div className="slimScrollDiv" >
                                                    <ul className="menu" >
                                                        <li>
                                                            {/* start message */}
                                                            <a href="#">
                                                                <div className="pull-left">
                                                                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <h4>
                                                Support Team
                                                <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                              </h4>
                                                                <p>Why not buy a new awesome theme?</p>
                                                            </a>
                                                        </li>
                                                        {/* end message */}
                                                        <li>
                                                            <a href="#">
                                                                <div className="pull-left">
                                                                    <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <h4>
                                                AdminLTE Design Team
                                                <small><i className="fa fa-clock-o"></i> 2 hours</small>
                                              </h4>
                                                                <p>Why not buy a new awesome theme?</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="pull-left">
                                                                    <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <h4>
                                                Developers
                                                <small><i className="fa fa-clock-o"></i> Today</small>
                                              </h4>
                                                                <p>Why not buy a new awesome theme?</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="pull-left">
                                                                    <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <h4>
                                                Sales Department
                                                <small><i className="fa fa-clock-o"></i> Yesterday</small>
                                              </h4>
                                                                <p>Why not buy a new awesome theme?</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="pull-left">
                                                                    <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <h4>
                                                Reviewers
                                                <small><i className="fa fa-clock-o"></i> 2 days</small>
                                              </h4>
                                                                <p>Why not buy a new awesome theme?</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="slimScrollBar" ></div>
                                                    <div className="slimScrollRail" ></div>
                                                </div>
                                            </li>
                                            <li className="footer"><a href="#">See All Messages</a></li>
                                        </ul>
                                    </li>
                                    {/* Notifications: style can be found in dropdown.less */}
                                    <li className="dropdown notifications-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o"></i>
                                            <span className="label label-warning">10</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 10 notifications</li>
                                            <li>
                                                {/* inner menu: contains the actual data */}
                                                <div className="slimScrollDiv">
                                                    <ul className="menu">
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-users text-red"></i> 5 new members joined
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-user text-red"></i> You changed your username
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="slimScrollBar"></div>
                                                    <div className="slimScrollRail"></div>
                                                </div>
                                            </li>
                                            <li className="footer"><a href="#">View all</a></li>
                                        </ul>
                                    </li>
                                    {/* Tasks: style can be found in dropdown.less */}
                                    <li className="dropdown tasks-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-flag-o"></i>
                                            <span className="label label-danger">9</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 9 tasks</li>
                                            <li>
                                                {/* inner menu: contains the actual data */}
                                                <div className="slimScrollDiv">
                                                    <ul className="menu">
                                                        <li>
                                                            {/* Task item */}
                                                            <a href="#">
                                                                <h3>
                                                Design some buttons
                                                <small className="pull-right">20%</small>
                                              </h3>
                                                                <div className="progress xs">
                                                                    <div className="progress-bar progress-bar-aqua">
                                                                        <span className="sr-only">20% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* end task item */}
                                                        <li>
                                                            {/* Task item */}
                                                            <a href="#">
                                                                <h3>
                                                Create a nice theme
                                                <small className="pull-right">40%</small>
                                              </h3>
                                                                <div className="progress xs">
                                                                    <div className="progress-bar progress-bar-green">
                                                                        <span className="sr-only">40% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* end task item */}
                                                        <li>
                                                            {/* Task item */}
                                                            <a href="#">
                                                                <h3>
                                                Some task I need to do
                                                <small className="pull-right">60%</small>
                                              </h3>
                                                                <div className="progress xs">
                                                                    <div className="progress-bar progress-bar-red">
                                                                        <span className="sr-only">60% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* end task item */}
                                                        <li>
                                                            {/* Task item */}
                                                            <a href="#">
                                                                <h3>
                                                Make beautiful transitions
                                                <small className="pull-right">80%</small>
                                              </h3>
                                                                <div className="progress xs">
                                                                    <div className="progress-bar progress-bar-yellow">
                                                                        <span className="sr-only">80% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* end task item */}
                                                    </ul>
                                                    <div className="slimScrollBar"></div>
                                                    <div className="slimScrollRail"></div>
                                                </div>
                                            </li>
                                            <li className="footer">
                                                <a href="#">View all tasks</a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* User Account: style can be found in dropdown.less */}
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                            <span className="hidden-xs">Alexander Pierce</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            {/* User image */}
                                            <li className="user-header">
                                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
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
                                    { /* ontrol Sidebar Toggle Button */}
                                    <li>
                                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
    			)
    		}
    	})

    	return HeaderBar;
    }   
)     