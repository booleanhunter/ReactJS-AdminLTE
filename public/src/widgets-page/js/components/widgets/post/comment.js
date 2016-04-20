define(
    [
        'react'
    ],
    function (React) {
        var Post = React.createClass({
            getDefaultProps: function() {
                return {
                    content: 'sample comment',
                    displayName: 'John Doe', 
                    displayPicture: '../dist/img/user4-128x128.jpg',
                    date: '8:03 PM Today'
                }
            },
            render: function() {
                return (
                    <div className="box-comment">
                        {/* User image */}
                        <img className="img-circle img-sm" src={this.props.displayPicture} alt="user image" />
                        <div className="comment-text">
                            <span className="username">
                                {this.props.displayName}
                                <span className="text-muted pull-right">{this.props.date}</span>
                            </span>
                            {/* /.username */}
                            {this.props.content}
                        </div>
                        {/* /.comment-text */}
                    </div>
                )
            }
        });

        return Post;
    }
)