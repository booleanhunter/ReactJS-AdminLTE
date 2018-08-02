import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div id={comment.id} onClick={this.props.onCommentItemClicked} className="box-comment">
                {/* User image */}
                <img className="img-circle img-sm" src={comment.avatar} alt="user image" />
                <div className="comment-text">
                    <span className="username">
                        {comment.name}
                        <span className="text-muted pull-right">{comment.date}</span>
                    </span>
                    {/* /.username */}
                    {comment.content}
                </div>
                {/* /.comment-text */}
            </div>
        );
    }
}

Comment.propTypes = {
    comment: PropTypes.shape(
        {
            id: PropTypes.string,
            content: PropTypes.any,
            name: PropTypes.string,
            avatar: PropTypes.string,
            date: PropTypes.string
        }
    ),
    onCommentItemClicked: PropTypes.func.isRequired
}

export default Comment;