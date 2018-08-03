import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './notification-item';

const NotificationList = ({ items, onItemClicked }) => (
    items.map(notificationDetails => (
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


    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleMenu = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            console.log("click outside");
            this.setState({
                expanded: false
            });
        }
    }

    setWrapperRef = (node) =>{
        this.wrapperRef = node;
    }

    render() {
        const { items } = this.props;
        const { expanded } = this.state;
        const length = items ? items.length : 0;
        return (
            <li ref={this.setWrapperRef} className={"dropdown notifications-menu " + (expanded ? "open" : "")}>
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
                             {items &&   <NotificationList items={items} onItemClicked={this.props.onItemClicked} />}
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
    items: PropTypes.array,
    onViewAllClicked: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired
};

export default HeaderNotifications;
