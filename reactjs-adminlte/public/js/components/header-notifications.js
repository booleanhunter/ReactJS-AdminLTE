define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var HeaderNotifications = React.createClass({
            componentDidMount:function(){

            },
    		render: function(){
                var that = this;
    			return (
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
    			)
    		}
    	})

    	return HeaderNotifications;
    }   
)     