define(
    [
        'react',
        'create-react-class',
        'react-dom',
        './comment',
        './attachment',
        '../../services/common-functions'
    ],
    function (React, createReactClass, ReactDOM, Comment, Attachment, commonFunctions) {
        var Post = createReactClass({
            getDefaultProps: function() {
                return {
                    displayName: 'John Doe',
                    description: 'My profile description',
                    displayPicture: '../dist/img/user7-128x128.jpg'   
                }
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
            render: function() {
                var postPicture = '', attachments = [], comments = [];

                if(this.props.postPicture){
                    postPicture = <img className="img-responsive pad" src={this.props.postPicture} alt="Photo" />;
                }

                if(this.props.attachments){
                    attachments = this.props.attachments.map(function(attachmentDetails, iterator){
                        return (
                            <Attachment key={iterator}
                                title={attachmentDetails.title} 
                                picture={attachmentDetails.picture}
                                link={attachmentDetails.link}
                                content={attachmentDetails.content} />
                        )
                    });
                }

                if(this.props.comments){
                    comments = this.props.comments.map(function(commentDetails, iterator){
                        return (
                            <Comment key={iterator}
                                displayName={commentDetails.displayName} 
                                displayPicture={commentDetails.displayPicture}
                                date={commentDetails.date}
                                content={commentDetails.content} />
                        )
                    });
                }

                return (
                    <div className={"col-md-"+this.props.width}>
                        <div className="box box-widget">
                            <div className="box-header with-border">
                                <div className="user-block">
                                    <img className="img-circle" src={this.props.displayPicture} alt="user image" />
                                    <span className="username">
                                        <a href="#">{this.props.displayName}</a>
                                    </span>
                                    <span className="description">{this.props.date}</span>
                                </div>
                                {/* /.user-block */}
                                <div className="box-tools">
                                    <button className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                                        <i className="fa fa-circle-o"></i>
                                    </button>
                                    <button className="btn btn-box-tool" data-widget="collapse" onClick={this.toggleCollapse}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <button className="btn btn-box-tool" data-widget="remove"  onClick={this.removeBox}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                                {/* /.box-tools */}
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                {postPicture}
                                <p>{this.props.content}</p>
                                {attachments}
                                {this.props.children}
                            </div>
                            {/* /.box-body */}
                            <div className="box-footer box-comments">
                                {comments}
                                {/* /.box-comment */}
                            </div>
                            {/* /.box-footer */}
                            <div className="box-footer">
                                <form action="#" method="post">
                                    <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="alt text" />
                                    {/* .img-push is used to add margin to elements next to floating images */}
                                    <div className="img-push">
                                        <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                                    </div>
                                </form>
                            </div>
                            {/* /.box-footer */}
                        </div>
                    </div>
                )
                
            }
        });

        return Post;
    }
)