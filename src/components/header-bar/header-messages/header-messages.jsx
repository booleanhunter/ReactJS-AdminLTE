import React, { Component } from 'react';
import MessageItem from './message-item';
import PropTypes from 'prop-types';


const MessageList = ({ messages, onItemClicked }) => (
    messages.map(messageDetails => (
        <MessageItem
            onItemClicked={onItemClicked}
            key={messageDetails.id}
            id={messageDetails.id}
            title={messageDetails.title}
            avatar={messageDetails.avatar}
            time={messageDetails.time}
            content={messageDetails.content} />
    ))
);

class HeaderMessages extends Component {


    state = {
        expanded: false //State to toggle dropdown
    }

    toggleMenu = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const { expanded } = this.state;
        const { messages } = this.props;
        const length = messages ? messages.length : 0;

        return (
            <li className={"dropdown messages-menu open" + (expanded ? "open" : "") }>
                <a href="#" onClick={this.toggleMenu} className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">{length}</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="header">You have {length} messages.</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv" >

                            <ul className="menu" >
                                <MessageList messages={messages} onItemClicked={this.props.onItemClicked} />
                            </ul>

                            <div className="slimScrollBar"></div>
                            <div className="slimScrollRail"></div>
                        </div>
                    </li>
                    <li className="footer"><a onClick={this.props.onSeeAllClicked}>See All Messages</a></li>
                </ul>
            </li>

        )
    }
}

HeaderMessages.propTypes = {
    onSeeAllClicked: PropTypes.func.isRequired,
    messages: PropTypes.array,
    onItemClicked: PropTypes.func.isRequired
}



export default HeaderMessages;
