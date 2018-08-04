import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialInfo extends Component {

    render() {
        var position = '';
        switch (this.props.position) {
            case 'left':
                position = 'pull-left';
                break;
            case 'right':
                position = 'pull-right';
                break;
            default:
                position = 'pull-right';
        }

        return (
            <span className={"text-muted " + position}>
                {this.props.info}
            </span>
        );
    }
}

SocialInfo.defaultProps = {
    info: '',
    position: 'pull-right'
};


SocialInfo.propsTypes = {
    info: PropTypes.any,
    position: PropTypes.string
};

export default SocialInfo;
