define(
    [
        'react',
        'reactDom',
        '../../../common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var Conversations = React.createClass({
            render: function() {

                var conversations = this.props.conversations.map(function(messageDetails, iterator){
                    if(messageDetails.self === true){
                        return (
                            <div className="direct-chat-msg right" key={"message"+iterator}>
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-right">
                                        {messageDetails.name}
                                    </span>
                                    <span className="direct-chat-timestamp pull-left">
                                        {messageDetails.date}
                                    </span>
                                </div>
                                {/* /.direct-chat-info */}
                                <img className="direct-chat-img" src={messageDetails.displayPicture} alt="message user image" />
                                {/* /.direct-chat-img */}
                                <div className="direct-chat-text">
                                    {messageDetails.message}
                                </div>
                                {/* /.direct-chat-text */}
                            </div>
                        )
                    }else{
                        return (
                            <div className="direct-chat-msg" key={"message"+iterator}>
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-left">
                                        {messageDetails.name}
                                    </span>
                                    <span className="direct-chat-timestamp pull-right">
                                        {messageDetails.date}
                                    </span>
                                </div>
                                {/* /.direct-chat-info */}
                                <img className="direct-chat-img" src={messageDetails.displayPicture} alt="message user image" />
                                {/* /.direct-chat-img */}
                                <div className="direct-chat-text">
                                    {messageDetails.message}
                                </div>
                                {/* /.direct-chat-text */}
                            </div>
                        )
                    }
                });

                return (      
                    <div className="direct-chat-messages">
                        {/* Message. Default to the left */}
                        {conversations}
                    </div>
                )
                
            }
        });

        return Conversations;
    }
)