define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var Conversations = createReactClass({
            render: function() {

                var conversations = this.props.conversations.map(function(messageDetails, iterator){
                    return (
                        <div className={"direct-chat-msg " + messageDetails.align} key={"message"+iterator}>
                            <div className="direct-chat-info clearfix">
                                <span className="direct-chat-name pull-right">
                                    {messageDetails.displayName}
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