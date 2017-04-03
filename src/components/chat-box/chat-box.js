define(
    [
        'react',
        'react-dom',
        '../../services/common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var ChatBox = React.createClass({
            getDefaultProps: function() {
                return {
                    headerTheme: 'box-primary',
                    notificationTheme: 'bg-light-blue',
                    chatTheme: 'direct-chat-primary',
                    buttonTheme: 'btn-primary',
                    title: 'Chat Box',
                    notifications: 0,
                    sendMessage: function() {}
                }
            },
            getInitialState: function() {
                return {
                    message: ''
                };
            },
            changeMessage: function(ev) {
                this.setState({message: ev.target.value})
            },
            sendMessage: function (e) {
                e.preventDefault();
                this.props.sendMessage(this.state.message);  
            },
            toggleCollapse: function(event) {
                var box = ReactDOM.findDOMNode(this).children[0],
                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
                    icon = event.currentTarget.children[0];

                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
            },
            removeBox: function(event){
                var box = ReactDOM.findDOMNode(this).children[0];
                commonFunctions.removeBox(box);
            },
            toggleChat: function(){
                var box = ReactDOM.findDOMNode(this).children[0];

                if(box.className.indexOf('direct-chat-contacts-open') === -1){
                    box.className += ' direct-chat-contacts-open';
                }else{
                    box.className = box.className.replace(/ direct-chat-contacts-open/g,'');
                }
            },
            render: function() {
                var borderClass = '', that = this;
                var a = React.Children.map(this.props.children, function(child){
                    return child
                });
                if(this.props.border === true){
                    borderClass = 'box-solid';
                }

                return (
                    <div className={"col-md-"+this.props.width}>
                        {/* DIRECT CHAT PRIMARY */}
                        <div className={"box " + this.props.headerTheme + " direct-chat " + this.props.chatTheme + " " + borderClass}>
                            <div className="box-header with-border">
                                <h3 className="box-title">{this.props.title}</h3>
                                <div className="box-tools pull-right">
                                    <span data-toggle="tooltip" title="" className={"badge "+this.props.notificationTheme} 
                                        data-original-title={this.props.notifications+ " New Messages"}>
                                        {this.props.notifications}
                                    </span>
                                    <button className="btn btn-box-tool" data-widget="collapse" onClick={that.toggleCollapse}>
                                        <i className="fa fa-minus"></i>
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
                            <div className="box-body">
                                {this.props.children}
                            </div>
                            {/* /.box-body */}
                            <div className="box-footer">
                                <form onSubmit={this.sendMessage}>
                                    <div className="input-group">
                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" onChange={this.changeMessage} />
                                        <span className="input-group-btn">
                                            <button type="submit" className={"btn btn-flat "+this.props.buttonTheme}>Send Message</button>
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
        });

        return ChatBox;
    }
)