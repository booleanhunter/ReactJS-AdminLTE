import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
    render() {
        const {id, theme, content, onItemClicked} = this.props; 
        return (
            <li key={"header-notification-item"}>
                <a id={id} href="#" onClick={onItemClicked}>
                    <i className={theme}></i> {content}
                </a>
            </li>
        );
    }
}

NotificationItem.propTypes = {
    id : PropTypes.string.isRequired,
    theme : PropTypes.string,
    content : PropTypes.any,
    onItemClicked : PropTypes.func.isRequired
}

export default NotificationItem;