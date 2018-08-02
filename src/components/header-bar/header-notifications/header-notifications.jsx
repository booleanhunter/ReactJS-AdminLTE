import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './notification-item';

const NotificationList = ({ notifications, onItemClicked }) => (
    notifications.map(notificationDetails => (
        <NotificationItem
            onItemClicked={onItemClicked}
            id={notificationDetails.id}
            key={notificationDetails.id}
            theme={notificationDetails.theme}
            content={notificationDetails.content} />
    ))
);


class HeaderNotifications extends Component {

    state = {
        expanded: false
    }

    toggleMenu = () => {
        this.setState(prev => ({
            expanded: !prev.expanded
        }));
    }

    render() {
        const { notifications } = this.props;
        const { expanded } = this.state;
        const length = notifications ? notifications.length : 0;
        return (
            <li className={"dropdown notifications-menu " + (expanded ? "open" : "")}>
                <a href="#" onClick={this.toggleMenu} className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    {length > 0 && <span className="label label-warning">{length}</span>}
                </a>

                <ul className="dropdown-menu">
                    <li className="header">You have {length} notifications</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv">

                            <ul className="menu">
                                <NotificationList notifications={notifications} onItemClicked={this.props.onItemClicked} />
                            </ul>

                            <div className="slimScrollBar"></div>
                            <div className="slimScrollRail"></div>
                        </div>
                    </li>
                    <li className="footer"><a onClick={this.props.onViewAllClicked}>View all</a></li>
                </ul>
            </li>
        );
    }
}

HeaderNotifications.propTypes = {
    notifications: PropTypes.array,
    onViewAllClicked: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired
};

export default HeaderNotifications;
