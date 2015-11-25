define(
    [
        'react'
    ],
    function (React) {
        var Attachment = React.createClass({
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
                    <div className="attachment-block clearfix">
                        <img className="attachment-img" src={this.props.picture} alt="attachment image" />
                        <div className="attachment-pushed">
                            <h4 className="attachment-heading">
                                <a href={this.props.link}>
                                    {this.props.title}
                                </a>
                            </h4>
                            <div className="attachment-text">
                                {this.props.content} 
                                <a href={this.props.link}>more</a>
                            </div>
                        </div>
                    </div>
                )
            }
        });

        return Attachment;
    }
)