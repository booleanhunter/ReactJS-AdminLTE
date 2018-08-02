import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProgressBar extends Component {

    render() {
        const { percent, color, description } = this.props;
        var style = {
            width: percent + '%',
            backgroundColor: color
        };

        return (
            <div>
                <div className="progress">
                    <div className="progress-bar" style={style}></div>
                </div>
                <span className="progress-description">
                    {description}
                </span>
            </div>
        );
    }
}

ProgressBar.defaultProps = {
    percent: 50,
    description: 'Default progress 50%',
    color: 'white'
};

ProgressBar.propTypes = {
    description: PropTypes.any,
    color: PropTypes.string,
    percent: PropTypes.number
};

export default ProgressBar;
