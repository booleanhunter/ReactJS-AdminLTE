import React, { Component } from 'react';

const ConversationList = ({ conversations }) => (
    conversations.map(messageDetails => (
        <div className={"direct-chat-msg " + messageDetails.align} key={"message" + messageDetails.id}>
            <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-right">
                    {messageDetails.name}
                </span>
                <span className="direct-chat-timestamp pull-left">
                    {messageDetails.date}
                </span>
            </div>
            {/* /.direct-chat-info */}
            <img className="direct-chat-img" src={messageDetails.avatar} alt="message user image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
                {messageDetails.message}
            </div>
            {/* /.direct-chat-text */}
        </div>
    ))
);

class Conversations extends Component {
    render() {
        return (
            <div className="direct-chat-messages">
                {/* Message. Default to the left */}
                <ConversationList conversations={this.props.conversations}/>
            </div>
        )

    }
}
export default Conversations;
