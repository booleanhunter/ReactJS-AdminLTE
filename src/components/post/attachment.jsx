import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Attachment extends Component {
    render() {
        const { attachment } = this.props;
        return (
            <div className="attachment-block clearfix">
                <img className="attachment-img" src={attachment.picture} alt="attachment image" />
                <div className="attachment-pushed">
                    <h4 className="attachment-heading">
                        <a href={attachment.link} onClick={this.props.onAttachmentLinkClicked}>
                            {attachment.title}
                        </a>
                    </h4>
                    <div className="attachment-text">
                        {attachment.content}
                        <a href={attachment.link} onClick={this.props.onAttachmentLinkClicked}>more</a>
                    </div>
                </div>
            </div>
        );
    }
}

Attachment.propTypes = {
    attachment: PropTypes.shape(
        {
            link: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.any
        }
    ),
    onAttachmentLinkClicked: PropTypes.func.isRequired,
};

export default Attachment;
