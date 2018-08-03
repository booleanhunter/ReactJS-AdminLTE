import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageItem extends Component {

    onClick = (e) =>{
        this.props.onItemClicked(this.props.id);
    }

    render() {
        const { avatar, time, title, content, id } = this.props;
        return (
            <li>
                {/* start message */}
                <a id={id} href="#" onClick={this.onClick}>
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

