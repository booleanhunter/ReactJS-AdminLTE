import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageItem extends Component {

    render() {
        const { onItemClicked, avatar, time, title, content, id } = this.props;
        return (
            <li>
                {/* start message */}
                <a id={id} href="#" onClick={onItemClicked}>
                    <div className="pull-left">
                        <img src={avatar} className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                        {title}
                        <small><i className="fa fa-clock-o"></i> {time}</small>
                    </h4>
                    <p>{content}</p>
                </a>
            </li>
        );
    }
}

MessageItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
    onItemClicked: PropTypes.func.isRequired
}

export default MessageItem;

