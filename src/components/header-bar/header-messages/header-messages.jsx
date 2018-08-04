import React, { Component } from 'react';
import MessageItem from './message-item';
import PropTypes from 'prop-types';


const MessageList = ({ items, onItemClicked }) => (
    items.map(messageDetails => (
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
            this.setState({
                expanded: false
            });
        }
    }

    setWrapperRef = (node) =>{
        this.wrapperRef = node;
    }


    render() {
        const { expanded } = this.state;
        const { items } = this.props;
        const length = items ? items.length : 0;

        return (
            <li ref={this.setWrapperRef} className={"dropdown messages-menu " + (expanded ? "open" : "")}>
                <a href="#" onClick={this.toggleMenu} className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    {length && <span className="label label-success">{length}</span>}
                </a>
                <ul className="dropdown-menu">
                    <li className="header">You have {length} messages.</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv" >

                            <ul className="menu" >
                                {items && <MessageList items={items} onItemClicked={this.props.onItemClicked} />}
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
    items: PropTypes.array,
    onItemClicked: PropTypes.func.isRequired
}



export default HeaderMessages;
