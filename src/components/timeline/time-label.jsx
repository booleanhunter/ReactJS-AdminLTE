import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TimeLabel extends Component {
	render() {
		return (
			<li className="time-label">
				<span className={this.props.theme}>
					{this.props.content}
				</span>
			</li>
		);
	}
}

TimeLabel.defaultProps = {
	theme: 'bg-red',
	content: 'Default content',
};

TimeLabel.propTypes = {
	theme: PropTypes.string,
	content: PropTypes.any
};

export default TimeLabel;
