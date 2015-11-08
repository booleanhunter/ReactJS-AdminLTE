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
            render: function() {
                return (
                    <div className="col-md-3">
                        {/* DIRECT CHAT PRIMARY */}
                        <div className="box box-primary direct-chat direct-chat-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Direct Chat</h3>
                                <div className="box-tools pull-right">
                                    <span data-toggle="tooltip" title="" className="badge bg-light-blue" data-original-title="3 New Messages">
                                        3
                                    </span>
                                    <button className="btn btn-box-tool" data-widget="collapse">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <button className="btn btn-box-tool" data-toggle="tooltip" title="" data-widget="chat-pane-toggle" data-original-title="Contacts">
                                        <i className="fa fa-comments"></i>
                                    </button>
                                    <button className="btn btn-box-tool" data-widget="remove">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                {/* Conversations are loaded here */}
                                <div className="direct-chat-messages">
                                    {/* Message. Default to the left */}
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-info clearfix">
                                            <span className="direct-chat-name pull-left">
                                                Alexander Pierce
                                            </span>
                                            <span className="direct-chat-timestamp pull-right">
                                                23 Jan 2:00 pm
                                            </span>
                                        </div>
                                        {/* /.direct-chat-info */}
                                        <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="message user image" />
                                        {/* /.direct-chat-img */}
                                        <div className="direct-chat-text">
                                            Is this template really for free? Thats unbelievable!
                                        </div>
                                        {/* /.direct-chat-text */}
                                    </div>
                                    {/* /.direct-chat-msg */}

                                    {/* Message to the right */}
                                    <div className="direct-chat-msg right">
                                        <div className="direct-chat-info clearfix">
                                            <span className="direct-chat-name pull-right">
                                                Sarah Bullock
                                            </span>
                                            <span className="direct-chat-timestamp pull-left">
                                                23 Jan 2:05 pm
                                            </span>
                                        </div>
                                        {/* /.direct-chat-info */}
                                        <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="message user image" />
                                        {/* /.direct-chat-img */}
                                        <div className="direct-chat-text">
                                            You better believe it!
                                        </div>
                                        {/* /.direct-chat-text */}
                                    </div>
                                    {/* /.direct-chat-msg */}
                                </div>
                                {/*/.direct-chat-messages*/}

                                {/* Contacts are loaded here */}
                                <div className="direct-chat-contacts">
                                    <ul className="contacts-list">
                                        <li>
                                            <a href="#">
                                                <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name">
                                                        Count Dracula
                                                    <small className="contacts-list-date pull-right">
                                                        2/28/2015
                                                    </small>
                                                </span>
                                                    <span className="contacts-list-msg">
                                                        How have you been? I was...
                                                    </span>
                                                </div>
                                                {/* /.contacts-list-info */}
                                            </a>
                                        </li>
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
                                            <button type="button" className="btn btn-primary btn-flat">Send</button>
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