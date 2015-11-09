define(
    [
        'react',
        'reactDom',
        '../../common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var ChatBox = React.createClass({
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
                    box.className = box.className.replace(/direct-chat-contacts-open/g,'');
                }
            },
            render: function() {
                var options = this.props.options, borderClass,
                    that = this;

                var conversations = options.conversations.map(function(messageDetails, iterator){
                    if(messageDetails.self === true){
                        return (
                            <div className="direct-chat-msg right" key={"message"+iterator}>
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-right">
                                        {messageDetails.name}
                                    </span>
                                    <span className="direct-chat-timestamp pull-left">
                                        {messageDetails.date}
                                    </span>
                                </div>
                                {/* /.direct-chat-info */}
                                <img className="direct-chat-img" src={messageDetails.displayPicture} alt="message user image" />
                                {/* /.direct-chat-img */}
                                <div className="direct-chat-text">
                                    {messageDetails.message}
                                </div>
                                {/* /.direct-chat-text */}
                            </div>
                        )
                    }else{
                        return (
                            <div className="direct-chat-msg" key={"message"+iterator}>
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-left">
                                        {messageDetails.name}
                                    </span>
                                    <span className="direct-chat-timestamp pull-right">
                                        {messageDetails.date}
                                    </span>
                                </div>
                                {/* /.direct-chat-info */}
                                <img className="direct-chat-img" src={messageDetails.displayPicture} alt="message user image" />
                                {/* /.direct-chat-img */}
                                <div className="direct-chat-text">
                                    {messageDetails.message}
                                </div>
                                {/* /.direct-chat-text */}
                            </div>
                        )
                    }
                });
                
                var contacts = options.contacts.map(function(contactDetails, iterator){
                    return (
                        <li key={"contact"+iterator}>
                            <a href={contactDetails.link}>
                                <img className="contacts-list-img" src={contactDetails.displayPicture} />
                                <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                        {contactDetails.name}
                                    <small className="contacts-list-date pull-right">
                                        {contactDetails.date}
                                    </small>
                                </span>
                                    <span className="contacts-list-msg">
                                        {contactDetails.message}
                                    </span>
                                </div>
                                {/* /.contacts-list-info */}
                            </a>
                        </li>
                    )
                });

                if(options.theme.border === true){
                    borderClass = 'box-solid';
                }

                return (
                    <div className="col-md-3">
                        {/* DIRECT CHAT PRIMARY */}
                        <div className={"box " + options.theme.header + " direct-chat " + options.theme.chat + " " + borderClass}>
                            <div className="box-header with-border">
                                <h3 className="box-title">{options.title}</h3>
                                <div className="box-tools pull-right">
                                    <span data-toggle="tooltip" title="" className={"badge "+options.theme.notification} 
                                        data-original-title={options.notifications+ " New Messages"}>
                                        {options.notifications}
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
                                {/* Conversations are loaded here */}
                                <div className="direct-chat-messages">
                                    {/* Message. Default to the left */}
                                    {conversations}
                                </div>
                                {/*/.direct-chat-messages*/}

                                {/* Contacts are loaded here */}
                                <div className="direct-chat-contacts">
                                    <ul className="contacts-list">
                                        {contacts}
                                        {/* End Contact Item */}
                                    </ul>
                                    {/* /.contatcts-list */}
                                </div>
                                {/* /.direct-chat-pane */}
                            </div>
                            {/* /.box-body */}
                            <div className="box-footer">
                                <form action="#" method="post">
                                    <div className="input-group">
                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                        <span className="input-group-btn">
                                            <button type="button" className={"btn btn-flat "+options.theme.button}>Send</button>
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