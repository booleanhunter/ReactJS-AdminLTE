import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialButton extends Component {

    render() {
        var position;
        switch (this.props.position) {
            case 'left':
                position = 'pull-left';
                break;
            case 'right':
                position = 'pull-right';
                break;
            default:
                position = ''
        }

        if (this.props.type === 'like') {
            return (
                <button className={"btn btn-xs " + position + " " + this.props.theme}>
                    <i className="fa fa-thumbs-o-up"></i>
                    Like
                        </button>

            )
        } else if (this.props.type === 'share') {
            return (
                <button className={"btn btn-xs " + position + " " + this.props.theme}>
                    <i className="fa fa-share"></i>
                    Share
                        </button>
            )
        }

    }
}

SocialButton.defaultProps = {
    position: '',
    type: 'like',
    theme: 'btn-default'
};

SocialButton.propTypes = {
    theme: PropTypes.string,
    type: PropTypes.string,
    position: PropTypes.position
}

export default SocialButton;