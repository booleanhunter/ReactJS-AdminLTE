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

                var notificationList = this.props.notifications.map(function(notificationDetails){
                    return (
                        <li>
                            <a href="#">
                                <i className={notificationDetails.className}></i> {notificationDetails.subject}
                            </a>
                        </li>
                    )
                });

    			return (
                    <ul className="dropdown-menu">
                        <li className="header">You have {this.props.notifications.length} notifications</li>
                        <li>
                            {/* inner menu: contains the actual data */}
                            <div className="slimScrollDiv">

                                <ul className="menu">
                                    {notificationList}
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