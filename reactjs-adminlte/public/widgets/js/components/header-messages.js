define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var HeaderMessages = React.createClass({
            componentDidMount:function(){

            },
    		render: function(){
                var that = this;

                var messageList = this.props.messages.map(function(messageDetails, iterator){
                    return (
                        <li key={"header-message-item"+iterator}>
                            {/* start message */}
                            <a href="#">
                                <div className="pull-left">
                                    <img src={messageDetails.displayPicture} className="img-circle" alt="User Image" />
                                </div>
                                <h4>
                                    {messageDetails.displayName}
                                    <small><i className="fa fa-clock-o"></i> {messageDetails.messageTime}</small>
                                </h4>
                                <p>{messageDetails.messageSubject}</p>
                            </a>
                        </li>
                    )
                });

    			return (
                    <ul className="dropdown-menu">
                        <li className="header">You have {this.props.messages.length} messages</li>
                        <li>
                            {/* inner menu: contains the actual data */}
                            <div className="slimScrollDiv" >

                                <ul className="menu" >
                                    {messageList}
                                </ul>
                                
                                <div className="slimScrollBar"></div>
                                <div className="slimScrollRail"></div>
                            </div>
                        </li>
                        <li className="footer"><a href="#">See All Messages</a></li>
                    </ul>
    			)
    		}
    	})

    	return HeaderMessages;
    }   
)     