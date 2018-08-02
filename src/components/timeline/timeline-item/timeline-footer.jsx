import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimelineFooter extends Component {
	render() {
		return (
			<div className="timeline-footer">
				{this.props.content}
				{this.props.children}
			</div>
		)
	}
}

TimelineFooter.propTypes = {
	content: PropTypes.any,
	children: PropTypes.any
};

return TimelineFooter
