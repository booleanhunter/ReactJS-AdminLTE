import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Velocity from 'velocity-animate';

class ChatBox extends Component {

    state = {
        message: null,
        boxClass: '',
        isShowContact: false,
        isCollapsed: false
    }

    toggleAnimationComplete = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    changeMessage = (ev) => {
        this.setState({ message: ev.target.value });
    }
    sendMessage = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
    }

    toggleCollapse = (event) => {
        var chat_box_body = document.getElementById("box-body");
        const { isCollapsed } = this.state;
        Velocity.animate(chat_box_body, isCollapsed ? 'slideDown' : 'slideUp', {
            duration: 500,
            easing: 'easeInSine',
            complete: this.toggleAnimationComplete
        });
    }
    removeBox = (event) => {
        var box = document.getElementById("chat-box");
        Velocity.animate(box, 'slideUp', {
            duration: 500,
            easing: 'easeInSine'
        });
    }

    toggleChat = () => {
        this.setState({
            isShowContact: !this.state.isShowContacts
        })
    }

    render() {

        const { isShowContact, isCollapsed } = this.state;

        var borderClass = '', that = this;
        // var a = React.Children.map(this.props.children, function (child) {
        //     return child
        // });
        if (this.props.border === true) {
            borderClass = 'box-solid';
        }

        return (
            <div className={"col-md-" + this.props.width}>
                {/* DIRECT CHAT PRIMARY */}
                <div id="chat-box" className={"box " + this.props.headerTheme + " direct-chat " + this.props.chatTheme + " " + borderClass + (isShowContact ? " direct-chat-contacts-open" : "")}>
                    <div className="box-header with-border">
                        <h3 className="box-title">{this.props.title}</h3>
                        <div className="box-tools pull-right">
                            <span data-toggle="tooltip" title="" className={"badge " + this.props.notificationTheme}
                                data-original-title={this.props.notifications + " New Messages"}>
                                {this.props.notifications}
                            </span>
                            <button className="btn btn-box-tool" data-widget="collapse" onClick={that.toggleCollapse}>
                                <i className={"fa " + (isCollapsed ? "fa-plus" : "fa-minus")}></i>
                            </button>
                            <button className="btn btn-box-tool" data-toggle="tooltip" title="" data-widget="chat-pane-toggle" data-original-title="Contacts" onClick={that.toggleChat}>
                                <i className="fa fa-comments"></i>
                            </button>
                            <button className="btn btn-box-tool" data-widget="remove" onClick={that.removeBox}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                    {/* /.box-header */}
                    <div id="box-body" className={"box-body" + (isCollapsed ? " collapsed-box" : "")}>
                        {this.props.children}
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                        <form onSubmit={this.sendMessage}>
                            <div className="input-group">
                                <input type="text" name="message" placeholder="Type Message ..." className="form-control" onChange={this.changeMessage} />
                                <span className="input-group-btn">
                                    <button type="submit" className={"btn btn-flat " + this.props.buttonTheme}>Send Message</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    {/* /.box-footer*/}
                </div>
                {/*/.direct-chat */}
            </div>
        )

    }
}

ChatBox.defaultProps = {
    headerTheme: 'box-primary',
    notificationTheme: 'bg-light-blue',
    chatTheme: 'direct-chat-primary',
    buttonTheme: 'btn-primary',
    title: 'Chat Box',
    notifications: 0,
    sendMessage: function () { }
}

ChatBox.propsTypes = {
    headerTheme: PropTypes.string,
    notificationTheme: PropTypes.string,
    chatTheme: PropTypes.string,
    buttonTheme: PropTypes.string,
    title: PropTypes.string,
    notifications: PropTypes.number,
    sendMessage: PropTypes.func
}

export default ChatBox;



